import React, { useEffect } from 'react'
import { Navigate } from 'react-router-dom';
import { useSelector } from "react-redux";

type PrivateRouterProps = {
    children: JSX.Element,
}


const PrivateRouter = (props: PrivateRouterProps) => {
    const user = useSelector((state:any) => state.user.userInfo);
    if (!(user?.role === "admin")) {
        return <Navigate to="/signin" />
    }
    return props.children

}

export default PrivateRouter 