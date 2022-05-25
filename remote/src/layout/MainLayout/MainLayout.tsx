import React, { ReactNode } from "react";
import { Header } from "@/components/Header";

//Styles
import "./MainLayout.scss"

interface IProps {
  children?: ReactNode;
}
export const MainLayout: React.FC<IProps> = (props: IProps) => {
  return (<div className="main-layout">
    <Header className="main-layout__header" />
    <main className="main-layout__content">
      {props.children}
    </main>
  </div>);
};
