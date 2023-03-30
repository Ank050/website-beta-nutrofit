let activeIndex = 0;

const groups = document.getElementsByClassName("card-group");
const handleRightClick = () => {
  const nextIndex = activeIndex + 1 <= groups.length - 1 ? activeIndex + 1 : 0;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "after";
  hideText();

  nextGroup.dataset.status = "becoming-active-from-before";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

const handleLeftClick = () => {
  const nextIndex = activeIndex - 1 >= 0 ? activeIndex - 1 : groups.length - 1;

  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    nextGroup = document.querySelector(`[data-index="${nextIndex}"]`);

  currentGroup.dataset.status = "before";
  hideText();

  nextGroup.dataset.status = "becoming-active-from-after";

  setTimeout(() => {
    nextGroup.dataset.status = "active";
    activeIndex = nextIndex;
  });
};

function hideText() {
  const infoDivs = document.querySelectorAll(".mydiv");
  infoDivs.forEach((div) => (div.style.display = "none"));
}

const moreInfo = () => {
  const currentGroup = document.querySelector(`[data-index="${activeIndex}"]`),
    currentStatus = currentGroup.dataset.status,
    infoBox = document.querySelector(`.mydiv[data-index="${activeIndex}"]`);

  if (currentStatus === "active") {
    if (infoBox.classList.contains("active-info")) {
      infoBox.classList.remove("active-info");
      setTimeout(() => {
        infoBox.style.display = "none";
      }, 300);
    } else {
      infoBox.style.display = "block";
      setTimeout(() => {
        infoBox.classList.add("active-info");
      }, 50);
    }
  }
};
