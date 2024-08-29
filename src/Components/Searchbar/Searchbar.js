import { InputAdornment, TextField } from "@mui/material";
import React from "react";
import { IoSearchSharp } from "react-icons/io5";
import "./Searchbar.css";
import { FaLocationDot } from "react-icons/fa6";

export default function Searchbar() {
  return (
    <div className="searchbar">
      <TextField
        type="text"
        placeholder="Freelance Role"
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <IoSearchSharp className="color-black" />
            </InputAdornment>
          ),
          classes: {
            input: "text-field-input",
          },
        }}
        className="text-field-root"
        InputLabelProps={{
          classes: {
            root: "text-field-label",
            focused: "text-field-label Mui-focused",
          },
        }}
      />
      <TextField
        type="text"
        placeholder='City, state, zip code, or "remote"'
        InputProps={{
          startAdornment: (
            <InputAdornment position="start">
              <FaLocationDot className="color-black" />
            </InputAdornment>
          ),
          classes: {
            input: "text-field-input",
          },
        }}
        className="text-field-root2"
        InputLabelProps={{
          classes: {
            root: "text-field-label",
            focused: "text-field-label Mui-focused",
          },
        }}
      />
    </div>
  );
}
