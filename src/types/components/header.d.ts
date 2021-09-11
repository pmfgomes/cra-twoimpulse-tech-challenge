import { DetailedHTMLProps, HTMLAttributes } from "react";
import { NavLinkProps } from "react-router-dom";

interface HeaderProps extends DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement> {
  color?: string;
  moreLinkItems?: React.ReactNode[];
  navProps?: DetailedHTMLProps<HTMLAttributes<HTMLElement>, HTMLElement>;
}

interface IHeaderNav extends NavLinkProps {
  selected?: boolean;
}
