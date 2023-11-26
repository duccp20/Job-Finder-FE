import React from "react";
import FormInput from "../../components/FormInput";
import { useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import Input from "../../components/Input/input";
import Header from "../../components/Header";

const schema = yup
  .object({
    code: yup
      .string()
      .matches(/123456/, "Mã không hợp lệ")
      .required("Mã không đúng định dạng"),
  })
  .required();

// const EnterCode = () => {
//   const {
//     register,
//     handleSubmit,
//     formState: { errors },
//   } = useForm({
//     resolver: yupResolver(schema),
//   });
//   const onSubmit = (data) => console.log(data);
//   return (
//     <>
//       <FormInput
// submit={handleSubmit(onSubmit)}
//         title="Quên Mật Khẩu"
//         label="Nhập mã "
//         again="Gửi lại mã?"
//         buttonName="Lấy lại mật khẩu"
//       />
//       <Input
//         type="text"
//         id="code"
//         {...register("code")}
//         borderColor={errors.code ? "border-red-500" : "border-gray-300"}
//       />

//       {errors?.code && (
//         <div className="relative">
//           <div className="flex justify-center items-center absolute">
//             <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
//               {errors.code?.message}
//             </p>
//           </div>
//         </div>
//       )}
//     </>
//   );
// };

export const ForgetPass = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Step 4: Form submission handler
  const onSubmit = (data) => console.log(data);

  return (
    <div className="h-screen relative">
      <Header></Header>
      <form
        className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-2/5 h-auto py-11 px-9 my-0 mx-auto bg-white shadow-2xl shadow-black rounded-[46px]"
        onSubmit={handleSubmit(onSubmit)}
      >
        <h3 className="text-black text-3xl not-italic font-sans font-extrabold uppercase text-center mb-8">
          Quên mật khẩu
        </h3>
        <div className="relative h-auto">
          <label
            htmlFor="code"
            className="text-gray-900 text-xl not-italic font-extrabold font-sans leading-[2.0]"
          >
            Nhập mã{" "}
            <span className="text-red-700 text-xl not-italic font-normal font-sans">
              *
            </span>
          </label>

          <Input
            type="text"
            id="code"
            {...register("code")}
            borderColor={errors.code ? "border-red-500" : "border-gray-300"}
          />

          {errors?.code && (
            <div className="relative">
              <div className="flex justify-center items-center absolute">
                <p className="font-nunito text-[10px] text-[#F00] font-[400] px-2 pt-2 leading-normal">
                  {errors.code?.message}
                </p>
              </div>
            </div>
          )}

          <div className="absolute right-0 left-auto">
            <a
              href="#"
              className="text-[#3B6EF2] text-sm font-poppins not-italic font-normal underline leading-loose"
            >
              Gửi lại mã?
            </a>
          </div>
        </div>
        <p className="text-gray-900 text-xl not-italic font-extrabold font-sans mb-4"></p>

        <div className="mt-9 flex justify-center mb-7">
          <button
            className="shadow-md text-sm not-italic font-bold text-centerfont-extrabold text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom"
            type="submit"
          >
            Lấy lại mật khẩu
          </button>
        </div>
        <p className="text-black text-center font-open-sans text-12 font-extrabold">
          <a href="#">Quay về trang đăng nhập</a>
        </p>
      </form>
    </div>
  );
};
export default ForgetPass;
