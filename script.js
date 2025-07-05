let lightmode = localStorage.getItem("lightmode");
const themeswitch = document.getElementById("theme");

const enableLightMode = () => {
  document.body.classList.add("lightmode");
  localStorage.setItem("lightmode", "active");
};

const disableLightMode = () => {
  document.body.classList.remove("lightmode");
  localStorage.setItem("lightmode", null);
};
if (lightmode === "active") enableLightMode

themeswitch.addEventListener("click", () => {
    lightmode = localStorage.getItem("lightmode");
  if (lightmode !== "active") {
        enableLightMode();
  } else {
        disableLightMode();
  }
})
