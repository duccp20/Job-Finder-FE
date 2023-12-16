import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { RegisterCandidate } from "./pages/register/register";
import LoginPage from "./pages/login/login";

import { Verify } from "./pages/verify";

import Profile from "./pages/profile/profile";
import { ForgetPass } from "./pages/forgetPass/forgetPass";
import HeaderHome from "./components/HeaderHome";
import HomePage from "./pages/home/home";
import NotFound from "./components/NotFound";
import Layout from "./components/Layout";
import NewPassword from "./pages/newpass/newpass";
import Loading from "./components/Loading";
import { callFetchUserProfile } from "./service/user/api";
import { useDispatch, useSelector } from "react-redux";
import { doFetchAccountAction } from "./redux/account/accountSlice";
import PersonalDetails from "./pages/profile/personal-details";
import JobDetails from "./pages/profile/job-details";
import JobPersonOverall from "./pages/profile/job-person-overall";
import Uploader from "./components/Uploader";
import CompanyInformation from "./pages/recruitment/company";
import LoginAs from "./components/LoginAs";
import ContactInfor from "./pages/hr/contact";
import CompanyInfor from "./pages/hr/companyhr";
import RecruitmentDetail from "./pages/recruitment/detail";
import RecruitmentOverall from "./pages/recruitment/overall";
import ContactOverall from "./pages/hr/overall";
import PostJob from "./pages/post&editJobs/postJob";

import RecruitmentList from "./pages/recruitmentlist/recruitmentlist";
import PopupHr from "./components/PopupHr";

import { callFetchCandidateByUserId } from "./service/candidate/api";
import { doFetchCandidate } from "./redux/candidate/candidateSlice";
import PDF from "./pages/pdf/pdf";
import Recruitment from "./pages/recruitment/detail";
import AppliedJob from "./pages/apply/appliedjob";
import NotPermitted from "./components/NotPermitted";
import { getAllMajor } from "./service/major/api";
import {
  doSetMajor,
  doSetPosition,
  doSetSchedule,
} from "./redux/basedata/baseDataSlice";
import { getAllPosition } from "./service/position/api";
import { getAllSchedule } from "./service/schedule/api";
import MultiSelectDropdown from "./components/MultilSelectTag";
import ViewRecruitmentOverall from "./pages/viewrecruitment/overall";
import ViewCompanyInfor from "./pages/viewrecruitment/viewcompany";
import ViewRecruitmentDetail from "./pages/viewrecruitment/viewdetail";

