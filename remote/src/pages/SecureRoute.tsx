import React, { FC } from 'react';
import { useSelector } from 'react-redux';
import { Redirect } from 'react-router';
import { URL } from "@/constants/routes";


interface IProps {
  children: JSX.Element;
}

export const SecureRoute: FC<IProps> = ({ children }) => {
  const isAuth = useSelector((state) => state.auth)

  if (isAuth) return children;
  else {
    return <Redirect to={URL.AUTH} />
  }
}