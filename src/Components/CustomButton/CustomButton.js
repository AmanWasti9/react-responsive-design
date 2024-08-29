import React from "react";

export default function CustomButton({ btnText, padding }) {
  return (
    <div>
      <button
        type="button"
        style={{
          backgroundColor: "#FF9900",
          color: "white",
          padding: padding,
          border: "none",
          borderRadius: "30px",
          fontSize: "17px",
        }}
      >
        {btnText}
      </button>
    </div>
  );
}
