window.addEventListener("DOMContentLoaded", () => {
  console.log("ok")
	const csrf_iframe = document.getElementById("csrf-iframe");
  console.log(csrf_iframe)
  const form = csrf_iframe.contentWindow.document.querySelector('#csrf-form');
  console.log(form)
  form.submit()
})