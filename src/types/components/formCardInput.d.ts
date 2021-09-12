interface FormCardInputProps {
  label?: string;
  name?: string;
  type?: "text" | "date" | "number";
  edit?: boolean;
  containerProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
}
