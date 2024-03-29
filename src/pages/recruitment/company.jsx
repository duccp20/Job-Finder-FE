import React from "react";
import RecruitmentItem from "../../components/Recruitment/item";
import JobItem from "../../components/JobItem";
import Pagination from "../../components/Pagination";
import Loading from "../../components/Loading";
import { useParams } from "react-router-dom";
import useDataFetcher from "../../components/Pagination/useDataFetcher";
import { useSelector } from "react-redux";

const CompanyInformation = () => {
  const { id } = useParams();
  const companyData = useSelector((state) => state.job.data.companyDTO);

  const { loading, dataJob, totalPages, currentPage, setCurrentPage } =
    useDataFetcher();

  console.log(companyData, "datajob");

  const styledDescription = companyData.description.replace(
    /<ul>/g,
    '<ul style="list-style: unset !important;">',
  );

  return (
    <div>
      <div className="flex sm:flex-col-reverse tablet-range:flex-col-reverse">
        <div className="flex flex-col gap-[10px] pr-[30px] leading-normal text-inherit sm:w-full sm:px-[24px] sm:text-[8px] tablet-up:ml-[40px] tablet-up:mr-[10px] tablet-up:w-auto desktop-up:ml-[40px] desktop-up:mr-[10px] desktop-up:mt-[30px] desktop-up:w-[60%] ">
          <div
            dangerouslySetInnerHTML={{ __html: companyData.description }}
            className="jobDescription mx-[10px] list-disc px-[10px] leading-normal sm:mb-[10px] tablet-up:mb-[20px]"
          />
          <div
            dangerouslySetInnerHTML={{ __html: companyData.requirement }}
            className="jobDescription mx-[10px] list-disc px-[10px] leading-normal sm:mb-[10px] tablet-up:mb-[20px]"
          />

          <p className="mt-[15px] font-[700]">Địa điểm công ty</p>
          <div className="flex items-center gap-3 sm:gap-2">
            <span>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="21"
                height="26"
                viewBox="0 0 21 26"
                fill="none"
                className="sm:h-[21px] sm:w-[16px]"
              >
                <path
                  d="M9.20391 25.4158C6.34922 22.1472 0 14.2251 0 9.7753C0 4.37648 4.70094 0 10.5 0C16.2969 0 21 4.37648 21 9.7753C21 14.2251 14.6016 22.1472 11.7961 25.4158C11.1234 26.1947 9.87656 26.1947 9.20391 25.4158ZM10.5 13.0337C12.4305 13.0337 14 11.5725 14 9.7753C14 7.97807 12.4305 6.51686 10.5 6.51686C8.56953 6.51686 7 7.97807 7 9.7753C7 11.5725 8.56953 13.0337 10.5 13.0337Z"
                  fill="#FE5656"
                />
              </svg>
            </span>
            {/* <p>1164 đường Phạm Văn Đồng, P.Linh Đông, TP. Thủ Đức, TP. HCM</p> */}
            <p>{companyData.location || "Chưa cập nhật"}</p>
          </div>
        </div>

        <div className="h-full border border-[#FE5656] bg-[#FE56561A] sm:mx-auto sm:my-[20px] sm:flex sm:items-center sm:pb-[19px] md:flex md:w-[90%] md:items-end tablet-up:mx-[20px] tablet-up:my-[35px] tablet-up:w-auto tablet-up:pb-[40px] desktop-up:my-[30px]  desktop-up:w-[40%] desktop-up:pb-[40px]">
          <div className="sm:w-full sm:pb-[5px] md:w-[50%] ">
            <img
              src={`https://firebasestorage.googleapis.com/v0/b/job-worked.appspot.com/o/images%2F${companyData.logo}?alt=media`}
              alt=""
              className="h-[250px] w-[250px] rounded-[8px] border border-[#7D7D7D] object-cover sm:ml-[21px] sm:mt-[5px] sm:h-[120px] sm:w-[115px] tablet-range:ml-[57px] tablet-up:my-auto tablet-up:h-[230px] tablet-up:w-[230px] desktop-up:m-auto"
            />
          </div>
          <div className="sm:w-[50%] md:w-[50%]">
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
              detail={companyData.website || "Chưa cập nhật"}
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
              detail={companyData.email || "Chưa cập nhật"}
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
              detail={companyData.personnelSize || "Chưa cập nhật"}
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
              <div className="flex flex-wrap justify-start gap-4">
                {dataJob && dataJob.length > 0 ? (
                  dataJob
                    .filter((data) => data.id != id)
                    .map((data) => (
                      <>
                        <div
                          key={data.id}
                          className="w-[calc(50%-10px)] tablet-range:w-[calc(100%-30px)]"
                        >
                          <JobItem {...data}></JobItem>
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
    </div>
  );
};

export default CompanyInformation;
