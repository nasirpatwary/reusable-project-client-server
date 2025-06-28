import { FormProvider, useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { LoginSchema } from "./validation";
import { Form, FormSection, FormSubmit, Input } from "../../ReusableForms";
import { useState } from "react";
import ReCAPTCHA from "react-google-recaptcha";
import useAuth from "../../hooks/useAuth";
import { successToast, warningToast } from "../../shard/Toastify";
import { Link, useLocation, useNavigate } from "react-router-dom";
import SocialSignIn from "./SocialSignIn";

const Login = () => {
  const { signInUser, resetPassword } = useAuth();
  const [eyes, setEyes] = useState(false);
  const [captcha, setCaptcha] = useState(null);
  const location = useLocation()
  const navigate = useNavigate()
  const methods = useForm({
    resolver: zodResolver(LoginSchema),
  });

  const {
    register,
    handleSubmit,
    getValues,
    formState: { errors, isSubmitting },
  } = methods;

  const onSubmit = async (data) => {
    if (!captcha) return warningToast("Please complete the reCAPTCHA ✅");
    try {
      await signInUser(data.email, data.password);
      successToast("SignIn Successfully ✅");
      navigate(location?.state ? location.state : "/")
    } catch (error) {
      console.error("SignIn Error:", error);
      if (error)
        return warningToast(
          "email and password should match with the registered email and password"
        );
    }
  };

  const forgotPassword = async () =>{
    const email = getValues("email")
    if (!email) {
      return warningToast("Invalid email")
    }
    await resetPassword(email)
    successToast("forgot password successfully ✅")
  }
  return (
    <div className="flex p-4 flex-col justify-center min-h-[calc(100vh-208px)]">
      <h2 className="text-center text-2xl my-4">Login Now</h2>

      <FormProvider {...methods}>
        <Form double={true} onSubmit={handleSubmit(onSubmit)}>
          <FormSection>
            {/* Email */}
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              register={register("email")}
              errors={errors}
            />

            {/* Password + Eye toggle */}
            <div className="w-full max-w-md relative">
              <Input
                id="password"
                name="password"
                label="Password"
                type={eyes ? "text" : "password"}
                register={register("password")}
                errors={errors}
              />
              <Link 
              onClick={forgotPassword}
              className="link link-hover absolute mt-5">Forgot password?</Link>
              <div
                className="absolute cursor-pointer top-10 right-3"
                onClick={() => setEyes(!eyes)}
              >
                {eyes ? <IoEyeSharp /> : <FaEyeSlash />}
              </div>
            </div>
            {/* reCAPTCHA */}
            <div className="mt-8 md:mt-4">
              <ReCAPTCHA
                sitekey={import.meta.env.VITE_RECAPTCHA_KEY}
                onChange={(value) => setCaptcha(value)}
                onExpired={() => setCaptcha(null)}
                onErrored={() => setCaptcha(null)}
              />
            </div>
          </FormSection>
          <FormSubmit isSubmitting={isSubmitting} />
          <p className="mt-2 md:mt-0">Don’t have an account? Create an <Link to="/register" className="text-indigo-500 ">account</Link></p>
          <SocialSignIn />
        </Form>
      </FormProvider>
    </div>
  );
};

export default Login;
