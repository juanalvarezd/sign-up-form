const d = document;

function validar() {
  const $inputs = d.querySelectorAll(".signup-component__form [required]");
  d.addEventListener("keyup", (e) => {
    $inputs.forEach((input) => {
      if (e.target === input) {
        if (input.value === "") {
          input.nextElementSibling.textContent = `${e.target.getAttribute(
            "placeholder"
          )} cannot be empty`;
          input.classList.add("form__input-error");
        } else {
          input.nextElementSibling.textContent = "";
          input.classList.remove("form__input-error");
        }
        
        if (input.id === "email") {
          const $pattern = input.getAttribute("pattern");
          let expReg = new RegExp($pattern);

          if (!expReg.test(input.value)) {
            input.nextElementSibling.textContent = `Looks like this is not an email`;
            input.classList.add("form__input-error");
          } else {
            input.nextElementSibling.textContent = "";
            input.classList.remove("form__input-error");
          }
        }
      }
    });
  });
}

d.addEventListener("DOMContentLoaded", (e) => {
  validar();
});
