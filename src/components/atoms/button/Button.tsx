import React from 'react';
import { twMerge } from 'tailwind-merge'
import {WithChildren} from "@/interfaces/WithChildren";
import styles from "./Button.module.scss"
import {useButton, AriaButtonOptions} from 'react-aria';
import {WithClick} from "@/interfaces/WithClick";
import {WithClassName} from "@/interfaces/WithClassname";

interface ButtonProps extends AriaButtonOptions<'button'>, WithChildren, WithClassName {
  variant?: Variant;
}

export const Button = (props: ButtonProps) => {
  let ref = React.useRef(null);
  let { buttonProps } = useButton(props, ref);

  buttonProps.className = twMerge(styles[props.variant ?? "unstyled"], buttonProps.className, props.className)

  return (
    <button
      {...buttonProps} ref={ref}
    >
      {props.children}
    </button>
  );
};


type Variant = "unstyled" | "primary"
