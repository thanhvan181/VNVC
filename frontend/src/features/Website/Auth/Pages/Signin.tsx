import { Button } from "antd";
import { createOrUpdateUser } from "../../../../api/auth";
import {

  signInWithEmailAndPassword,
  signInWithPopup,
  GoogleAuthProvider,
} from "firebase/auth";
import { auth } from "../../../../firebase/firebase.config";
import { MailOutlined, GoogleOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
// import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
// import firebase from 'firebase/compat/app';
// import 'firebase/compat/auth';
type accessToken = {
  accessToken: string
}

type TypeInputs = {
  email: string;
  // accessToken: any
  password: string;
  // required: any,
  // name: String;
};

const SigninPage = () => {
  // const auth = getAuth();
  const navigate = useNavigate();
  const googleAuthProvider = new GoogleAuthProvider();
  const dispatch = useDispatch();
  const user = useSelector((state: any) => state.user.userInfo);
  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<TypeInputs>();

  useEffect(() => {
    if (user && user.token) navigate("/");
    reset();
  }, [user, reset, navigate]);

  const roleBaseRedirect = (role: string) => {
    console.log("role", role);
    if (role === "admin") {
      navigate("/admin");
    } else {
      navigate("/");
    }
  };
  const googleLogin = async () => {
    try {



      const {
        user: { accessToken: token },
      } = await signInWithPopup(auth, googleAuthProvider);
      // console.log("toekn google", token);
      createOrUpdateUser(token)
        .then(({ data: { name, email, role, _id } }) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name,
              token,
              email,
              role,
              _id,
            },
          });
          roleBaseRedirect(role);
        })
        .catch((error) => console.log(error));
      navigate("/");
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  const onSubmit = async (data: any) => {
    const { email, password } = data;
    try {
      const { user } = await signInWithEmailAndPassword(auth, email, password);
      const { token } = await user.getIdTokenResult();
      createOrUpdateUser(token)
        .then(({ data: { name, email, role, _id } }) => {
          dispatch({
            type: "LOGGED_IN_USER",
            payload: {
              name,
              token,
              email,
              role,
              _id,
            },
          });
          roleBaseRedirect(role);
        })
        .catch((error) => {
          console.log(error);
        });
      reset();
    } catch (error: any) {
      toast.error(error.message);
    }
  };
  

  const formSignin = () => (
    <form onSubmit={handleSubmit(onSubmit)}>

      <div className="container-signup">
        <h3 className="txt-signup">Sign In</h3>

        <div className="form-group">
          <label className="label-signup">Email address</label>
          <input type="email" className="form-control" placeholder="Enter email"   {...register("email")} />

          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <div className="form-group">
          <label className="label-signup" >Password</label>
          <input type="password" className="form-control" placeholder="Enter password"  {...register("password", { required: true })} />
          {/* {errors.email && <p>{errors.email.message}</p>} */}
          {errors.password && <p>Field is require</p>}
        </div>
        <Button htmlType="submit" type="primary" shape="round" icon={<MailOutlined />}>
          Login with Email/Password
        </Button>
        <br />
        <Button shape="round" icon={<GoogleOutlined />} onClick={googleLogin}>
          Login with Google
        </Button>
        <p className="forgot-password text-right">
          <a className="forget" href="/forgot/password">Forgot password</a>
        </p>





      </div>
      {/* <input
        type="email"
        {...register("email", {
          pattern: {
            value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
            required: true,
          },
        })}
      />
      {errors.email && <p>invalid email address</p>}
      <input type="password" {...register("password", { required: true })} />
      {errors.password && <p>Field is require</p>}
      <br /> */}
      {/* <Button htmlType="submit" type="primary" shape="round" icon={<MailOutlined />}>
        Login with Email/Password
      </Button>
      <br />
      <Button shape="round" icon={<MailOutlined />} onClick={googleLogin}>
        Login with Google
      </Button> */}
      {/* <br />
      <Link to="/forgot/password">Forgot password</Link> */}
    </form>
  );
  return (
    <div>

      <ToastContainer />
      {formSignin()}
    </div>
  );
};

// export default Signin;
export default SigninPage;