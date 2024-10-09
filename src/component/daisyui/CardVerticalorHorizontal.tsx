import React, {
  MouseEvent,
  MouseEventHandler,
  ReactElement,
  useState,
  useEffect,
  Children,
} from "react";

import Card from "./Card";
import "./component.css";

interface CardProps {
  title: string;
  description: string;
  btnOptions?: {
    title: string;
    onClickEvent: { newShowChild: React.MouseEventHandler<HTMLButtonElement> };
  };
  imgSRC: string;
  children?: React.ReactElement;
  training?: React.ReactElement;
  index: number;
}
/*
type CorrectEventType = React.MouseEvent<HTMLButtonElement, MouseEvent>; // or similar

const handleClick: MouseEventHandler<HTMLButtonElement> = (event: CorrectEventType) => {
    // Your event handling code here
};
*/

export default function CardVerticalorHorizontal(
  props: CardProps,
): ReactElement {
  const { title, description, btnOptions, imgSRC, children, index } = props;

  return (
    <div
      data-index={index}
      className="p-2 py-6 m-4 shadow-xl card lg:card-side bg-secondary text-secondary-content"
    >
      <figure>
        <img className="h-52" src={imgSRC} alt="Album" />
      </figure>
      <div className="card-body ">
        <h2 className="card-title">{title}</h2>
        <p>{description}</p>
        <div className="justify-end card-actions" />
      </div>

      {children}
    </div>
  );
}
