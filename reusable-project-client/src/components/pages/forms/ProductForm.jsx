import { useForm } from "react-hook-form";
import { Form, FormInput, FormSection, FormSubmit } from "../../ReusableForms";
import { successToast, warningToast } from "../../shard/Toastify";
import { imageUpload } from "../../../api/utils/utils";
import usePostMenu from "../../hooks/usePostMenu";
const ProductForm = () => {
  const [isError, isSuccess, mutateAsync] = usePostMenu();
  const {
    register,
    handleSubmit,
    reset,
    formState: { isSubmitting },
  } = useForm();
  const onSubmit = async (data) => {
    try {
      let image = "";
      let img = "";
      if (data.image && data.image.length > 0) {
        image = await imageUpload(data.image[0]);
      }
      if (data.img && data.img.length > 0) {
        img = await imageUpload(data.img[0]);
      }
      const products = {
        image,
        img,
        tag: data.tag,
        name: data.name,
        price: data.price,
        rating: data.rating,
        category: data.category,
      };
      await mutateAsync(products);
      if (isSuccess) return successToast(`${data.name} add successfully`);
      if (isError) return warningToast(isError.message);
    } catch (error) {
      warningToast(error.message);
    }
    reset();
  };
  return (
    <div className="flex p-4 flex-col justify-center min-h-[calc(100vh-208px)]">
      <h2 className="text-center text-2xl my-4">Our Product Add </h2>
      <Form double={true} onSubmit={handleSubmit(onSubmit)}>
        <FormSection>
          <FormInput
            id="name"
            name="fruits"
            label="Name"
            type="text"
            variant="select"
            register={register("name")}
            options={[
              { value: "Blueberry", label: "Blueberry" },
              { value: "Lychee", label: "Lychee" },
              { value: "Dates", label: "Dates" },
              { value: "Cauliflower", label: "Cauliflower" },
              { value: "Tomato", label: "Tomato" },
              { value: "Oranges Juice", label: "Oranges Juice" },
              { value: "Orange", label: "Orange" },
              { value: "Onion", label: "Onion" },
              { value: "Grapes", label: "Grapes" },
              { value: "Banana", label: "Banana" },
              { value: "Talmfruit", label: "Talmfruit" },
              { value: "Potatoes", label: "Potatoes" },
              { value: "Beef Steak", label: "Beef Steak" },
              { value: "Choco Chip Cookies", label: "Choco Chip Cookies" },
              { value: "Mango", label: "Mango" },
              { value: "Mangoes Juice", label: "Mangoes Juice" },
              { value: "Strawberries", label: "Strawberries" },
              { value: "Lemonade", label: "Lemonade" },
              { value: "Fresh Milk", label: "Fresh Milk" },
              { value: "Ginger", label: "Ginger" },
            ]}
          />
          <div className="flex flex-col md:flex-row gap-4">
            <FormInput
            id="price"
            name="price"
            label="Price"
            type="number"
            placeholder="Selec Price"
            register={register("price")}
          />
            <FormInput
            id="rating"
            name="rating"
            label="Rating"
            type="number"
            placeholder="Selec rating"
            register={register("rating")}
          />
          </div>
          <FormInput
            label="Category"
            name="category"
            id="category"
            variant="select"
            register={register("category")}
            options={[
              { value: "mics items", label: "Mics Items" },
              { value: "vegetables", label: "Vegetables" },
              { value: "fresh fruits", label: "Fresh Fruits" },
              { value: "fresh drink", label: "Fresh Drink" },
              { value: "fresh milk", label: "Fresh Milk" },
              { value: "fresh meat", label: "Fresh Meat" },
              { value: "biscuits snack", label: "Biscuits Snack" },
              { value: "fresh bakery", label: "Fresh Bakery" },
              { value: "sea foods", label: "Sea Foods" },
            ]}
          />
          <FormInput
            label="Sale Product"
            name="sale"
            id="sale"
            variant="select"
            register={register("tag")}
            options={[
              { value: "HOT", label: "HOT" },
              { value: "SALE", label: "SALE" },
              { value: "", label: "NEW" },
            ]}
          />
          <FormInput
            id="image"
            name="image"
            label="Image url"
            type="file"
            register={register("image")}
          />
          <FormInput
            id="img"
            name="img"
            label="Img url"
            type="file"
            register={register("img")}
          />
        </FormSection>
        <FormSubmit isSubmitting={isSubmitting} />
      </Form>
    </div>
  );
};

export default ProductForm;
