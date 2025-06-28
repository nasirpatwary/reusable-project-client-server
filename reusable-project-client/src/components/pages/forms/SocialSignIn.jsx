import { FcGoogle } from "react-icons/fc";
import { FaGithub, FaFacebook } from "react-icons/fa";
import { useLocation, useNavigate } from "react-router";
import { saveUser } from "../../../api/utils/utils";
import useAuth from "../../hooks/useAuth";
import { successToast } from "../../shard/Toastify";

const SocialSignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { signInGoogle } = useAuth();
  const handleGoogle = async () => {
    try {
      const { user } = await signInGoogle(); // This gives Firebase user
      await saveUser(user);
      successToast("Sign In Google successful.");
      navigate(location?.state ? location?.state : "/");
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <div className="space-y-4 w-full max-w-sm mx-auto">
      <div className="divider animate-gradient bg-300% bg-gradient-to-r from-orange-700 via-blue-500 to-green-400 text-transparent bg-clip-text animate-gradient">
        Sign In with Social loing
      </div>
      <hr className="text-indigo-500" />
      <div className="flex justify-around">
        <FcGoogle className="cursor-pointer" size={25} onClick={handleGoogle} />
        <FaGithub
          className="cursor-pointer text-black"
          size={25}
          //  onClick={handleGithub}
        />
        <FaFacebook
          className="cursor-pointer text-black"
          size={25}
          // onClick={handleFaceBook}
        />
      </div>
    </div>
  );
};

export default SocialSignIn;
