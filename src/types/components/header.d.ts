import { LinkProps } from "react-router-dom";

interface IHeader {
  color?: string;
}

interface IHeaderNav extends LinkProps {
  selected?: boolean;
}
