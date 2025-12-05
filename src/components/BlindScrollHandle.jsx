export function BlindScrollHandle() {
  const handleClick = () => {
    window.scrollBy({
      top: -window.innerHeight * 0.6,
      behavior: "smooth",
    });
  };

  return (
    <button
      onClick={handleClick}
      aria-label="blind-scroll-up"
      className="
        fixed left-0 top-1/2 -translate-y-1/2 z-[9999]
        w-12 h-32
        opacity-0
        bg-transparent
        active:bg-transparent
        focus:outline-none
        pointer-events-auto
      "
      style={{
        touchAction: "none",
      }}
    />
  );
}
