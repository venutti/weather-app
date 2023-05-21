"use client";
import { CSSTransition } from "react-transition-group";

export default function WithFade({ children, show, ...props }) {
  return (
    <CSSTransition
      {...props}
      in={show}
      timeout={300}
      classNames="fade"
      unmountOnExit
    >
      {children}
    </CSSTransition>
  );
}
