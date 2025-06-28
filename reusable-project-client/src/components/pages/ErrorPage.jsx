import noFound from "../../assets/mics/no_product.png";
import { Link } from "react-router-dom";
const ErrorPage = () => {
    return (
       <div className="text-center space-y-2 my-10">
          <img className="mx-auto" src={noFound} alt="" />
          <h2 className="text-2xl animate-gradient bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
            Sorry! Could not find the product you were looking For!!!
          </h2>
          <p>
            But dont worry, you can find plenty of other things on our Home page.
          </p>
          <p className="mt-5 md:mt-8">
            <Link to="/" className="border py-2 px-5 rounded border-indigo-500" >Home</Link>
          </p>
        </div>
    );
};

export default ErrorPage;