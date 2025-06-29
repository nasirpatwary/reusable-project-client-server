require("dotenv").config();
const { MongoClient, ServerApiVersion, ObjectId } = require("mongodb");
const express = require("express");
const app = express();
const port = process.env.PROT || 5000;
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const stripe = require("stripe")(process.env.STRIPE_SECRET_KEY);
// Mailgun setup
const formData = require("form-data");
const Mailgun = require("mailgun.js");
const mailgun = new Mailgun(formData);
const mg = mailgun.client({
  username: "api",
  key: process.env.MAILGUN_API_KEY || "key-yourkeyhere",
});

// Middleware to parse JSON body
app.use(express.json());
const corsOptions = {
  origin: [
    "http://localhost:5173",
    "https://reusable-project.web.app",
    "https://reusable-project-server.vercel.app",
  ],
  credentials: true,
};
app.use(cors(corsOptions));
app.use(express.json());
app.use(cookieParser());

const uri = `mongodb+srv://${process.env.DB_NAME}:${process.env.DB_PASS}@cluster0.qhtx1li.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0`;
// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

async function run() {
  try {
    const db = client.db("reusable-project");
    const userCollection = db.collection("users");
    const productCollection = db.collection("products");
    const cartCollection = db.collection("carts");
    const paymentCollection = db.collection("payments");
    // verify function start
    const verifiToken = async (req, res, next) => {
      const token = req?.cookies?.token;
      if (!token) return res.status(401).send({ message: "Token missing" });

      jwt.verify(token, process.env.JWT_SECRET_TOKEN, (err, decoded) => {
        if (err) return res.status(403).send({ message: "Token invalid" });

        req.user = decoded; // Attach decoded token payload
        console.log("verifiToken ---->", req.user.email);
        next();
      });
    };
    const verifiAdmin = async (req, res, next) => {
      const email = req.user?.email;
      const query = { email: email };
      const user = await userCollection.findOne(query);
      const admin = user?.status === "admin";
      if (!admin) return res.status(403).send({ message: "forbidden access" });
      next();
    };
    // verify function end
    // setup cookie and clearcookie start
    const isProd = process.env.NODE_ENV === "production";
    app.post("/login", async (req, res) => {
      const { email } = req.body;
      if (!email) return res.status(400).send({ message: "Email required" });
      const token = jwt.sign({ email }, process.env.JWT_SECRET_TOKEN, {
        expiresIn: "365d",
      });
      res.cookie("token", token, {
        httpOnly: true,
        secure: isProd, // true in production (HTTPS)
        sameSite: isProd ? "None" : "Strict", // "None" must be paired with secure:true
        maxAge: 24 * 60 * 60 * 1000, // 1 day (can adjust as needed)
      });

      res.send({ message: "Logged in! JWT set in cookie." });
    });
    app.get("/logout", async (req, res) => {
      try {
        res.clearCookie("token", {
          httpOnly: true,
          secure: isProd,
          sameSite: isProd ? "None" : "Strict",
        });
        res.send({ message: "Logged out! JWT cleared." });
      } catch (err) {
        res.status(500).send({ message: "Logout failed", error: err });
      }
    });
    // setup cookie and clearcookie end
    // post user db start
    app.post("/users", async (req, res) => {
      const user = req.body;
      const query = { email: user?.email };
      const isExist = await userCollection.findOne(query);
      if (isExist)
        return res.send({ message: "User Allready Exist", insertedId: null });
      const result = await userCollection.insertOne({
        ...user,
        status: "pending",
      });
      res.send(result);
    });
    app.get("/users/:email", verifiToken, verifiAdmin, async (req, res) => {
      const  email = req.params.email;
      const query = { email: { $ne: email } };
      const result = await userCollection.find(query).toArray();
      return res.send(result);
    });
    app.patch("/user-update/:id", async (req, res) => {
      const { status } = req.body;
      const { id } = req.params;
      const filter = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: { status },
      };
      const result = await userCollection.updateOne(filter, updateDoc);
      res.send(result);
    });
    app.get("/admin-user/:email", verifiToken, async (req, res) => {
      const email = req.params?.email;
      if (req.params?.email !== req.user?.email)
        return res.status(403).send({ message: "forbidden access" });
      const query = { email: email };
      const user = await userCollection.findOne(query);
      let admin = false;
      if (user) {
        admin = user?.status === "admin";
      }
      res.send({ admin });
    });
    // post user db end
    // add productCollection db start
    app.post("/products", async (req, res) => {
      const product = req.body;
      const result = await productCollection.insertOne(product);
      res.send(result);
    });
    app.get("/products", async (req, res) => {
      const { sort } = req.query;
      // const { sort, search } = req.query;
      // let query = {};
      // if (search) {
      //   query.name = { $regex: search, $options: "i" };
      // }
      // const products = await productCollection.find(query).toArray();
      const products = await productCollection.find().toArray();
      const sortPorducts = products.map((product) => ({
        ...product,
        price: Number(product.price),
      }));

      if (sort === "asc") {
        sortPorducts.sort((a, b) => a.price - b.price);
      } else if (sort === "desc") {
        sortPorducts.sort((a, b) => b.price - a.price);
      }
      res.send(sortPorducts);
    });
    // add productCollection db end
    // cartCollection start
    app.post("/cart", async (req, res) => {
      const cart = req.body;
      const result = await cartCollection.insertOne(cart);
      res.send(result);
    });
    app.get("/carts/:email", async (req, res) => {
      const query = { email: req.params?.email };
      const result = await cartCollection
        .find(query)
        .sort({ date: -1 })
        .toArray();
      res.send(result);
    });
    app.delete("/delete-cart/:id", async (req, res) => {
      const { id } = req.params;
      const query = { _id: new ObjectId(id) };
      const result = await cartCollection.deleteOne(query);
      res.send(result);
    });
    app.patch("/patch-cart/:id", async (req, res) => {
      const { id } = req.params;
      const data = req.body;
      const query = { _id: new ObjectId(id) };
      const updateDoc = {
        $set: {
          date: data.date,
          kilo: data.kilo,
          price: data.price,
          quantity: data.quantity,
        },
      };
      const result = await cartCollection.updateOne(query, updateDoc);
      res.send(result);
    });
    // cartCollection end

    // stripe payment post start
    app.post("/create-payment-intent", async (req, res) => {
      const { price } = req.body;
      const amount = parseInt(price * 100);
      // Create a PaymentIntent with the order amount and currency
      const paymentIntent = await stripe.paymentIntents.create({
        amount,
        currency: "usd",
        payment_method_types: ["card"],
      });

      res.send({
        clientSecret: paymentIntent.client_secret,
      });
    });
    // stripe payment post end
    // paymentCollection db start
    app.post("/payment", async (req, res) => {
      const payment = req.body;
      console.log("payment ---->", payment);
      const paymentResult = await paymentCollection.insertOne(payment);
      const query = {
        _id: { $in: payment.cartIds.map((id) => new ObjectId(id)) },
      };
      const deleteCarts = await cartCollection.deleteMany(query);

      mg.messages
        .create(process.env.MAIL_GUN_SEND_DOMAIN, {
          from: "Mailgun Sandbox <postmaster@sandboxd9c39951716c419abafb9049e3491481.mailgun.org>",
          to: ["nasirhpatwary@gmail.com"],
          subject: "Reusable project order confirmation!",
          text: "Testing some Mailgun awesomness!",
          html: `<div>
          <h1>Testing some Mailgun awesomness!</h1>
          <p>Transaction id: ${payment.transactionId}</p>
          <h1>Testing some Mailgun awesomness!</h1>
          </div>`,
        })
        .then((msg) => console.log(msg)) // logs response data
        .catch((err) => console.error(err)); // logs any error
      res.send({ paymentResult, deleteCarts });
    });
    app.get(
      "/payment-history/:email",
      verifiToken,
      verifiAdmin,
      async (req, res) => {
        const email = req.params?.email;
        if (req.params?.email !== req.user.email)
          return res.status(403).send({ message: "forbidden access" });
        const query = { email: email };
        const result = await paymentCollection.find(query).toArray();
        res.send(result);
      }
    );
    app.get("/admin-status", verifiToken, verifiAdmin, async (req, res) => {
      const products = await productCollection.estimatedDocumentCount();
      const users = await userCollection.estimatedDocumentCount();
      const payments = await paymentCollection.estimatedDocumentCount();
      const result = await paymentCollection
        .aggregate([
          {
            $group: {
              _id: null,
              totalPrice: { $sum: "$price" },
            },
          },
        ])
        .toArray();
      const revenue = result.length > 0 ? result[0].totalPrice : 0;
      res.send({ products, users, payments, revenue });
    });
    app.get("/chart-status", verifiToken, verifiAdmin, async (req, res) => {
      try {
        const result = await paymentCollection
          .aggregate([
            {
              $unwind: "$productIds",
            },
            {
              $set: {
                productId: { $toObjectId: "$productIds" },
              },
            },
            {
              $lookup: {
                from: "products", // ✅ সঠিক spelling
                localField: "productId",
                foreignField: "_id",
                as: "product",
              },
            },
            {
              $unwind: "$product",
            },
            {
              $set: {
                "product.price": { $toDouble: "$product.price" },
              },
            },
            {
              $group: {
                _id: "$product.category",
                quantity: { $sum: 1 },
                revenue: { $sum: "$product.price" },
              },
            },
            {
              $project: {
                _id: 0,
                category: "$_id",
                quantity: 1,
                revenue: 1,
              },
            },
          ])
          .toArray();
        res.send(result);
      } catch (error) {
        res.status(500).send({ message: "Internal Server Error", error });
      }
    });
    // paymentCollection db end
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
run().catch(console.dir);

// Basic home route
app.get("/", (req, res) => {
  res.send("✅ Server is running!");
});

// Start the server
app.listen(port, () => {
  console.log(`🚀 Server running at http://localhost:${port}`);
});
