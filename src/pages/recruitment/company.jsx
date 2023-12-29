import React from "react";
import RecruitmentItem from "../../components/Recruitment/item";
import JobItem from "../../components/JobItem";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import useDataFetcher from "../../components/Pagination/useDataFetcher";

const CompanyInformation = () => {
  const { id } = useParams();
  const { loading, dataJob, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();
  return (
    <>
      <div className="flex sm:flex-col-reverse tablet-range:flex-col-reverse">
        <div className="ml-[40px] flex w-[65%] flex-col gap-[10px] pr-[30px] leading-normal text-inherit tablet-up:ml-[40px] tablet-up:mr-[10px] tablet-up:w-auto desktop-up:mr-[10px] desktop-up:mt-[30px] ">
          <p className="mb-[10px] font-[700]">
            Giới thiệu về Công ty R2S - Cung cấp phương pháp giải quyết phần mềm
          </p>
          <p className="mb-[10px]">
            R2S thành lập vào ngày một tháng tám năm 2019 với nhiệm vụ đào tạo
            nhân sự CNTT cho doanh nghiệp, phát triển phần mềm và tư vấn giải
            pháp CNTT. R2S ra đời với sứ mệnh:
          </p>
          <ol className="mx-[10px] list-decimal px-[10px] ">
            <li>
              Đào tạo nhân sự làm được việc ngay cho doanh nghiệp (Resource)
            </li>
            <li>Phát triển phần mềm (Software)</li>
            <li>
              Tư vấn giải pháp CNTT cho các doanh nghiệp thực hiện chuyển đổi số
              (Solution)
            </li>
          </ol>
          <p className="my-[10px]">
            Với 03 nhiệm vụ trên, R2S đã cho ra đời R2S Academy với nhiều chươ
            <ng></ng>
            trình đào tạo dành cho lập trình viên, dành cho Tester, dành cho BA,
            dành cho DevOps,…nhằm giúp các bạn trang bị những kinh nghiệm làm
            việc như quản lý source code, viết code sạch, làm việc nhóm, cách
            hỏi đáp để làm rõ yêu cầu,….Hiện nay, R2S Academy có hàng chục khoá
            học và có gần 500 học viên đã và đang học. Trong số những học viên
            tham gia tại R2S Academy, với hình thức đào tạo online nên các bạn
            có cơ hội gặp gỡ nhau ở mọi miền đất nước. Thậm chí có những bạn
            đang ở Đức, Ý, Nhật, Hàn Quốc, Malaysia cũng tham gia học.
          </p>
          <p>
            Với mô hình đào tạo, phát triển phần mềm và kết nối doanh nghiệp,
            R2S đã tạo ra môi trường học tập sát với nhu cầu thực tế. Không
            những thế, học viên còn có cơ hội thực tập và được R2S tuyển dụng.
            Một hệ sinh thái kết nối việc học, thực hành gắn liền thực tế nên
            học viên có cơ hội học những gì doanh nghiệp cần, tích luỹ kinh
            nghiệm thông qua các buổi học và có cơ hội việc làm ngay và sau khi
            kết thúc khoá học. R2S coi trọng đến triết lý kinh doanh “TẬN TUỴ
            phục vụ KHÁCH HÀNG, tạo NIỀM TIN với ĐỐI TÁC, CHĂM LO đời sống NHÂN
            VIÊN, ĐÓNG GÓP thiết thực cho CỘNG ĐỒNG“. Đây chính là kim chỉ nam
            để toàn thể nhân viên R2S cùng hành động.
          </p>

          <p className="mt-[15px] font-[700]">Địa điểm công ty</p>
          <div className="flex items-center gap-3 ">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="26"
                viewBox="0 0 21 26"
                fill="none"
              >
                <path
                  d="M9.20391 25.4158C6.34922 22.1472 0 14.2251 0 9.7753C0 4.37648 4.70094 0 10.5 0C16.2969 0 21 4.37648 21 9.7753C21 14.2251 14.6016 22.1472 11.7961 25.4158C11.1234 26.1947 9.87656 26.1947 9.20391 25.4158ZM10.5 13.0337C12.4305 13.0337 14 11.5725 14 9.7753C14 7.97807 12.4305 6.51686 10.5 6.51686C8.56953 6.51686 7 7.97807 7 9.7753C7 11.5725 8.56953 13.0337 10.5 13.0337Z"
                  fill="#FE5656"
                />
              </svg>
            </span>
            <p>1164 đường Phạm Văn Đồng, P.Linh Đông, TP. Thủ Đức, TP. HCM</p>
          </div>
        </div>
        <div className="my-[30px] h-full w-[35%] border border-[#FE5656] bg-[#FE56561A] sm:mx-[24px] sm:w-auto md:flex md:w-[90%] md:items-end tablet-up:mx-[40px] tablet-up:mb-[35px] tablet-up:w-auto tablet-up:pb-[40px] desktop-up:mr-[30px] desktop-up:pb-[40px]">
          <div className="md:w-[50%]">
            <img
              src="https://source.unsplash.com/random"
              alt=""
              className="m-auto h-[200px] w-[200px] rounded-[8px] border border-[#7D7D7D] object-cover tablet-up:my-auto tablet-up:ml-[57px] tablet-up:h-[230px] tablet-up:w-[230px]"
            />
          </div>
          <div className="md:w-[50%]">
            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M15.984 0C7.152 0 0 7.168 0 16C0 24.832 7.152 32 15.984 32C24.832 32 32 24.832 32 16C32 7.168 24.832 0 15.984 0ZM27.072 9.6H22.352C21.84 7.6 21.104 5.68 20.144 3.904C23.088 4.912 25.536 6.96 27.072 9.6ZM16 3.264C17.328 5.184 18.368 7.312 19.056 9.6H12.944C13.632 7.312 14.672 5.184 16 3.264ZM3.616 19.2C3.36 18.176 3.2 17.104 3.2 16C3.2 14.896 3.36 13.824 3.616 12.8H9.024C8.896 13.856 8.8 14.912 8.8 16C8.8 17.088 8.896 18.144 9.024 19.2H3.616ZM4.928 22.4H9.648C10.16 24.4 10.896 26.32 11.856 28.096C8.912 27.088 6.464 25.056 4.928 22.4ZM9.648 9.6H4.928C6.464 6.944 8.912 4.912 11.856 3.904C10.896 5.68 10.16 7.6 9.648 9.6ZM16 28.736C14.672 26.816 13.632 24.688 12.944 22.4H19.056C18.368 24.688 17.328 26.816 16 28.736ZM19.744 19.2H12.256C12.112 18.144 12 17.088 12 16C12 14.912 12.112 13.84 12.256 12.8H19.744C19.888 13.84 20 14.912 20 16C20 17.088 19.888 18.144 19.744 19.2ZM20.144 28.096C21.104 26.32 21.84 24.4 22.352 22.4H27.072C25.536 25.04 23.088 27.088 20.144 28.096ZM22.976 19.2C23.104 18.144 23.2 17.088 23.2 16C23.2 14.912 23.104 13.856 22.976 12.8H28.384C28.64 13.824 28.8 14.896 28.8 16C28.8 17.104 28.64 18.176 28.384 19.2H22.976Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Website"
              detail="r2s.com.vn"
            ></RecruitmentItem>
            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="28"
                  viewBox="0 0 32 28"
                  fill="none"
                >
                  <path
                    d="M28 0H4C2.35 0 1.015 1.2375 1.015 2.75L1 19.25C1 20.7625 2.35 22 4 22H28C29.65 22 31 20.7625 31 19.25V2.75C31 1.2375 29.65 0 28 0ZM28 5.5L16 12.375L4 5.5V2.75L16 9.625L28 2.75V5.5Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Email"
              detail="tuyendung@r2s.com"
            ></RecruitmentItem>
            <RecruitmentItem
              icon={
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="31"
                  height="23"
                  viewBox="0 0 31 23"
                  fill="none"
                >
                  <path
                    d="M15.5 0C16.699 0 17.8489 0.584912 18.6967 1.62606C19.5445 2.66721 20.0208 4.07932 20.0208 5.55172C20.0208 7.02413 19.5445 8.43624 18.6967 9.47739C17.8489 10.5185 16.699 11.1034 15.5 11.1034C14.301 11.1034 13.1511 10.5185 12.3033 9.47739C11.4555 8.43624 10.9792 7.02413 10.9792 5.55172C10.9792 4.07932 11.4555 2.66721 12.3033 1.62606C13.1511 0.584912 14.301 0 15.5 0ZM6.45833 3.96552C7.18167 3.96552 7.85333 4.20345 8.43458 4.63172C8.24083 6.9 8.78333 9.15241 9.89417 10.9131C9.24833 12.4359 7.95667 13.4828 6.45833 13.4828C5.43062 13.4828 4.445 12.9814 3.71829 12.089C2.99159 11.1966 2.58333 9.9862 2.58333 8.72414C2.58333 7.46207 2.99159 6.2517 3.71829 5.35928C4.445 4.46687 5.43062 3.96552 6.45833 3.96552ZM24.5417 3.96552C25.5694 3.96552 26.555 4.46687 27.2817 5.35928C28.0084 6.2517 28.4167 7.46207 28.4167 8.72414C28.4167 9.9862 28.0084 11.1966 27.2817 12.089C26.555 12.9814 25.5694 13.4828 24.5417 13.4828C23.0433 13.4828 21.7517 12.4359 21.1058 10.9131C22.232 9.1277 22.7547 6.87811 22.5654 4.63172C23.1467 4.20345 23.8183 3.96552 24.5417 3.96552ZM7.10417 20.2241C7.10417 16.9407 10.8629 14.2759 15.5 14.2759C20.1371 14.2759 23.8958 16.9407 23.8958 20.2241V23H7.10417V20.2241ZM0 23V20.6207C0 18.4159 2.44125 16.56 5.74792 16.0207C4.98583 17.0993 4.52083 18.5903 4.52083 20.2241V23H0ZM31 23H26.4792V20.2241C26.4792 18.5903 26.0142 17.0993 25.2521 16.0207C28.5587 16.56 31 18.4159 31 20.6207V23Z"
                    fill="#FE5656"
                  />
                </svg>
              }
              title="Quy mô"
              detail="30 - 100 người"
            ></RecruitmentItem>
          </div>
        </div>
      </div>

      <div className="mx-[40px] mt-[30px] sm:hidden">
        <p className="font-[700]">Việc làm khác đang tuyển</p>
        <div className="mt-[20px] flex flex-col gap-5 rounded-[5px] bg-[#F6F6F6] px-[20px] py-[30px] shadow-banner">
          {loading ? (
            <Loading></Loading>
          ) : (
            <>
              <div className="flex flex-wrap justify-start   gap-4">
                {dataJob && dataJob.length > 0 ? (
                  dataJob
                    .filter((data) => data.id != id)
                    .map((data) => (
                      <>
                        <div style={{ width: "calc(50% - 10px)" }}>
                          <JobItem key={data.id} {...data}></JobItem>
                        </div>
                      </>
                    ))
                ) : (
                  <p className="text-center">Không có dữ liệu :{"("}</p>
                )}
              </div>
              <Pagination
                totalPages={totalPages}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              ></Pagination>
            </>
          )}
        </div>
      </div>
    </>
  );
};

export default CompanyInformation;
