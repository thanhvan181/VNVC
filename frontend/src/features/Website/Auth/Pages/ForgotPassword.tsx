import { useEffect } from "react";
import { Button } from "antd";
import { useForm } from "react-hook-form";
import { MailOutlined } from "@ant-design/icons";
import { ToastContainer, toast } from "react-toastify";
import { getAuth, sendPasswordResetEmail } from "firebase/auth";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";

const ForgotPassword = () => {
    const auth = getAuth();
    const navigate = useNavigate();

    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    const user = useSelector((state: any) => state.user.userInfo);
    console.log(user);
    useEffect(() => {
        if (user && user.token) navigate("/");
        reset();
    }, [user, history, reset]);

    const onSubmit = async (data: any) => {
        const { email } = data;
        const actionCodeSettings:any = {
            url: import.meta.env.VITE_REACT_APP_FORGOT_PASSWORD_REDIRECT,
            handleCodeInApp: true,
        };
        try {
            await sendPasswordResetEmail(auth, email, actionCodeSettings).then(() => {
                toast.success("Check your email for password reset link");
            });
        } catch (error: any) {
            toast.error(error.message);
        }
    };
    return (
        <form onSubmit={handleSubmit(onSubmit)}>
            <ToastContainer />

            <div className="container-signup">
        <h3 className="txt-signup">Forgot Password</h3>

        <div className="form-group">
          <label className="label-signup">Nhập Email</label>
          <input type="email" className="form-control" placeholder=""   {...register("email")} />
          {errors.email && <p>{errors.email.message}</p>}
        </div>
        <Button htmlType="submit" type="primary" shape="round" icon={<MailOutlined />}>
                Tiếp tục
            </Button>

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
            <br /> */}
          
            <br />
            <br />
        </form>
    );
};

export default ForgotPassword;