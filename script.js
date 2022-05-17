const form  = document.querySelector('#form');

function emailIsValid(email) {
  let res = /(?:[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*|"(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21\x23-\x5b\x5d-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])*")@(?:(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?|\[(?:(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.){3}(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?|[a-z0-9-]*[a-z0-9]:(?:[\x01-\x08\x0b\x0c\x0e-\x1f\x21-\x5a\x53-\x7f]|\\[\x01-\x09\x0b\x0c\x0e-\x7f])+)\])/;
  return res.test(email);
}

form.addEventListener("submit", (e) => {
  const email = document.querySelector("#email").value;

    if(emailIsValid(email)) {
      document.querySelector(".error-message").style.display = 'none';

      document.querySelector("input").style.cssText = "border = '1px solid var(--Pale_Blue)'; outline = 'none';"

      document.querySelector("input").addEventListener("focus", (e) => {
        e.target.style.outline = '1px solid var(--Blue)';
      });

      document.querySelector("input").value = "";

      alert("Email valid");

      e.preventDefault();
      return (true)
    } else {
        document.querySelector(".error-message").style.display = 'block';

        document.querySelector("input").style.border = '1px solid var(--Light_Red)';
        
        document.querySelector("input").addEventListener("focus", (e) => {
          e.target.style.outline = '1px solid var(--Light_Red)';
        });
        
        e.preventDefault();
        return (false)
    }
}, false);