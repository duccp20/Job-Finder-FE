import React, { useState } from "react";
import HeaderHome from "../../components/HeaderHome";
import RecruitmentItem from "../../components/Recruitment/item";
import SearchBar from "../../components/SearchBatr/search";
import RecruitmentHeader from "../../components/Recruitment/header";

const Recruitment = () => {
  return (
    <div>
      <HeaderHome />
      <SearchBar />

      <div className="w-[90%] rounded-[6px] border-[2px] border-[#FE5656] py-[45px] my-[10px] m-auto">
        <RecruitmentHeader></RecruitmentHeader>
        <div className="flex">
          <div className=" w-[60%] flex flex-col gap-[10px] ml-[40px] mr-[10px] mt-[30px] text-inherit">
            <p className="font-[700] my-[10px]">Mô tả công việc</p>
            <ul className="list-disc mx-[10px] px-[10px] leading-normal">
              <li className="mb-[10px]">
                Tham gia vào các dự án thiết kế, phát triển các sản phẩm mới
                theo yêu cầu của khách hàng hoặc từ Leader.
              </li>
              <li className="mb-[10px]">
                Tham gia bảo trì, nâng cấp chức năng, giao diện theo yêu cầu của
                khách hàng trên hệ thống website hiện có.
              </li>
              <li className="mb-[10px]">
                Tham gia phân tích yêu cầu, thiết kế, cài đặt và review code sử
                dụng một trong các framework của Javascript.
              </li>
              <li className="mb-[10px]">
                Nghiên cứu và ứng dụng các công nghệ mới vào phát triển sản
                phẩm.
              </li>
              <li className="mb-[10px]">Báo cáo kết quả công việc cho PM.</li>
            </ul>
            <p className="font-[700] my-[10px]">Yêu cầu công việc</p>
            <ul className="list-disc mx-[10px] px-[10px] leading-normal">
              <li className="mb-[10px]">
                Nắm vững kiến thức về HTML/CSS,
                JS/JQuery/AJAX/Bootstrap/Responsive.
              </li>
              <li className="mb-[10px]">
                Nắm vững ngôn ngữ lập trình JavaScript.
              </li>
              <li className="mb-[10px]">Hiểu biết về REST API.</li>
              <li className="mb-[10px]">
                Có khả năng làm việc tốt với ReactJs, Next.Js
              </li>
              <li className="mb-[10px]">
                Có khả năng tự học, và linh hoạt khi làm việc với các framework
                khác của Javascript. (NodeJs, ReactJs, Ghost, Strapi) để phát
                triển dự án..
              </li>
              <li className="mb-[10px]">Có tư duy logic tốt.</li>
              <li className="mb-[10px]">
                Có kỹ năng lên kế hoạch công việc và quản lý thời gian tốt.
              </li>
              <li className="mb-[10px]">Có kỹ năng làm việc nhóm tốt. </li>
              <li className="mb-[10px]">
                Chịu được áp lực và hoàn thành công việc đúng deadline.
              </li>
            </ul>
            <p className="font-[700] my-[10px]">Chế độ phúc lợi</p>
            <ul className="list-disc mx-[10px] px-[10px] leading-normal">
              <li className="mb-[10px]">
                Trợ cấp thực tập: 3.000.000 - 5.000.000 đồng/tháng.
              </li>
              <li className="mb-[10px]">
                Làm việc cùng team tech trẻ trung, đầy nhiệt huyết và năng động.
              </li>
              <li className="mb-[10px]">
                Cơ hội học hỏi và làm việc trực tiếp cùng các Leader đầy kinh
                nghiệm.
              </li>
            </ul>
          </div>
          <div className="w-[40%] h-full bg-[#FE56561A] border border-[#FE5656] mr-[30px] my-[30px] pb-[40px]">
            <RecruitmentItem
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="36"
                viewBox="0 0 35 36"
                fill="none"
              >
                <path
                  d="M19.6875 25.875C21.1959 25.875 22.6426 25.2758 23.7092 24.2092C24.7758 23.1426 25.375 21.6959 25.375 20.1875V6.1875C25.375 4.67908 24.7758 3.23244 23.7092 2.16583C22.6426 1.09922 21.1959 0.5 19.6875 0.5H5.6875C4.17908 0.5 2.73244 1.09922 1.66583 2.16583C0.599217 3.23244 0 4.67908 0 6.1875V20.1875C0 21.6959 0.599217 23.1426 1.66583 24.2092C2.73244 25.2758 4.17908 25.875 5.6875 25.875H19.6875ZM9.625 27.625H12.25V29.8125C12.25 31.503 13.622 32.875 15.3125 32.875H29.3125C30.1247 32.875 30.9037 32.5523 31.478 31.978C32.0523 31.4037 32.375 30.6247 32.375 29.8125V15.8125C32.375 15.0003 32.0523 14.2213 31.478 13.647C30.9037 13.0727 30.1247 12.75 29.3125 12.75H27.125V10.125H29.3125C30.0594 10.125 30.799 10.2721 31.489 10.5579C32.1791 10.8438 32.806 11.2627 33.3342 11.7908C33.8623 12.319 34.2812 12.9459 34.5671 13.636C34.8529 14.326 35 15.0656 35 15.8125V29.8125C35 30.5594 34.8529 31.299 34.5671 31.989C34.2812 32.6791 33.8623 33.306 33.3342 33.8342C32.806 34.3623 32.1791 34.7812 31.489 35.0671C30.799 35.3529 30.0594 35.5 29.3125 35.5H15.3125C14.5656 35.5 13.826 35.3529 13.136 35.0671C12.4459 34.7812 11.819 34.3623 11.2908 33.8342C10.7627 33.306 10.3438 32.6791 10.0579 31.989C9.77211 31.299 9.625 30.5594 9.625 29.8125V27.625Z"
                  fill="#FE5656"
                />
              </svg>
              title="Vị trí làm việc"
              detail="Front end"
            ></RecruitmentItem>

            <RecruitmentItem
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20 21C20 21.5527 19.5527 22 19 22H13C12.45 22 12 21.55 12 21V18H0V27C0 28.6 1.40062 30 3 30H29C30.5994 30 32 28.5994 32 27V18H20V21ZM29 6H24V3C24 1.40062 22.6 0 21 0H11C9.4 0 8 1.40062 8 3V6H3C1.40062 6 0 7.4 0 9V16H32V9C32 7.4 30.6 6 29 6ZM21 6H11V3H21V6Z"
                  fill="#FE5656"
                />
              </svg>
              title="Hình thức làm việc"
              detail="Full time / Part time"
            ></RecruitmentItem>

            <RecruitmentItem
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="42"
                viewBox="0 0 35 42"
                fill="none"
              >
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M24.3105 22.9775C26.3085 24.605 27.7085 26.81 27.7085 29.75V35H33.5418V29.75C33.5418 25.935 28.3355 23.6775 24.3105 22.9775Z"
                  fill="#FE5656"
                />
                <path
                  d="M13.1248 21C16.3465 21 18.9582 17.866 18.9582 14C18.9582 10.134 16.3465 7 13.1248 7C9.90318 7 7.2915 10.134 7.2915 14C7.2915 17.866 9.90318 21 13.1248 21Z"
                  fill="#FE5656"
                />
                <path
                  fill-rule="evenodd"
                  clip-rule="evenodd"
                  d="M21.8752 21C25.0981 21 27.7085 17.8675 27.7085 14C27.7085 10.1325 25.0981 7 21.8752 7C21.1897 7 20.5481 7.175 19.9356 7.42C21.1905 9.28238 21.8751 11.605 21.8751 14C21.8751 16.395 21.1905 18.7176 19.9356 20.58C20.5481 20.825 21.1897 21 21.8752 21ZM13.1252 22.75C9.23141 22.75 1.4585 25.095 1.4585 29.75V35H24.7918V29.75C24.7918 25.095 17.0189 22.75 13.1252 22.75Z"
                  fill="#FE5656"
                />
              </svg>
              title="Số lượng cần tuyển"
              detail="3"
            ></RecruitmentItem>

            <RecruitmentItem
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="32"
                height="32"
                viewBox="0 0 32 32"
                fill="none"
              >
                <path
                  d="M20 21C20 21.5527 19.5527 22 19 22H13C12.45 22 12 21.55 12 21V18H0V27C0 28.6 1.40062 30 3 30H29C30.5994 30 32 28.5994 32 27V18H20V21ZM29 6H24V3C24 1.40062 22.6 0 21 0H11C9.4 0 8 1.40062 8 3V6H3C1.40062 6 0 7.4 0 9V16H32V9C32 7.4 30.6 6 29 6ZM21 6H11V3H21V6Z"
                  fill="#FE5656"
                />
              </svg>
              title="Trợ cấp"
              detail="3.000.000  - 5.000.0000 VNĐ"
            ></RecruitmentItem>

            <RecruitmentItem
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="37"
                height="38"
                viewBox="0 0 37 38"
                fill="none"
              >
                <path
                  d="M29.3333 5.9H27.5V4.2C27.5 3.265 26.675 2.5 25.6667 2.5C24.6583 2.5 23.8333 3.265 23.8333 4.2V5.9H9.16667V4.2C9.16667 3.265 8.34167 2.5 7.33333 2.5C6.325 2.5 5.5 3.265 5.5 4.2V5.9H3.66667C1.63167 5.9 0.0183333 7.43 0.0183333 9.3L0 33.1C0 34.0017 0.386308 34.8665 1.07394 35.5042C1.76157 36.1418 2.69421 36.5 3.66667 36.5H29.3333C31.35 36.5 33 34.97 33 33.1V9.3C33 7.43 31.35 5.9 29.3333 5.9ZM29.3333 31.4C29.3333 32.335 28.5083 33.1 27.5 33.1H5.5C4.49167 33.1 3.66667 32.335 3.66667 31.4V14.4H29.3333V31.4ZM7.33333 17.8H11V21.2H7.33333V17.8ZM14.6667 17.8H18.3333V21.2H14.6667V17.8ZM22 17.8H25.6667V21.2H22V17.8Z"
                  fill="#FE5656"
                />
              </svg>
              title="Ngày đăng tuyển"
              detail="02/03/2023"
            ></RecruitmentItem>

            <RecruitmentItem
              icon=<svg
                xmlns="http://www.w3.org/2000/svg"
                width="35"
                height="34"
                viewBox="0 0 35 34"
                fill="none"
              >
                <path
                  d="M31.5 15.6245V6.18182C31.5 5.36206 31.1313 4.57587 30.4749 3.99622C29.8185 3.41656 28.9283 3.09091 28 3.09091H20.685C19.95 1.29818 18.025 0 15.75 0C13.475 0 11.55 1.29818 10.815 3.09091H3.5C1.575 3.09091 0 4.48182 0 6.18182V27.8182C0 28.6379 0.368749 29.4241 1.02513 30.0038C1.6815 30.5834 2.57174 30.9091 3.5 30.9091H14.1925C16.3975 32.8255 19.4075 34 22.75 34C29.5225 34 35 29.1627 35 23.1818C35 20.23 33.67 17.5718 31.5 15.6245ZM15.75 3.09091C16.7125 3.09091 17.5 3.78636 17.5 4.63636C17.5 5.48636 16.7125 6.18182 15.75 6.18182C14.7875 6.18182 14 5.48636 14 4.63636C14 3.78636 14.7875 3.09091 15.75 3.09091ZM3.5 27.8182V6.18182H7V9.27273H24.5V6.18182H28V13.4145C26.4075 12.75 24.64 12.3636 22.75 12.3636H7V15.4545H14.175C13.125 16.3355 12.32 17.3864 11.69 18.5455H7V21.6364H10.64C10.5525 22.1464 10.5 22.6564 10.5 23.1818C10.5 24.8509 10.9375 26.4118 11.69 27.8182H3.5ZM22.75 30.9091C17.92 30.9091 14 27.4473 14 23.1818C14 18.9164 17.92 15.4545 22.75 15.4545C27.58 15.4545 31.5 18.9164 31.5 23.1818C31.5 27.4473 27.58 30.9091 22.75 30.9091ZM23.625 23.5682L28.63 26.18L27.3175 28.0655L21 24.7273V17H23.625V23.5682Z"
                  fill="#FE5656"
                />
              </svg>
              title="Hạn nộp hồ sơ"
              detail="28/04/2023"
            ></RecruitmentItem>
          </div>
        </div>

        <div className="mx-[40px] mt-[20px]">
          <p className="font-[700] my-[15px]">Địa điểm làm việc</p>
          <div className="flex items-center gap-3 mb-[30px]">
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

          <p className="font-[700] my-[20px]">Cách thức ứng tuyển</p>
          <p>
            Ứng viên nộp hồ sơ trực tuyến bằng cách bấm nút{" "}
            <a href="#" className="text-[#FE5656]">
              ỨNG TUYỂN NGAY
            </a>{" "}
            dưới đây.
          </p>

          <div className="flex gap-[10px] my-[30px]">
            <button className="px-5 py-2 bg-[#FE5656] text-white text-base not-italic font-bold rounded-[4px] hover:outline hover:outline-[#FE5656] hover:bg-white hover:text-[#FE5656]">
              ỨNG TUYỂN NGAY
            </button>
            <button className="pl-9 pr-16 py-2 text-[#FE5656] text-base not-italic font-bold rounded-[4px] border-[2px] border-solid border-[#FE5656] relative">
              LƯU TIN
              <span className="absolute top-[50%] translate-y-[-50%] right-[15%]">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="22"
                  viewBox="0 0 20 22"
                  fill="none"
                >
                  <path
                    d="M17.4175 0.9375H2.48821C1.11399 0.9375 0 1.78229 0 2.82442V19.8027C0 20.7737 1.38873 21.3783 2.49443 20.8893L9.95283 17.5896L17.4123 20.8889C18.5164 21.3437 19.9057 20.7737 19.9057 19.8027V2.82442C19.9057 1.78229 18.7912 0.9375 17.4175 0.9375ZM17.4175 18.706L9.95283 15.4039L2.48821 18.706V3.06028C2.48821 2.9278 2.62454 2.82442 2.75258 2.82442H17.0598C17.2827 2.82442 17.4175 2.9278 17.4175 3.06028V18.706Z"
                    fill="#FE5656"
                  />
                </svg>
              </span>
            </button>
          </div>
          <p>Hạn nộp hồ sơ: 28/04/2023</p>
        </div>
      </div>
    </div>
  );
};

export default Recruitment;
