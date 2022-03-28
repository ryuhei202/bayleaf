import * as React from "react";
import {
  createStyles,
  WithStyles,
  withStyles,
  Select,
  FormLabel,
  FormControl,
  MenuItem,
  FormHelperText
} from "@material-ui/core";

import {
  selectInputValueType,
  SelectInputViewData
} from "./viewData/SelectInputViewData";
import { SelectInputCallback } from "./callback/SelectInputCallback";
import {
  SelectInputValidator,
  SelectInputValidatorEventType
} from "./validator/SelectInputValidator";
import { useState } from "react";

// ----------------------------------------
// styles
// ----------------------------------------
const styles = () => {
  return createStyles({
    root: {
      overflow: "hidden",
      width: "100%"
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
    SelectField: {
      "&::placeholder": {
        fontSize: "14px"
      }
    }
  });
};

// ----------------------------------------
// props
// ----------------------------------------
export interface SelectInputProps {
  viewData: SelectInputViewData;
  callback: SelectInputCallback;
  validator?: SelectInputValidator;
}

// ----------------------------------------
// Component
// ----------------------------------------
const SelectInput = (props: SelectInputProps & WithStyles<typeof styles>) => {
  //const [error, setError] = useState<boolean>(false);
  const [_value, setValue] = useState<selectInputValueType>(
    props.viewData.defaultValue || ""
  );

  const onChange = (event: any): void => {
    if (props.callback && props.callback.onChange) {
      props.callback.onChange(event);
    }
    if (
      props.validator &&
      props.validator.targetEvent === SelectInputValidatorEventType.Change
    ) {
      props.validator.inspect(event.target.value);
    }
    setValue(event.target.value);
  };

  const onBlur = (event: any): void => {
    if (props.callback && props.callback.onBlur) {
      props.callback.onBlur(event);
    }
    if (
      props.validator &&
      props.validator.targetEvent === SelectInputValidatorEventType.Blur
    ) {
      props.validator.inspect(event.target.value);
    }
  };

  const helperText = props.viewData.helperText
    ? props.viewData.helperText || ''
    : !!_value || props.viewData.placeholder || '';

  return (
    <React.Fragment>
      <FormControl
        className={props.classes.root}
        fullWidth={props.viewData.fullWidth}
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
        <Select
          value={_value}
          className={props.viewData.innerClassName}
          inputProps={props.viewData.inputProps}
          required={props.viewData.required}
          onChange={onChange}
          onBlur={onBlur}
        >
          {props.viewData.includeBlank && <MenuItem value="" />}
          {props.viewData.listData
            ? props.viewData.listData.map(data => {
                return (
                  <MenuItem value={data.value} key={data.value}>
                    {data.text}
                  </MenuItem>
                );
              })
            : null}
        </Select>
        <FormHelperText>
          {helperText}
        </FormHelperText>
      </FormControl>
    </React.Fragment>
  );
};

export default withStyles(styles)(SelectInput);
