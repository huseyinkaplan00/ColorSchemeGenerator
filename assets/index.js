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
      const mobileCode = document.querySelector(".mobileCode");
      const scroll = document.documentElement;
      mobileCode.textContent = colors[1];
      mobileCode.style.background = colors[1];
      window.addEventListener("scroll", () => {
        if (scroll.scrollTop > 2300) {
          mobileCode.textContent = colors[5];
          mobileCode.style.background = colors[5];
        } else if (scroll.scrollTop > 1550) {
          mobileCode.textContent = colors[4];
          mobileCode.style.background = colors[4];
        } else if (scroll.scrollTop > 800) {
          mobileCode.textContent = colors[3];
          mobileCode.style.background = colors[3];
        } else if (scroll.scrollTop > 50) {
          mobileCode.textContent = colors[2];
          mobileCode.style.background = colors[2];
        } else if (scroll.scrollTop >= 0) {
          mobileCode.textContent = colors[1];
          mobileCode.style.background = colors[1];
        }
      });

      for (let i = 1; i < colors.length; i++) {
        document.querySelector(`.color${i}`).style.background = colors[i];
        document.querySelector(`.colorCode${i}`).textContent = colors[i];
      }

      let contentCopied = `  <div class="copied">
      <p id="copiedText">🪄 <br />copied your <br /> HEX VALUE <br />🪄</p>
    </div>`;

      const copyClipboard = () => {
        for (let i = 1; i < colors.length; i++) {
          setTimeout(() => {
            document.querySelector(`.color${[i]}`).innerHTML = "";
          }, 1200);
        }
      };
      document.addEventListener("click", (e) => {
        if (e.target.classList.contains("color1")) {
          navigator.clipboard.writeText(colors[1]);
          document.querySelector(".color1").innerHTML = contentCopied;
          copyClipboard();
        } else if (e.target.classList.contains("colorCode1")) {
          navigator.clipboard.writeText(colors[1]);
        } else if (e.target.classList.contains("color2")) {
          navigator.clipboard.writeText(colors[2]);
          document.querySelector(".color2").innerHTML = contentCopied;
          copyClipboard();
        } else if (e.target.classList.contains("colorCode2")) {
          navigator.clipboard.writeText(colors[2]);
        } else if (e.target.classList.contains("color3")) {
          navigator.clipboard.writeText(colors[3]);
          document.querySelector(".color3").innerHTML = contentCopied;
          copyClipboard();
        } else if (e.target.classList.contains("colorCode3")) {
          navigator.clipboard.writeText(colors[3]);
        } else if (e.target.classList.contains("color4")) {
          navigator.clipboard.writeText(colors[4]);
          document.querySelector(".color4").innerHTML = contentCopied;
          copyClipboard();
        } else if (e.target.classList.contains("colorCode4")) {
          navigator.clipboard.writeText(colors[4]);
        } else if (e.target.classList.contains("color5")) {
          navigator.clipboard.writeText(colors[5]);
          document.querySelector(".color5").innerHTML = contentCopied;
          copyClipboard();
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
const fixedHeight = () => {
  const el = document.querySelector(".mainColors");
  el.style.minHeight = window.innerHeight + "px";
};
fixedHeight();
