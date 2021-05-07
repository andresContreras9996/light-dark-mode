const toggleSwitch = document.querySelector('input[type="checkbox"]');

//Switch Theme dynamically
function switchTheme(event) {
  //console.log(event.target.checked);
  if (event.target.checked) {
    document.documentElement.setAttribute("data-theme", "dark");
    localStorage.setItem("theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
    localStorage.setItem("theme", "light");
  }
}

//Event listener
toggleSwitch.addEventListener("change", switchTheme);
//Check localstorage for theme
const currentTheme = localStorage.getItem("theme");

if (currentTheme) {
  document.documentElement.setAttribute("data-theme", currentTheme);
  if (currentTheme === "dark") {
    toggleSwitch.checked = true;
  } else {
    toggleSwitch.checked = false;
  }
} else {
  document.documentElement.setAttribute("data-theme", "light");
}
