interface FormPageInputProps {
  label?: string;
  name?: string;
  type?: "text" | "date" | "number";
  containerProps?: DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement>;
  hasError?: boolean;
}
