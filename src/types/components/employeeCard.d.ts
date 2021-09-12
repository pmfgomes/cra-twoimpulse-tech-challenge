import { HTMLAttributes } from "react";

interface EmployeeCardProps
  extends DetailedHTMLProps<HTMLAttributes<HTMLDivElement>, HTMLDivElement> {
  data?: Employee;
  visible?: boolean;
}
