const alertBox = document.querySelector(".alert-box");
const submitBtn = document.querySelector("#submit");
submitBtn.addEventListener("click", getAlertText);

// get alert content
function getAlertText() {
  let alertTextInput = document.querySelector("#text-input").value;
  document.querySelector("#text-input").value = "";

  createAlert(alertTextInput);
}

//show an alert on page
function createAlert(text) {
  const div = document.createElement("div");
  let innerAlertHtml = `
  <span class="closebtn" onclick="removeAlert()">&times;</span>
  <span>${text}</span>
  `;
  div.innerHTML = innerAlertHtml;
  div.className = "alert";
  alertBox.appendChild(div);

  fadeOut(div);
}

//remove alert from page
function fadeOut(elem) {
  setTimeout(() => {
    elem.remove();
  }, 3000);
}
