import React from 'react';
import { twMerge } from 'tailwind-merge'
import { Button as MuiButton } from '@mui/base/Button';
import {WithChildren} from "@/interfaces/WithChildren";
import {WithClassName} from "@/interfaces/WithClassname";
import {WithClick} from "@/interfaces/WithClick";
import styles from "./Button.module.scss"

interface ButtonProps extends WithChildren, WithClassName, WithClick<HTMLButtonElement> {
  variant?: Variant;
}

export const Button = ({onClick, className, variant = "unstyled", children}: ButtonProps) => {

  return (
    <MuiButton
      type="button"
      className={twMerge(className, styles[variant])}
      onClick={onClick}
    >
      {children}
    </MuiButton>
  );
};


type Variant = "unstyled" | "primary"
