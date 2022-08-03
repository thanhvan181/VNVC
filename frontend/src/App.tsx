import { Routes, Route } from "react-router-dom";
import 'react-toastify/dist/ReactToastify.css';
import "antd/dist/antd.css";
// import { toast, ToastContainer } from 'react-toastify';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';

import { auth } from './firebase/firebase.config';
import app from './firebase/firebase.config';
import { currentUser } from './api/auth';
import { onAuthStateChanged } from "firebase/auth";

import "./assets/styles/main.css";
import "./assets/styles/responsive.css";

import HomePage from "./features/Website/HomePage";
import WebsiteLayout from "./components/layouts/WebsiteLayout";

import Home from "./features/Admin/Home";

import Profile from "./features/Admin/Profile";
import AdminLayout from "./components/layouts/AdminLayout";
import PrivateRouter from "./components/PrivateRouter";
import MainPage from "./features/Website/ProductClient/Pages/Main";
import FindVacciationCenter from "./features/Website/FindVacciationCenter";
import ProductDetails from "./features/Website/ProductClient/Pages/Details";
import SigninPage from "./features/Website/Auth/Pages/Signin";
import SignupPage from "./features/Website/Auth/Pages/Signup";
import RegisterComplete from "./features/Website/Auth/Pages/RegisterComplete";
import ForgotPassword from "./features/Website/Auth/Pages/ForgotPassword";
import ListProductAdmin from "./features/Admin/Product/pages/List";
import SuccessSingupVacciation from "./components/SuccessSingupVacciation";
import ListCategory from "./features/Admin/Category/Pages/ListCategory";
import AddCategoryAdmin from "./features/Admin/Category/Pages/AddCategoryAdmin";
import EditCategory from "./features/Admin/Category/Components/EditCategory";
import ListInjectionPark from "./features/Admin/InjectionPark/Pages/InjectionPark";
import AddInjectionPark from "./features/Admin/InjectionPark/Pages/AddInjectionPark";
import Add from "./features/Admin/Product/pages/Add";
import Edit from "./features/Admin/Product/pages/Edit";
import EditInjectionPark from "./features/Admin/InjectionPark/Pages/EditInjectionPark";
import { loadUser } from "./features/Website/Auth/AuthSlide"; "./features/Website/Auth/AuthSlide"

import EditCompany from "./features/Admin/Company/Pages/EditCompany";
import ListCompany from "./features/Admin/Company/Pages/ListCompany";
import AddCompany from "./features/Admin/Company/Pages/AddCompany";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Cart from "./features/Website/Cart/Pages/Cart";
// import AddOrder from "./features/Website/Order/Pages/AddOrderPage";
import AddOrderPage from "./features/Website/Order/Pages/AddOrderPage";
import ListOrder from "./features/Admin/Order/Pages/ListOrder";
import EditOrder from "./features/Admin/Order/Pages/EditOrder";
import LIstOrderPage from "./features/Website/Order/Pages/LIstOrderPage";
import SuccessOrder from "./components/SuccessOrder";
import DetailOrderPage from "./features/Website/Order/Pages/DetailOrderPage";
import SeachPhone from "./components/SeachPhone";
import RegisterVaccine from "./features/Website/Register/Page/RegisterVaccine";
import HistoryRegister from "./features/Website/HistoryRegister";
import SignupNumber from "./components/SignupNumber";
// import { useState } from 'react';
 

type InputCate = {
  // kiểu dữ liệu của từng input
  name: string;
  index: number;
};
// const Product = React.lazy(() => import('./features/Website/ProductClient'));
function App() {
  const dispatch = useDispatch();
//  const [numbers, setNumber] = useState({})

  
  useEffect(() => {
    const unsubcribe = onAuthStateChanged(auth, async (user: any) => {
      if (user) {
        const { token } = await user.getIdTokenResult();
        console.log("GET USER token: ", token)
        currentUser(token)
          .then(({ data }) => {
            data.token = token
            dispatch(loadUser(data));
          })
          .catch((error) => toast.error(error.message));
      }
    });
    return () => unsubcribe();
  }, [dispatch])

  return (
    <div className="App">
      <ToastContainer />
      <main>
        <Routes>
          <Route path="/" element={<WebsiteLayout />}>
            <Route index element={<HomePage />} />
            <Route path="dangkytiemchung" element={<RegisterVaccine />} />
            <Route path="product">
              <Route index element={<MainPage />} />
              <Route path=":id" element={<ProductDetails />} />
            </Route>
            {/* <Route path="vaccine" element={<ProductPage />} /> */}
            <Route path="signin" element={<SigninPage />} />
            <Route path="signup" element={<SignupPage />} />
            <Route path="signup/complete" element={<RegisterComplete />} />
            <Route path="forgot/password" element={<ForgotPassword />} />
          
            <Route path="number" element={<SignupNumber  />} />
            {/* <Route path="test" element={<TestiMonials />} /> */}
            <Route
              path="hethongtrungtamtiemchung"
              element={<FindVacciationCenter />}
            />
            <Route
              path="cart"
              element={<Cart />}
            />
            <Route
              path="checkout"
              element={<AddOrderPage />}
            />
              <Route
              path="order"
              element={<LIstOrderPage />}
            />
              <Route
              path="successorder"
              element={<SuccessOrder />}
            />
             <Route
              path="orderdetail/:id"
              element={<DetailOrderPage />}
            />
             <Route
              path="orderphone"
              element={<SeachPhone />}
            />
              <Route
              path="historyregister"
              element={<HistoryRegister />}
            />
            
             
          </Route>

          <Route
            path="admin"
            element={
              <PrivateRouter>
                <AdminLayout />
              </PrivateRouter>
            }
          >
            <Route index element={<Home />} />
            <Route path="category">
              <Route index element={< ListCategory />} />
              <Route path=":id/edit" element={<EditCategory />} />
              <Route path="add" element={<AddCategoryAdmin />} />
            </Route>
            <Route path="injection"> <Route index element={<ListInjectionPark />} />
              <Route path=":id/edit" element={<EditInjectionPark />} />
              <Route path="add" element={<AddInjectionPark />} />
            </Route>

            <Route path="order">
              <Route
                index
                element={<ListOrder />}
              />
              <Route path=":id/edit" element={<EditOrder />} />

            </Route>
            <Route path="signupvaccine">
              <Route
                index
                element={<ListOrder />}
              />
              <Route path=":id/edit" element={<EditOrder />} />

            </Route>
            



            <Route path="company">
              <Route
                index
                element={<ListCompany />}
              />
              <Route path=":id/edit" element={<EditCompany />} />
              <Route
                path="add"
                element={<AddCompany />}
              />
            </Route>
            <Route path="product"> <Route index element={< ListProductAdmin />} />
              <Route path=":id/edit" element={<Edit />} />
              <Route path="add" element={<Add />} />
            </Route>
            <Route path="profile" element={<Profile />} />
          </Route>
        </Routes>
        <ToastContainer />
      </main>
    </div >
  );
}

export default App;
