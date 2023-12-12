import React, { useState } from "react";

const Uploader = (props) => {
  const [selectedFile, setSelectedFile] = useState();
  const [isSelected, setIsSelected] = useState(false);
  const [error, setError] = useState("");

  const handleChange = (event) => {
    const file = event.target.files[0];
    setSelectedFile(file);
    setIsSelected(true);
  };

  const handleSubmit = () => {
    if (isSelected) {
      alert("File uploaded");
    } else {
      setError("Vui lòng tải lên CV đính kèm");
    }
  };
  const fileInputRef = React.createRef();
  return (
    <div className="w-screen h-screen relative overflow-hidden">
      <div className="w-[50%] h-auto absolute top-0 right-0 left-0 mx-auto ">
        <div className="w-full h-[55px] flex rounded-tl-[10px] rounded-tr-[10px] rounded-bl-[0px] rounded-br-[0px] bg-[#FE5656] px-[28px] items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="23"
            height="26"
            viewBox="0 0 23 26"
            fill="none"
          >
            <path
              d="M22.4245 0.159598C22.6979 0.391741 22.8098 0.701265 22.7601 1.08817L19.5784 23.3739C19.537 23.6544 19.4044 23.872 19.1807 24.0268C19.0647 24.1042 18.9363 24.1429 18.7954 24.1429C18.7043 24.1429 18.6049 24.1187 18.4971 24.0703L12.8671 21.3862L9.85944 25.6663C9.7103 25.8888 9.50731 26 9.25045 26C9.14274 26 9.0516 25.9807 8.97703 25.942C8.8196 25.8743 8.69325 25.7606 8.59796 25.601C8.50268 25.4414 8.45504 25.2649 8.45504 25.0714V20.0078L19.1931 4.64286L5.90723 18.0636L0.998027 15.7132C0.691461 15.5778 0.525749 15.3118 0.500893 14.9152C0.484322 14.5283 0.616891 14.2429 0.8986 14.0592L21.5794 0.13058C21.7037 0.0435268 21.8362 0 21.9771 0C22.1428 0 22.2919 0.0531994 22.4245 0.159598Z"
              fill="white"
            />
          </svg>
          <span className="text-xl not-italic  text-white ml-[25px] flex-grow">
            Nộp hồ sơ ứng tuyển {props.job}
          </span>
          <span className="text-xl not-italic text-white items-end">X</span>
        </div>
        <div className="pt-[22px] pb-[32px] px-[44px] border-2">
          <div>
            <h2 className="text-black text-sm not-italic font-bold">
              CV đính kèm{" "}
              <span className="text-sm not-italic font-normal text-[#FF0000]">
                *
              </span>
            </h2>
            <form
              onClick={() => document.querySelector("input").click()}
              className="w-full border border-[#BEB9B9] rounded text-center py-[12px] mt-[10px]"
            >
              <input
                type="file"
                name="file"
                onChange={handleChange}
                hidden
                ref={fileInputRef}
              />
              {isSelected ? (
                <div className="flex items-center justify-center gap-2">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="11"
                    height="16"
                    viewBox="0 0 11 16"
                    fill="none"
                  >
                    <path
                      d="M9.16281 3.63242V11.987C9.16281 12.7577 8.75634 13.4968 8.03282 14.0418C7.3093 14.5868 6.328 14.8929 5.30478 14.8929C4.28157 14.8929 3.30027 14.5868 2.57675 14.0418C1.85323 13.4968 1.44676 12.7577 1.44676 11.987V2.90594C1.44676 2.42425 1.7008 1.96229 2.153 1.62168C2.6052 1.28108 3.21852 1.08973 3.85802 1.08973C4.49753 1.08973 5.11085 1.28108 5.56305 1.62168C6.01525 1.96229 6.26929 2.42425 6.26929 2.90594V10.534C6.26929 10.7267 6.16767 10.9115 5.98679 11.0477C5.80591 11.184 5.56059 11.2605 5.30478 11.2605C5.04898 11.2605 4.80366 11.184 4.62278 11.0477C4.4419 10.9115 4.34028 10.7267 4.34028 10.534V3.63242H2.89352V10.534C2.89352 11.0157 3.14756 11.4777 3.59976 11.8183C4.05196 12.1589 4.66528 12.3502 5.30478 12.3502C5.94429 12.3502 6.55761 12.1589 7.00981 11.8183C7.46201 11.4777 7.71605 11.0157 7.71605 10.534V2.90594C7.71605 2.13523 7.30958 1.3961 6.58606 0.851129C5.86254 0.30616 4.88124 0 3.85802 0C2.83481 0 1.85351 0.30616 1.12999 0.851129C0.406469 1.3961 0 2.13523 0 2.90594V11.987C0 13.0467 0.558895 14.063 1.55373 14.8124C2.54857 15.5617 3.89787 15.9827 5.30478 15.9827C6.7117 15.9827 8.06099 15.5617 9.05583 14.8124C10.0507 14.063 10.6096 13.0467 10.6096 11.987V3.63242H9.16281Z"
                      fill="#FE5656"
                    />
                  </svg>
                  <span> {selectedFile.name}</span>
                  <a
                    href="#"
                    className="text-gray-600 text-xs italic font-normal"
                  >
                    (Click để xem)
                  </a>
                </div>
              ) : (
                <div className="w-full h-full cursor-pointer flex items-center justify-center">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="25"
                    viewBox="0 0 22 25"
                    fill="none"
                    onClick={() => fileInputRef.current.click()}
                    className="cursor-pointer"
                  >
                    <path
                      d="M14.5658 0H1.67769C1.22384 0.0117027 0.79306 0.197388 0.478962 0.516709C0.164864 0.83603 -0.00717447 1.26318 0.000229447 1.70536V23.2946C-0.00717447 23.7368 0.164864 24.164 0.478962 24.4833C0.79306 24.8026 1.22384 24.9883 1.67769 25H20.3223C20.7762 24.9883 21.2069 24.8026 21.521 24.4833C21.8351 24.164 22.0072 23.7368 21.9998 23.2946V7.07143L14.5658 0ZM13.7499 8.03571V1.64286L20.4415 8.03571H13.7499Z"
                      fill="black"
                    />
                  </svg>
                </div>
              )}
            </form>
            <div className="py-2">
              {error && (
                <p className="text-red-600 text-xs italic font-normal">
                  {error}
                </p>
              )}
            </div>
          </div>
          <div className="flex flex-col h-[180px]">
            <h2 className="text-black text-sm not-italic font-bold">
              Thư giới thiệu
            </h2>
            <textarea
              type="text"
              name="text"
              id=""
              placeholder="Viết giới thiệu ngắn gọn về bản thân (điểm mạnh và điểm yếu) và nêu rõ mong muốn, lý do làm việc tại công ty này."
              className="w-full border border-solid border-[#BEB9B9] rounded px-3 py-[8px] flex-grow flex-unwrap mt-[10px]"
            />
          </div>
          <div className="flex justify-end gap-[13px] w-full mt-[20px]">
            <div>
              <button
                className=" text-center text-base not-italic font-bold text-white rounded-[4px] px-[32px] py-[12px] bg-[#FE5656]"
                type="submit"
                onClick={handleSubmit}
              >
                Nộp hồ sơ
              </button>
            </div>
            <div>
              <button
                className="!text-center !text-base !not-italic !font-bold !text-[#7D7D7D] !rounded-[4px] px-[32px] py-[12px] !border-solid !border-black"
                type="submit"
              >
                Đóng lại
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
// };

export default Uploader;
