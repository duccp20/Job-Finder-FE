import React from "react";
import FormInput from "../../components/FormInput";

const EnterCode = () => {
  return (
    <>
      <FormInput
        title="Quên Mật Khẩu"
        label="Nhập mã "
        again="Gửi lại mã?"
        buttonName="Lấy lại mật khẩu"
      />
    </>
  );
};

export default EnterCode;
