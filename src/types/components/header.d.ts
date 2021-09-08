import { NavLinkProps } from "react-router-dom";

interface IHeader {
  color?: string;
}

interface IHeaderNav extends NavLinkProps {
  selected?: boolean;
}
