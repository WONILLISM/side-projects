import { forwardRef } from "react";
import { ButtonProps } from "./Button.types";
import * as styles from "./Button.css";

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (props, ref) => {
    const { variant = "primary", ...rest } = props;

    const variantStyle =
      variant === "primary" ? styles.primary : styles.secondary;

    return (
      <button
        ref={ref}
        className={`${styles.button} ${variantStyle}`}
        {...rest}
      />
    );
  }
);
