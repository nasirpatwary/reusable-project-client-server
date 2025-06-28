// Upload image and return image url
import axios from "axios";
export const imageUpload = async (imageData) => {
  const formData = new FormData();
  formData.append("image", imageData);
  const { data } = await axios.post(
    `${import.meta.env.VITE_IMG_BB_URL}?key=${import.meta.env.VITE_IMG_BB_KEY}`,
    formData
  );
  return data?.data?.display_url;
};

// save user info in db
export const saveUser = async (user) => {
  await axios.post(
    `${import.meta.env.VITE_BASE_URL}/users`,
    {
      name: user?.displayName,
      image: user?.photoURL,
      email: user?.email,
    }
  );
};
