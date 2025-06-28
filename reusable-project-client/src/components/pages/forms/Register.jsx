import { FormProvider, useForm } from "react-hook-form";
import { FaEyeSlash } from "react-icons/fa";
import { IoEyeSharp } from "react-icons/io5";
import { zodResolver } from "@hookform/resolvers/zod";
import { SignUpSchema } from "./validation";
import { Form, FormSection, FormSubmit, Input } from "../../ReusableForms";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { imageUpload, saveUser } from "../../../api/utils/utils";
import { globalToast, successToast, warningToast } from "../../shard/Toastify";
import SocialSignIn from "./SocialSignIn";
const Register = () => {
  const navigate = useNavigate();
  const { createUser, userUpdateProfile, emailVerify } = useAuth();
  const [eyes, setEyes] = useState(false);
  const [conEye, setConEye] = useState(false);
  const methods = useForm({
    resolver: zodResolver(SignUpSchema),
  });
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = methods;
  const onSubmit = async (data) => {
    try {
      const profile = await imageUpload(data.url[0]);
      const result = await createUser(data.email, data.password);
      const name = data.name
      await userUpdateProfile(data.name, profile);
      await saveUser({...result?.user, name, profile});
      navigate("/");
      successToast("Register Successfully");
      await emailVerify()
      globalToast("Please Check Your Email Or Verify Email.")
    } catch (error) {
      if(error) return warningToast("auth email-already-in-use please login or use a different email.");
    }
  };
  return (
    <div className="flex p-4 flex-col justify-center min-h-[calc(100vh-208px)]">
      <h2 className="text-center text-2xl my-4">Register Now</h2>
      <FormProvider {...methods}>
        <Form double={true} onSubmit={handleSubmit(onSubmit)}>
          <FormSection>
            <Input
              id="name"
              name="name"
              label="Name"
              type="text"
              register={register("name")}
              errors={errors}
            />
            <Input
              id="email"
              name="email"
              label="Email"
              type="email"
              register={register("email")}
              errors={errors}
            />
            <div className="w-full relative">
              <Input
                id="password"
                name="password"
                label="Password"
                type={eyes ? "text" : "password"}
                register={register("password")}
                errors={errors}
              />
              <div className="absolute cursor-pointer top-10 right-3">
                {eyes ? (
                  <IoEyeSharp onClick={() => setEyes(!eyes)} />
                ) : (
                  <FaEyeSlash onClick={() => setEyes(!eyes)} />
                )}
              </div>
            </div>
            <div className="w-full relative">
              <Input
                id="confirm"
                name="confirm"
                label="Confirm Password"
                type={conEye ? "text" : "password"}
                register={register("confirm")}
                errors={errors}
              />
              <div className="absolute cursor-pointer top-10 right-3">
                {conEye ? (
                  <IoEyeSharp onClick={() => setConEye(!conEye)} />
                ) : (
                  <FaEyeSlash onClick={() => setConEye(!conEye)} />
                )}
              </div>
            </div>
            <Input
              id="url"
              name="url"
              label="Profile url"
              type="file"
              register={register("url")}
              errors={errors}
            />
            <div className="label">
              <Input
                type="checkbox"
                id="checkbox"
                register={register("checkbox")}
                name="checkbox"
              />
              I agree to the Terms and Conditions
            </div>
          </FormSection>
          <FormSubmit isSubmitting={isSubmitting} />
          <p className="mt-2 md:mt-0">Allready have an accoun please <Link to="/login" className="text-indigo-500">login</Link></p>
          <SocialSignIn />
        </Form>
      </FormProvider>
    </div>
  );
};

export default Register;
