import React from "react";

export interface CtaBtn {
  bg?: "white" | "red";
  text?: string;
  width?: "fixed" | "full";
  disabled?: boolean;
}

export default React.memo(function Btn({
  bg = "white",
  text,
  width = "fixed",
  disabled = false,
}: CtaBtn) {
  return (
    <button
      className={`cta-btn P_xs-phone P_xs-laptop ${
        width === "fixed" ? " min-w-[250px] max-w-[350px]" : ""
      } ${
        bg === "red"
          ? "brand-gradient !border-[#FC3A79] text-white hover:scale-105"
          : ""
      } ${
        disabled ? "bg-black text-white !cursor-no-drop" : "hover:border-black"
      }`}
    >
      {text || "Got a Project in Mind? Let’s talk"}
    </button>
  );
});
