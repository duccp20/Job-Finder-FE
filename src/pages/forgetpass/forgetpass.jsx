import React from "react";
import FormInput from "../../components/FormInput";

export const ForgetPass = () => {
  return (
    <>
      <FormInput
        title="Quên Mật Khẩu"
        label="Nhập email "
        again=""
        buttonName="Lấy lại mật khẩu"
      />
    </>
  );
};
