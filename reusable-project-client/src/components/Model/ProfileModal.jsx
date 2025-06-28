import { Button, Dialog, DialogPanel, DialogTitle } from "@headlessui/react";
import { useState } from "react";
import { Form, FormSection, FormSubmit, Input } from "../ReusableForms";
import { FormProvider, useForm } from "react-hook-form";
import useAuth from "../hooks/useAuth";
import { ModalUpdate } from "../ReusableForms/ModalUpate";
import { imageUpload } from "../../api/utils/utils";
import { successToast, warningToast } from "../shard/Toastify";
import { zodResolver } from "@hookform/resolvers/zod";
import { porfileSchema } from "../pages/forms/validation";

export default function ProfileModal() {
  const [isOpen, setIsOpen] = useState(false);
  const {user, userUpdateProfile, loading} = useAuth()
  function open() {
    setIsOpen(true);
  }
  function close() {
    setIsOpen(false);
  }
   const methods = useForm({
      resolver: zodResolver(porfileSchema),
    });
    const {
      register,
      handleSubmit,
      formState: { errors, isSubmitting },
    } = methods;

  const onSubmit = async (data) => {
    if(!user?.email) return warningToast("The email provided should be registered.")
    try {
        const profile = await imageUpload(data.url[0])
        await userUpdateProfile(data.name, profile)
        successToast("Profile updated successfully!")
    } catch (error) {
        if(error) return warningToast("File size must be under 2MB") 
       
    }finally{
        !loading
    }
    
  };
  return (
    <>
      <Button
        onClick={open}
        className="border mt-2 text-indigo-500 duration-500 hover:bg-indigo-500 hover:text-white border-indigo-500 py-1 cursor-pointer px-4 rounded font-semibold"
      >
        Profile Update
      </Button>

      <Dialog
        open={isOpen}
        as="div"
        className="relative z-10 focus:outline-none"
        onClose={close}
      >
        <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
          <div className="flex min-h-full items-center justify-center p-4">
            <DialogPanel
              transition
              className="w-full max-w-md border border-indigo-300 rounded p-6 backdrop-blur-sm duration-300 ease-out"
            >
              <DialogTitle as="h3" className="text-base/7 text-center font-medium">
                Profile successful
              </DialogTitle>
              <FormProvider {...methods}>
                <Form double={true} onSubmit={handleSubmit(onSubmit)}>
                <FormSection>
                  <Input
                    id="name"
                    name="name"
                    label="Name"
                    defaultValue={user?.displayName}
                    type="text"
                    register={register("name")}
                    errors={errors}
                  />
                  <Input
                    id="url"
                    name="url"
                    label="Profile url"
                    type="file"
                    register={register("url")}
                    errors={errors}
                  />
                </FormSection>
                <ModalUpdate close={close} isSubmitting={isSubmitting} />
              </Form>
              </FormProvider>
            </DialogPanel>
          </div>
        </div>
      </Dialog>
    </>
  );
}
