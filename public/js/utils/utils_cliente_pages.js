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

function verificarLogin() {
    const status = localStorage.getItem('isLoggedIn');

    const btn_entrar = document.getElementById('btn_entrar');
    const btn_cadastrar = document.getElementById('btn_cadastrar');
    const btn_config = document.getElementById('btn_perfil');

    const section_home_servicos = document.getElementById('section_home_servicos');
    const section_proximos_atendimentos = document.getElementById('section_proximos_atendimentos');
    const section_marina_points = document.getElementById('section_marina_points');

    if (status == 1) {
        btn_config.style.display = 'flex';
        section_proximos_atendimentos.style.display = 'flex';
        section_marina_points.style.display = 'flex';
    } else {
        btn_entrar.style.display = 'flex';
        btn_cadastrar.style.display = 'flex';
        section_home_servicos.style.display = 'flex';
    }
}

// export {
//     navegar,
//     formatarNomeInput,
//     validarSenha,
//     abrirPopUp,
//     formatarCPFInput,
//     verificarLogin
// };