import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function ScrollBtn() {
  const scrollByCard = (direction: "left" | "right") => {
    const container = document.getElementById("portfolio-scroll");
    const card = container?.querySelector(".my-work-portfolio") as HTMLElement;

    if (container && card) {
      const scrollAmount = card.offsetWidth + 32; // 32 = the space bn the children
      container.scrollBy({
        left: direction === "right" ? scrollAmount : -scrollAmount,
        behavior: "smooth",
      });
    }
  };
  return (
    <>
      <button
        data-testid="scroll-left-btn"
        onClick={() => scrollByCard("left")}
        className="left-2 scroll-btn"
      >
        <FaChevronLeft className="size-4 sm:size-5 xl:size-6" />
      </button>

      <button
        data-testid="scroll-right-btn"
        onClick={() => scrollByCard("right")}
        className="right-2 scroll-btn"
      >
        <FaChevronRight className="size-4 sm:size-5 xl:size-6" />
      </button>
    </>
  );
}
