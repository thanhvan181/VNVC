import { createOrUpdateUser } from "../../../../api/auth";
// import { auth } from "../../../../firebase/firebase.config";
import { getAuth, signInWithEmailLink, updatePassword, createUserWithEmailAndPassword } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useForm } from "react-hook-form";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { signUp } from "../AuthSlide";

const RegisterComplete = () => {
    const auth = getAuth();
    const dispatch = useDispatch();
    const navigate = useNavigate();
    const {
        register,
        handleSubmit,
        formState: { errors },
        reset,
    } = useForm();
    // const { register, handleSubmit } = useForm();
    const [email, setEmail] = useState<any>("");
    const user = useSelector((state: any) => state.user.userInfo);

    useEffect(() => {
        setEmail(window.localStorage.getItem("emailForRegistraion"));
        if (user && user.token) navigate("/");
    }, [user, navigate]);

    const onSubmit = async (data: any) => {
        try {
            // const result = await firebase.auth().signInWithEmailLink(email, window.location.href);
            console.log("RegisterCompleate for email: ", email)
            const result = await createUserWithEmailAndPassword(auth, email, data.password);
            console.log("USER CREATED: ", result)
            if (result.user) {
                console.log("REMOVE EMAIL TO LOCALSTorage: ", data.email)
                window.localStorage.removeItem("emailForRegistraion");
                let user = result.user;
                console.log("GET CURRENT USER: ", user)
                await updatePassword(user, data.password);

                const { token } = await user.getIdTokenResult();
                createOrUpdateUser(token)
                    .then(({ data: { name, email, role, _id } }) => {
                        dispatch(signUp({
                            name,
                            token,
                            email,
                            role,
                            _id,
                        }));
                    })
                    .catch((error) => console.log(error));
                navigate("/");
            }
        } catch (error:any) {
            toast.error(error.message)
        }
    };
    const completeRegistrationForm = () => (
        <form onSubmit={handleSubmit(onSubmit)}>

            <div className="container-signup">
                <h3 className="txt-signup">Sign Up</h3>

                <div className="form-group">
                    <label className="label-signup">Email</label>
                    <input type="email" className="form-control" placeholder="Enter email" value={email}  {...register("email")}/>
                    {errors.email && <p>{errors.email.message}</p>}
                </div>
                <div className="form-group">
                    <label className="label-signup">Password</label>
                    <input type="password" className="form-control" placeholder="Enter password"   {...register("password")} />
                    {errors.password && <p>{errors.email.password}</p>}
                </div>


                <button type="submit" className="btn btn-primary btn-block">Sign Up</button>


            </div>



            {/* 
            <input type="email" value={email} disabled />
            <input type="password" {...register("password")} autoFocus placeholder="password" />
            <button>Sign Up</button> */}
        </form>
    );
    return (
        <div>

            <ToastContainer />
            {completeRegistrationForm()}
        </div>
    );
};

export default RegisterComplete;
