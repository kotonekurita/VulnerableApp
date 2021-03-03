window.addEventListener("DOMContentLoaded", () => {
	const iframe = document.getElementById("csrf-iframe");
  const form = iframe.contentWindow.document.querySelector('#csrf-form');
  form.submit()
})
