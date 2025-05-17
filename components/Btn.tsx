export interface CtaBtn {
  bg?: string;
  text?: string;
  width?: string;
  disabled?: boolean;
}

export default function Btn({
  bg = "white",
  text,
  width = "fixed",
  disabled = false,
}: CtaBtn) {
  return (
    <button
      className={`cta-btn P_xs-phone P_xs-laptop ${width === "fixed" ? " min-w-[250px] max-w-[350px]" : ""} ${bg === "red" ? "brand-gradient !border-[#FC3A79] text-white hover:scale-105" : ""} ${disabled ? "bg-black text-white !cursor-no-drop" : "hover:border-black"}`}
    >
      {text || "Got a Project in Mind? Let’s talk"}
    </button>
  );
}
