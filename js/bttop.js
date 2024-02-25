const backToTopButton = document.querySelector("#back-to-top-button");

const timeout = (ms) => {
  return new Promise(resolve => setTimeout(resolve, ms));
}

const backToTop = async () => {
  const doc = document.querySelector("html");
  let position = doc.scrollTop;

  for (let i = 1000; i > 0; i--) {
    window.scrollTo(0, position * (i / 1000));

    if (i > 900) {
      await timeout(10);
    } else if (i > 700) {
      await timeout(1);
      i -= 2;
    } else {
      await timeout(1);
      i -= 5;
    }
  }
  window.scrollTo(0, 0);
}

window.addEventListener("scroll", () => {
  const doc = document.querySelector("html");
  console.log(doc.scrollTop);
  if (doc.scrollTop > 600) {
    // backToTopButton.style.setProperty('display', 'none');
    backToTopButton.classList.add("back-to-top-block");
  } else {
    backToTopButton.classList.remove("back-to-top-blockuiuiui");
  }
})

backToTopButton.addEventListener("click", backToTop);

