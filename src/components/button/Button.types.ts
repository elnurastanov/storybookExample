import { COLORS } from "../../constants";

export type ButtonColors = (typeof COLORS)[number];

export interface ButtonProps {
  label: string;
  color?: ButtonColors;
  disabled?: boolean;
  loading?: boolean;
  onClick: () => void;
}
