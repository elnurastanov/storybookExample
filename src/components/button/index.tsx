import { FC } from "react";
import classNames from "classnames";

import { ButtonProps } from "./Button.types";
import "./style.css";

const Button: FC<ButtonProps> = ({
  label,
  color = "primary",
  disabled = false,
  loading = false,
  onClick,
}) => {
  return (
    <button
      className={classNames(
        "button",
        `button-${disabled ? "disabled" : color}`,
        { [`button-${color}-loading`]: !disabled && loading }
      )}
      disabled={disabled || loading}
      onClick={() => {
        console.log("Fire", disabled);
        if (disabled) {
          return;
        }
        onClick();
      }}
      data-testid="button-test"
    >
      {!disabled && loading ? "Loading..." : label}
    </button>
  );
};

export default Button;
