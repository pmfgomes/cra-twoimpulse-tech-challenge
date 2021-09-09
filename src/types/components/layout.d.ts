interface IRow {
  direction?: "row" | "column";
  align?: "flex-start" | "flex-end" | "center" | "baseline" | "stretch";
  justify?:
    | "flex-start"
    | "flex-end"
    | "center"
    | "space-between"
    | "space-around"
    | "space-evenly"
    | "initial"
    | "inherit";
}

type IButtonColor = "primary" | "secondary" | string;

interface IButton {
  color?: IButtonColor;
}

interface ITitle {
  size?: number;
}

interface IMessage {
  align?: "left" | "center" | "right";
}
