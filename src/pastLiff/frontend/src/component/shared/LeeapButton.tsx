import React from "react";
import { createStyles, withStyles, WithStyles } from "@material-ui/core";
import Button, { ButtonProps } from "@material-ui/core/Button";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () =>
  createStyles({
    primary: {
      color: "#ffffff",
      backgroundColor: "#01205c",
      border: "solid 1px #01205c",
      "&:hover": {
        color: "#01205c",
        backgroundColor: "#ffffff"
      }
    },

    secondary: {
      color: "#ffffff",
      backgroundColor: "#D94848",
      border: "solid 1px #D94848",
      "&:hover": {
        color: "#D94848",
        backgroundColor: "#ffffff"
      }
    },

    line: {
      color: "#ffffff",
      backgroundColor: "#00b900",
      border: "solid 1px #00b900",
      "&:hover": {
        color: "#00b900",
        backgroundColor: "#ffffff"
      }
    },

    border: {
      color: "#00266f",
      backgroundColor: "#ffffff",
      border: "1px solid #00266f",
      "&:hover": {
        color: "#ffffff",
        backgroundColor: "#00266f"
      }
    },

    cancel: {
      color: "#8b8b8b",
      backgroundColor: "#ffffff",
      border: "1px solid #8b8b8b"
    },

    default: {
      color: "#6e6e6e",
      backgroundColor: "#ffffff",
      border: "1px solid #d5d5d5",
      boxShadow: "none"
    }
  });

/**
 * @memo 既存のコンポーネント(ボタン)のPropsに独自のPropsをマージする方法
 * https://stackoverflow.com/questions/56696018/react-material-ui-typescript-inherit-props-from-button-to-add-different-var
 */

// ----------------------------------------
// props
// ----------------------------------------
interface LeeapButtonProps
  extends Pick<ButtonProps, Exclude<keyof ButtonProps, "color">> {
  colors?: "primary" | "secondary" | "border" | "line" | "cancel" | "default";
}

// ----------------------------------------
// component
// ----------------------------------------
const LeeapButton = (props: LeeapButtonProps & WithStyles<typeof styles>) => {
  const { colors, classes, ...Props } = props;
  let className;

  switch (colors) {
    case "primary":
      className = classes.primary;
      break;
    case "secondary":
      className = classes.secondary;
      break;
    case "border":
      className = classes.border;
      break;
    case "line":
      className = classes.line;
      break;
    case "cancel":
      className = classes.cancel;
      break;
    default:
      className = classes.default;
      break;
  }

  return <Button className={className} {...Props} />;
};

export default withStyles(styles)(LeeapButton);
