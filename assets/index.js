const form = document.getElementById("form");
const dropDownColor = document.getElementById("colors");
const hex = document.getElementById("inputColor");

function gettingColor() {
  let hexReplace = hex.value.replace("#", "");
  fetch(
    `https://www.thecolorapi.com/scheme?hex=${hexReplace}&mode=${dropDownColor.value}&count=6`
  )
    .then((response) => response.json())
    .then((data) => {
      let colors = [];
      for (let i = 0; i <= 5; i++) {
        colors.push(data.colors[i].hex.value);
      }

      for (let i = 1; i < colors.length; i++) {
        document.querySelector(`.color${i}`).style.background = colors[i];
        document.querySelector(`.colorCode${i}`).textContent = colors[i];
      }
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("color1")) {
          navigator.clipboard.writeText(colors[1]);
        } else if (e.target.classList.contains("colorCode1")) {
          navigator.clipboard.writeText(colors[1]);
        } else if (e.target.classList.contains("color2")) {
          navigator.clipboard.writeText(colors[2]);
        } else if (e.target.classList.contains("colorCode2")) {
          navigator.clipboard.writeText(colors[2]);
        } else if (e.target.classList.contains("color3")) {
          navigator.clipboard.writeText(colors[3]);
        } else if (e.target.classList.contains("colorCode3")) {
          navigator.clipboard.writeText(colors[3]);
        } else if (e.target.classList.contains("color4")) {
          navigator.clipboard.writeText(colors[4]);
        } else if (e.target.classList.contains("colorCode4")) {
          navigator.clipboard.writeText(colors[4]);
        } else if (e.target.classList.contains("color5")) {
          navigator.clipboard.writeText(colors[5]);
        } else if (e.target.classList.contains("colorCode5")) {
          navigator.clipboard.writeText(colors[5]);
        }
      });
    });
}
gettingColor();
form.addEventListener("submit", (e) => {
  e.preventDefault();
  gettingColor();
});
