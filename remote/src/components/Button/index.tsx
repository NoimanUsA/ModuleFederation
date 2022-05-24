import React from "react";
import './Button.scss';

interface IButton {
  children: string;
}

export const Button = (props: IButton) => {

  return <button className="button">{props.children}</button>;
};
;

