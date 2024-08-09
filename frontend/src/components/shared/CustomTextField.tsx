import React from "react";
import {
  TextField,
  FormControl,
  InputLabel,
  TextFieldProps,
} from "@mui/material";
import { styled } from "@mui/material/styles";

const StyledTextField = styled(TextField)(({ theme }) => ({
  "& .MuiInputBase-root": {
    backgroundColor: "#f1f1f1", // Gray background
  },
  "& .MuiInputBase-input": {
    padding: theme.spacing(1.5), // Add padding for input
  },
}));

type CustomTextFieldProps = TextFieldProps & {
  label: string;
};

export default function CustomTextField({
  label,
  placeholder,
  ...props
}: CustomTextFieldProps) {
  return (
    <FormControl fullWidth sx={{}}>
      <InputLabel
        htmlFor={props.id || label}
        sx={{
          position: "relative",
          marginBottom: "20px",
          left: "-12px",
        }}
      >
        {label}
      </InputLabel>
      <StyledTextField
        placeholder={placeholder}
        InputLabelProps={
          {
            //   shrink: true,
          }
        }
        {...props}
      />
    </FormControl>
  );
}
