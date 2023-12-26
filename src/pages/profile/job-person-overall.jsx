import React, { useEffect, useState } from "react";
import pen from "/public/svg/pen.svg";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { displayFile, getRawFile } from "../../service/file/api";
import PDF from "../pdf/pdf";
const JobPersonOverall = () => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.account.isAuthenticated);
  const user = useSelector((state) => state.account.user);
  console.log("user", user);
  // const [candidateData, setCandidateData] = useState(null);
  const candidateData = useSelector((state) => state.candidate.data);
  console.log("candidateData", candidateData);
  const [file, setFile] = useState("");
  const [showCV, setShowCV] = useState(false);
  const handleShowCV = async () => {
    const encodedFileName = encodeURIComponent(candidateData.cv);
    try {
      const base64Data = await getRawFile(encodedFileName); // Giả sử API trả về chuỗi Base64
      console.log("base64Data", base64Data);
      setFile(base64Data); // Lưu trữ chuỗi Base64 vào state
      setShowCV(true);
    } catch (error) {
      console.error("Có lỗi xảy ra khi tải file:", error);
      // Xử lý lỗi tùy theo cách bạn muốn
    }
  };
  const handleCloseCV = () => {
    setShowCV(false);
  };

  // useEffect(() => {
  //   try {
  //     const res = callFetchCandidateByUserId(user.id);
  //     if (res && res.data) {
  //       // setCandidateData
  //       console.log("res.data", res.data);
  //     }
  //   } catch (error) {}
  // }, []);

  return (
    <div className="flex h-auto w-[60%] flex-col gap-5">
      {showCV && <PDF file={file} onClose={handleCloseCV}></PDF>}

      <div className="h-[45%] rounded-[10px] shadow-banner">
        <div className=" flex h-[55px] w-full justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tl-[10px] rounded-tr-[10px] bg-[#FE5656] px-[44px] py-[14px] shadow-banner">
          <span className="text-xl font-bold not-italic text-white ">
            Thông tin cá nhân
          </span>
          <div className="cursor-pointer" onClick={() => navigate("personal")}>
            <img src={pen} alt="" />
          </div>
        </div>
        <div className="table px-[40px] py-[30px]">
          <table className="min-w-full">
            <tbody className="text-left">
              <tr className="">
                <th className="px-[4px] py-[8px]">Họ và tên lót</th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.lastName}
                </td>
                <th className="py-[8px] pl-[50px]">Tên</th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.firstName}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Email </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.email}
                </td>
                <th className="py-[8px] pl-[50px]">Ngày sinh </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.birthDay
                    ? user.birthDay
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Số điện thoại </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.phone
                    ? user.phone
                    : "(chưa có dữ liệu)"}
                </td>
                <th className="py-[8px] pl-[50px]">Giới tính </th>
                <td className="px-[4px] py-[8px]">
                  {isAuthenticated && user && user.gender ? "Nam" : "Nữ"}
                </td>
              </tr>

              <tr>
                <th className="px-[4px] py-[8px]">Địa chỉ </th>
                <td className="px-[4px] py-[8px]">
                  {" "}
                  {isAuthenticated && user && user.location
                    ? user.location
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Trường học </th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData.university
                    ? candidateData.university
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      <div className="mt-[px] h-[55%] rounded-[10px] shadow-banner">
        <div className="flex h-[55px] w-full justify-between rounded-bl-[0px] rounded-br-[0px] rounded-tl-[10px] rounded-tr-[10px] bg-[#FE5656] px-[44px] py-[14px] shadow-banner">
          <span className="text-xl font-bold not-italic text-white ">
            Thông tin công việc muốn ứng tuyển
          </span>
          <div onClick={() => navigate("job")} className="cursor-pointer">
            <img src={pen} alt="" />
          </div>
        </div>
        <div className="table px-[40px] py-[30px]">
          <table className="min-w-full">
            <tbody className="text-left">
              <tr className="">
                <th className="px-[4px] py-[8px]">Công việc mong muốn</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData &&
                  candidateData?.desiredJob &&
                  candidateData?.desiredJob.length > 0
                    ? candidateData?.desiredJob
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Vị trí làm việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData &&
                  candidateData?.positionDTOs &&
                  candidateData?.positionDTOs.length > 0
                    ? candidateData.positionDTOs
                        .map((pos) => pos.name)
                        .join(" / ")
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Chuyên ngành</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData &&
                  candidateData?.majorDTOs &&
                  candidateData?.majorDTOs.length > 0
                    ? candidateData.majorDTOs.map((maj) => maj.name).join(" / ")
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Hình thức làm việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData &&
                  candidateData?.scheduleDTOs &&
                  candidateData?.scheduleDTOs.length > 0
                    ? candidateData.scheduleDTOs
                        .map((schedule) => schedule.name)
                        .join(" / ")
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Địa điểm làm việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.desiredWorkingProvince
                    ? candidateData?.desiredWorkingProvince
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">CV đính kèm</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.cv ? (
                    <div className="flex items-center gap-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="11"
                        height="16"
                        viewBox="0 0 11 16"
                        fill="none"
                      >
                        <path
                          d="M9.16281 3.63242V11.987C9.16281 12.7577 8.75634 13.4968 8.03282 14.0418C7.3093 14.5868 6.328 14.8929 5.30478 14.8929C4.28157 14.8929 3.30027 14.5868 2.57675 14.0418C1.85323 13.4968 1.44676 12.7577 1.44676 11.987V2.90594C1.44676 2.42425 1.7008 1.96229 2.153 1.62168C2.6052 1.28108 3.21852 1.08973 3.85802 1.08973C4.49753 1.08973 5.11085 1.28108 5.56305 1.62168C6.01525 1.96229 6.26929 2.42425 6.26929 2.90594V10.534C6.26929 10.7267 6.16767 10.9115 5.98679 11.0477C5.80591 11.184 5.56059 11.2605 5.30478 11.2605C5.04898 11.2605 4.80366 11.184 4.62278 11.0477C4.4419 10.9115 4.34028 10.7267 4.34028 10.534V3.63242H2.89352V10.534C2.89352 11.0157 3.14756 11.4777 3.59976 11.8183C4.05196 12.1589 4.66528 12.3502 5.30478 12.3502C5.94429 12.3502 6.55761 12.1589 7.00981 11.8183C7.46201 11.4777 7.71605 11.0157 7.71605 10.534V2.90594C7.71605 2.13523 7.30958 1.3961 6.58606 0.851129C5.86254 0.30616 4.88124 0 3.85802 0C2.83481 0 1.85351 0.30616 1.12999 0.851129C0.406469 1.3961 0 2.13523 0 2.90594V11.987C0 13.0467 0.558895 14.063 1.55373 14.8124C2.54857 15.5617 3.89787 15.9827 5.30478 15.9827C6.7117 15.9827 8.06099 15.5617 9.05583 14.8124C10.0507 14.063 10.6096 13.0467 10.6096 11.987V3.63242H9.16281Z"
                          fill="#0FA958"
                        />
                      </svg>
                      {candidateData?.cv}
                      <span
                        onClick={(e) => handleShowCV(e)}
                        className="font-weight-400 cursor-pointer text-sm font-light italic text-[#7D7D7D]"
                      >
                        (Click để xem)
                      </span>
                    </div>
                  ) : (
                    "(chưa có dữ liệu)"
                  )}
                </td>
              </tr>
              <tr>
                <th className="px-[4px] py-[8px]">Thư xin việc</th>
                <td className="px-[4px] py-[8px]">
                  {candidateData && candidateData?.referenceLetter
                    ? candidateData?.referenceLetter
                    : "(chưa có dữ liệu)"}
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default JobPersonOverall;