const App = () => {
  const isLoading = useSelector((state) => state.account.isLoading);
  const user = useSelector((state) => state.account.user);
  const dispatch = useDispatch();
  const fetchAccount = async () => {
    if (
      window.location.pathname === "/register" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/forgot-password" ||
      window.location.pathname === "/verify-email"
    )
      return;

    const res = await callFetchUserProfile();

    if (res && res?.data) {
      dispatch(doFetchAccountAction(res.data));
    }

    const resCan = await callFetchCandidateByUserId(res.data.id);
    if (resCan && resCan?.data) {
      console.log(resCan.data);
      dispatch(doFetchCandidate(resCan.data));
    } else {
      console.log(resCan?.message);
    }

    if (res && res?.errors) {
      console.log(res.errors + " " + res.message);
    }
  };

  useEffect(() => {
    // Định nghĩa hàm async để sử dụng Promise.all
    const fetchData = async () => {
      try {
        // Tạo một mảng các Promises từ các hàm fetch dữ liệu
        const fetchPromises = [
          getAllMajor(),
          getAllPosition(),
          getAllSchedule(),
          // Bạn có thể thêm các fetch khác tại đây
        ];

        // Sử dụng Promise.all để đợi tất cả các Promises hoàn thành
        const [resMajor, resPosition, resSchedule] =
          await Promise.all(fetchPromises);

        // Cập nhật state tương ứng sau khi tất cả Promises hoàn thành
        if (resMajor?.data) {
          dispatch(doSetMajor(resMajor.data));
        }
        if (resPosition?.data) {
          dispatch(doSetPosition(resPosition.data));
        }
        if (resSchedule?.data) {
          dispatch(doSetSchedule(resSchedule.data));
        }
      } catch (error) {
        // Xử lý lỗi tại đây
        console.error("Failed to fetch initial data", error);
      }
    };

    fetchAccount();
    fetchData();
  }, []);

  const router = createBrowserRouter([
    {
      path: "/mu",
      element: <MultiSelectDropdown />,
    },
    {
      path: "/",
      element: <Layout />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <HomePage />,
        },
      ],
    },
    {
      path: "/login",
      element: <LoginPage />,
    },
    {
      path: "/register",
      element: <RegisterCandidate />,
    },
    {
      path: "/verify-email",
      element: <Verify />,
      errorElement: <NotFound />,
    },
    {
      path: "/forgot-password",
      element: <ForgetPass />,
      errorElement: <NotFound />,
      children: [
        {
          path: "verify",
          element: <ForgetPass />,
        },
      ],
    },
    {
      path: "/reset-password",
      element: <NewPassword />,
    },
    {
      path: "/profile",
      element: <Profile />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <JobPersonOverall />,
        },
        {
          path: "personal",
          element: <PersonalDetails />,
        },
        {
          path: "job",
          element: <JobDetails />,
        },
      ],
    },
    {
      path: "/recruitment",
      element: <RecruitmentOverall />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <RecruitmentDetail />,
        },
        {
          path: "company",
          element: <CompanyInformation />,
        },
      ],
    },

    {
      path: "/recruitmentlist",
      element: <RecruitmentList></RecruitmentList>,
    },
    {
      path: "/upload",
      element: <Uploader></Uploader>,
    },
    {
      path: "/apply",
      element: <AppliedJob />,
    },
    {
      path: "/loginas",
      element: <LoginAs></LoginAs>,
    },
    {
      path: "/popuphr",
      element: <PopupHr></PopupHr>,
    },

    {
      path: "/post-job",
      element: <PostJob />,
    },

    {
      path: "/contact",
      element: <ContactOverall />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <ContactInfor />,
        },
        {
          path: "company-infor",
          element: <CompanyInfor />,
        },
      ],
    },
    {
      path: "/404",
      element: <NotFound></NotFound>,
    },
    {
      path: "/403",
      element: <NotPermitted></NotPermitted>,
    },
    {
      path: "/viewrecruitment",
      element: <ViewRecruitmentOverall />,
      errorElement: <NotFound />,
      children: [
        {
          index: true,
          element: <ViewRecruitmentDetail />,
        },
        {
          path: "viewcompany",
          element: <ViewCompanyInfor />,
        },
      ],
    },
    {
      path: "/t",
      element: <ViewRecruitmentOverall></ViewRecruitmentOverall>,
    },
    // {
    //   path: "/admin",
    //   element: <LayoutAdmin />,
    //   errorElement: <NotFound />,
    //   children: [
    //     {
    //       index: true,
    //       element: (
    //         <ProtectedRoute>
    //           <Dashboard />
    //         </ProtectedRoute>
    //       ),
    //     },
    //     {
    //       path: "user",
    //       element: (
    //         <ProtectedRoute>
    //           <UserTable />
    //         </ProtectedRoute>
    //       ),
    //     },
    //   ],
    // },
  ]);
  return (
    <>
      {/* Có API */}
      {/* {!isLoading ||
      window.location.pathname === "/" ||
      window.location.pathname === "/login" ||
      window.location.pathname === "/register" ||
      window.location.pathname === "/forgot-password" ||
      window.location.pathname === "/reset-password" ||
      window.location.pathname === "/verify-email" ? (
        <RouterProvider router={router} />
      ) : (
        <Loading></Loading>
      )} */}

      {/* Chưa có api */}
      <RouterProvider router={router} />
    </>
  );
};

export default App;
