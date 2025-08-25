// Util - 1 - Redirecionar para página do botão.
function navegar(path) {
    window.location.href = path;
}

// Util - 2 - Formatar nome (Letra Maiúscula).
function formatarNomeInput(inputElement) {
  function nomeFormatado(value) {
    return value
      .trim()
      .replace(/\s+/g, " ")
      .split(" ")
      .map(word => word.charAt(0).toUpperCase() + word.slice(1).toLowerCase())
      .join(" ");
  }

  function formatarNome() {
    inputElement.value = nomeFormatado(inputElement.value);
  }

  inputElement.addEventListener("blur", handleFormat);
  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      formatarNome();
    }
  });
}

// Util - 3 - Validar confirmação de senha.
function validarSenha(senha1, senha2) {
    if (senha1 = senha2) {
        return 'As senhas coincidem.'
    } else {
        return 'As senhas não coincidem'
    }
}

// Util - 4 - Chamar Pop Up
function abrirPopUp(elemento1, elemento2) {
    elemento1.style.display = 'none';
    elemento2.style.display = 'block';
}

// Util - 5 - Formatar CPF
function formatarCPFInput(inputElement) {
  function formatarCPF(value) {
    const cpf = value.replace(/\D/g, "");
    
    if (cpf.length == 11) {
        return cpf;
    }
  }

  function formatar() {
    inputElement.value = formatarCPF(inputElement.value);
  }

  inputElement.addEventListener("blur", formatar);
  inputElement.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      formatar();
    }
  });
}