import "./style.css";

const email = document.querySelector("#email");
const senha = document.querySelector("#senha");
const botao = document.querySelector("button");

botao.addEventListener("click", function (e) {
  const emailErro = document.querySelector("#email-erro");
  const senhaErro = document.querySelector("#senha-erro");

  emailErro.textContent = '';
  senhaErro.textContent = '';

  if (email.value == "") {
    emailErro.textContent = "Email é obrigatória";

    if (senha.value == "") {
        senhaErro.textContent = "Senha é obrigatória";
        return;
      }

    return;
  }

  if (senha.value == "") {
        senhaErro.textContent = "Senha é obrigatória";
        return;
      }

  if (senha.value.length < 8) {
    senhaErro.textContent = "Senha deve ter no mínimo 8 caracteres";
    return;
  }

  else {
    window.location.href = "/index.html"
  }
});