import React, { useEffect } from "react";
import { Button, Form } from "react-bootstrap";
import { ToastContainer, toast } from "react-toastify";
// import { Link } from "react-router-dom";
import { useForm, SubmitHandler } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from 'react-router-dom';
import "react-toastify/dist/ReactToastify.css";
import { auth } from "../../../../firebase/firebase.config";

import { sendSignInLinkToEmail } from "firebase/auth";


type TypeInputs = {
  email: string;
  // password: string;
  // name: String;
};


const SignupPage = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { user } = useSelector((state: any) => ({ ...state }));
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeInputs>();

  useEffect(() => {
    if (user && user.token) navigate("/");
  }, [user, navigate])
  const onSubmit: SubmitHandler<TypeInputs> = async (data) => {
    const settings: any = {
      url: import.meta.env.VITE_REACT_APP_REGISTER_REDIRECT_URL,
      handleCodeInApp: true,
    };
    // send email to user's account
    await sendSignInLinkToEmail(auth, data.email, settings);
    toast.success(
      `Email is send to ${data.email}. Click the link to complete your registration`,
    );
    console.log("SET EMAIL TO LOCALSTorage: ", data.email)
    window.localStorage.setItem("emailForRegistraion", data.email);
    reset();
  };

  const formRegister = () => (
    <Form onSubmit={handleSubmit(onSubmit)}>
    

      <div className="container-signup">
        <h3 className="txt-signup">Sign Up</h3>
        {/* <div className="form-group">
          <label className="label-signup">Họ tên</label>
          <input type="email" className="form-control" placeholder="Họ và tên"   {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label className="label-signup">Số điện thoại</label>
          <input type="email" className="form-control" placeholder="Số điện thoại"   {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div> */}
        <div className="form-group">
          <label className="label-signup">Email</label>
          <input type="email" className="form-control" placeholder="Enter email"   {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        {/* <div className="form-group">
          <label className="label-signup">Password</label>
          <input type="email" className="form-control" placeholder="Enter password"   {...register("email")} />
         
        </div> */}

        <button type="submit" className="btn btn-primary btn-block">Sign Up</button>
        <p className="forgot-password text-right">
          Already registered <a href="/signin">sign in?</a>
        </p>

      </div>




     
    </Form>
  );

  return (
    <div>
     
      <ToastContainer />
      {formRegister()}
    </div>
  );
};

export default SignupPage;
