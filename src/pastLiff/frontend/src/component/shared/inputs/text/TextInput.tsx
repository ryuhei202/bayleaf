import * as React from "react";
import {
  createStyles,
  WithStyles,
  TextField,
  FormLabel,
  FormControl,
  FormHelperText,
  withStyles
} from "@material-ui/core";
import ErrorIcon from '@material-ui/icons/Error';

import { TextInputViewData } from "./viewData/TextInputViewData";
import { TextInputCallback } from "./callback/TextInputCallback";
import {
  TextInputValidator,
  TextInputValidatorEventType
} from "./validator/TextInputValidator";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {
      overflow: "hidden"
    },
    labelGroup: {
      display: "flex",
      height: "22px",
      marginBottom: ".25rem",
      alignItems: "center"
    },
    label: {
      marginRight: "3px"
    },
    required: {
      fontSize: "10px",
      backgroundColor: "#D94848",
      color: "#fff !important",
      padding: "4px .5rem",
      height: "18px",
      borderRadius: "4px"
    },
    progress: {
      margin: "30px"
    },
    icon: {
      fontSize: '14px',
      verticalAlign: 'text-top',
      lineHeight: '1',
      marginRight: '2px',
    },
    none: {
      display: 'none',
    },
    textField: {
      "&::placeholder": {
        fontSize: "14px"
      }
    }
  });
};

// ----------------------------------------
// props
// ----------------------------------------
export interface TextInputProps {
  viewData: TextInputViewData;
  callback: TextInputCallback;
  validator?: TextInputValidator;
}

// ----------------------------------------
// Component
// ----------------------------------------
const TextInput = (props: TextInputProps & WithStyles<typeof styles>) => {
  //const [error, setError] = useState<boolean>(false);
  //const [helperText, setHelperText] = useState<string | null>(null);

  const onChange = (event: any): void => {
    if (props.callback && props.callback.onChange) {
      props.callback.onChange(event);
    }
    if (
      props.validator &&
      props.validator.targetEvent === TextInputValidatorEventType.Change
    ) {
      props.validator.inspect(event.target.value);
    }
  };

  const onBlur = (event: any): void => {
    if (props.callback && props.callback.onBlur) {
      props.callback.onBlur(event);
    }
    if (
      props.validator &&
      props.validator.targetEvent === TextInputValidatorEventType.Blur
    ) {
      props.validator.inspect(event.target.value);
    }
  };

  return (
    <React.Fragment>
      <FormControl
        className={props.classes.root}
        fullWidth={true}
        error={props.viewData.error}
      >
        <div className={props.classes.labelGroup}>
          <FormLabel className={props.classes.label}>
            {props.viewData.label}
          </FormLabel>
          {props.viewData.required ? (
            <FormLabel className={props.classes.required}>必須</FormLabel>
          ) : null}
        </div>
        <TextField
          type={props.viewData.type}
          defaultValue={props.viewData.defaultValue}
          className={props.viewData.innerClassName}
          placeholder={props.viewData.placeholder}
          InputLabelProps={props.viewData.InputLabelProps}
          InputProps={Object.assign(
            {
              classes: {
                input: props.classes.textField
              }
            },
            props.viewData.InputProps
          )}
          inputProps={props.viewData.inputProps}
          required={props.viewData.required}
          fullWidth={props.viewData.fullWidth}
          autoComplete={props.viewData.autoComplete}
          onChange={onChange}
          onBlur={onBlur}
        />
        <FormHelperText>
          {props.viewData.error ? <ErrorIcon className={props.classes.icon} /> : <i className={props.classes.none}> </i>}
          {props.viewData.helperText}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default withStyles(styles)(TextInput);
