import React, { useState } from "react";
import logo from "/images/logo-user.jpg";
import Input from "../../components/Input/input";
import ava from "/svg/avatar.svg";
import rec from "/images/rec.jpg";
import google from "/svg/gg.svg";
import facebook from "/svg/fb.svg";

// const schema = yup
//   .object({
//     email: yup
//       .string()
//       .email("Email không đúng định dạng")
//       .required("Email không đúng định dạng"),
//     passWord: yup
//       .string()
//       .required(
//         "Ít nhất 8 ký tự, 1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt"
//       )
//       .min(8, "Ít nhất 8 ký tự")
//       .matches(
//         /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/,
//         "1 chữ cái in hoa, 1 chữ số và 1 kí tự đặc biệt"
//       ),
//   })
//   .required();

const LoginPage = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  // Step 4: Form submission handler
  const onSubmit = (data) => console.log(data);

  // const [isSubmit, setSubmit] = useState(false);
  // const navigate = useNavigate();
  // const dispatch = useDispatch();
  // const onFinish = async (values) => {
  //   const { username, password } = values;
  //   setSubmit(true);
  //   const res = await callLogin(username, password);
  //   setSubmit(false);
  //   if (res?.data) {
  //     localStorage.setItem("access_token", res.data.access_token);
  //     dispatch(doLoginAction(res.data.user));
  //     message.success("Đăng nhập thành coong");
  //     window.location.href = "/";
  //   } else {
  //     notification.error({
  //       message: `Đăng nhập thất bại`,
  //       description: res?.message ?? res,
  //     });
  //   }
  // };

  return (
    <>
      <div className="w-screen h-screen flex">
        <form className="w-[65%] flex flex-col px-36 py-10">
          <div className="flex justify-center items-center p-10">
            <img src={logo} alt="" />
          </div>
          <h1 className="text-center text-[36px] font-bold uppercase">
            Đăng nhập
          </h1>
          <div className="flex flex-col gap-[25px]">
            <div>
              <label
                htmlFor="email"
                className="font-bold text-[20px] text=[#1C1C1C] leading-normal"
              >
                Email
              </label>
              <Input type="text" id="email" />
            </div>
            <div>
              <label
                htmlFor="pass"
                className="font-bold text-[20px] text=[#1C1C1C] leading-normal"
              >
                Mật khẩu
              </label>
              <Input type="password" id="pass" />
            </div>
            <span className="text-right text-[#3B6EF2] text-[#15px] underline">
              <a href="#">Quên mật khẩu?</a>
            </span>
          </div>

          <div className="mt-6 flex justify-center">
            <button
              className="shadow-md text-center text-white rounded-[16px] px-[32px] py-[16px] bg-gradientCustom"
              type="submit"
            >
              Đăng nhập
            </button>
          </div>
          <div className="mb-6">
            <div className="flex justify-center items-center my-6">
              <div class=" bg-[#F0EDFF] w-40 h-[2px]"></div>
              <span className="font-bold p-2 text-[#D9D9D9] ">
                Đăng nhập bằng
              </span>
              <div class="w-40 h-[2px] bg-[#F0EDFF]"></div>
            </div>
            <div className="flex items-center justify-center">
              <div>
                <a href="">
                  <img src={google} alt="" className="w-[50px] h-[50px]" />
                </a>
              </div>
              <div>
                <a href="">
                  <img src={facebook} alt="" className="w-[53px] h-[53px]" />
                </a>
              </div>
            </div>
          </div>

          <h6 className="text-center">
            Chưa có tài khoản?{" "}
            <span>
              <a
                href="http://"
                className="text-[16px] font-bold text-[#FE5656]"
              >
                {" "}
                Đăng ký ngay
              </a>
            </span>
          </h6>
        </form>
        <div className="w-[35%] h-full relative">
          <img src={rec} alt="" className=" h-full w-full" />
          <img
            src={ava}
            alt=""
            className="absolute w-full top-1/2 -translate-y-1/2 p-32"
          />
        </div>
      </div>
    </>
  );
};

export default LoginPage;
