function listar() {

  let mensagem = "";


  fetch('http://localhost:3000/servicos')
    .then(function (resposta) {
      return resposta.json()
    })
    .then(function (dados) {

      const html = dados.map(dado => {


        let estrela = "";
        let estrelaQtd = Math.round(dado.mediaAvaliacao)

        // estrelas cheias
        for (let i = 1; i <= estrelaQtd; i++) {


          estrela += `<img src="../../assets/svg/icon_star_outline.svg" alt="star">`;

          if (estrelaQtd < 5 && i == estrelaQtd) {
            for (let ix = i; ix < 5; ix++) {
              estrela += `<img src="../../assets/svg/icon_star_filled.svg" alt="star">`;
            }
          }
        }

        return `
        <div class="catalogo_section_card shadow">
          <div class="catalogo_section_title">
            <p class="paragrafo-1 bold" style="color: var(--rosa-4);">${dado.nome}</p>
          </div>
          <div class="catalogo_section_conteudo">
            <p class="paragrafo-2">${dado.descricao}</p>
            <div class="catalogo_section_infos">
              
              <!-- COMPONENTE - ESTRELAS -->
              <div class="estrelas">
                ${estrela}
              </div>

              <div class="info">
                <img src="../../assets/vector/icon_horariio/ionicons/sharp/time-sharp.svg" alt="icon-horario">
                <p class="paragrafo-2">${dado.tempo}</p>
              </div>
              <div class="info">
                <img src="../../assets/vector/icon_dinheiro/ionicons/sharp/cash-sharp.svg" alt="icon-dinheiro">
                <p class="paragrafo-2">A partir de R$${dado.preco}</p>
              </div>
              <button class="btn-rosa" value="${dado.id}">
                <img src="../../assets/vector/icon_sum/jam-icons/outline & logos/Vector.svg" alt=" icon-sum">Agendar
              </button>
            </div>
          </div>
        </div>
        `
      }).forEach(dado => mensagem += dado);

      catalogo_section_lista.innerHTML = mensagem
    })
    .catch()


}



function cadastrarCliente(){

  const nome = document.getElementById("cadastro_form_nome").value;
  const email = document.getElementById("cadastro_form_email").value;
  const telefone = document.getElementById("cadastro_form_telefone").value;
  const senha = document.getElementById("cadastro_form_senha").value;
  const senhaConfirmar = document.getElementById("cadastro_form_confirmar").value;

  fetch("http://localhost:8080/usuarios/cadastro", {
    method: "POST",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ nome, email, senha, telefone })
  })
    .then(resposta => resposta.json())
    .then(

      loginComParametroPosCad(email, senha)

    )
    .catch(erro => {
      console.error("Erro no login:", erro);
    });

}

function loginComParametroPosCad(email, senha) {

  fetch("http://localhost:8080/usuarios/login", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  })
    .then(resposta => resposta.json())
    .then(dados => {
      if (dados) {

        sessionStorage.setItem("usuario", JSON.stringify(dados));
        localStorage.setItem('isLoggedIn', '1')
        window.location.href = "/public/html/adm_pages/calendario_visao_geral.html";

      } else {
        alert("E-mail ou senha inválidos.");
      }
    })
    .catch(erro => {
      console.error("Erro no login:", erro);
    });
}


function login() {
  const email = document.getElementById("email").value;
  const senha = document.getElementById("senha").value;

  fetch("http://localhost:8080/usuarios/login", {
    method: "PATCH",
    headers: {
      "Content-Type": "application/json"
    },
    body: JSON.stringify({ email, senha })
  })
    .then(resposta => resposta.json())
    .then(dados => {
      if (dados) {

        sessionStorage.setItem("usuario", JSON.stringify(dados));
        localStorage.setItem('isLoggedIn', '1')

        console.log("Usuário logado:", dados.nome);

      } else {
        alert("E-mail ou senha inválidos.");
      }
    })
    .catch(erro => {
      console.error("Erro no login:", erro);
    });
}

function logout() {

  const usuario = JSON.parse(sessionStorage.getItem("usuario"));

  console.log(usuario.id)


  fetch(`http://localhost:8080/usuarios/logoff/${usuario.id}`, {
    method: "PATCH"
  })
    .then(resposta => resposta.json())
    .then(dados => {
      console.log("Limpando console")
      sessionStorage.clear();

    })
    .catch(erro => {
      console.error("Erro no login:", erro);
    });


}