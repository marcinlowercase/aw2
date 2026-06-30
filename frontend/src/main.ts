import "./style.css";

document.addEventListener("DOMContentLoaded", () => {
  const logoImages = document.querySelectorAll(
    "#logo img",
  ) as NodeListOf<HTMLImageElement>;

  if (logoImages.length > 0) {
    let currentFrame = 0;
    const totalFrames = logoImages.length;
    const frameRateMs = 100; // Speed of the animation in milliseconds

    setInterval(() => {
      // Hide the current active frame
      logoImages[currentFrame].style.opacity = "0";

      // Advance to the next frame
      currentFrame = (currentFrame + 1) % totalFrames;

      // Make the next frame visible
      logoImages[currentFrame].style.opacity = "1";
    }, frameRateMs);
  }
});
