import React from "react";

//Styles
import "./EmptyLayout.scss"

interface IProps {
  children: JSX.Element;
}
export const MainLayout: React.FC<IProps> = ({ children }) => {
  return (<div className="empty-layout">
    {children}
  </div>);
}