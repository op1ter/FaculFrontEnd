//Transicao de paginas
function direcionarRelatorio() {
  window.location.href = '/relatorio/relatorio.html';
}

function direcionarHabita() {
  window.location.href = '../index.html';
}

//REGISTRAR DADOS
let linhaEditando = null; // ← PRIMEIRO

//BOTÁO VER TODOS

// Obtém o modal
let modalContact = document.getElementById("modal-contato");
let btnContact = document.getElementById("btnVerTodos");
let spanContact = document.getElementsByClassName("close2")[0];

// Função para abrir o modal
function openModal2() {
  modalContact.style.display = "block";
}

// Função para fechar o modal
function closeModal2() {
  modalContact.style.display = "none";
}

// Adiciona os event listeners somente se os elementos existirem
if (modalContact && btnContact && spanContact) {
  btnContact.addEventListener("click", openModal2);
  spanContact.addEventListener("click", closeModal2);

  // Fecha o modal se o usuário clicar fora da área do conteúdo
  window.addEventListener("click", function (event) {
    if (event.target === modalContact) {
      closeModal2();
    }
  });
}

//REGISTRAR DADOS

// ============================
// SCRIPT PARA index.html
// ============================

const registrosLocalStorageKey = 'registros';

function getRegistrosLocalStorage() {
  const registrosJSON = localStorage.getItem(registrosLocalStorageKey);
  return registrosJSON ? JSON.parse(registrosJSON) : [];
}

function salvarRegistrosLocalStorage(registros) {
  localStorage.setItem(registrosLocalStorageKey, JSON.stringify(registros));
}

function adicionarRegistro() {
  const nome = document.getElementById("nomeContato").value.trim();
  const email = document.getElementById("emailContato").value.trim();
  const telefone = document.getElementById("telefoneContato").value.trim();

  if (!nome || !email || !telefone) {
    alert("Preencha todos os campos!");
    return;
  }

  const registros = getRegistrosLocalStorage();
  registros.push({ nome, email, telefone });
  salvarRegistrosLocalStorage(registros);

  alert("Registro salvo com sucesso!");

  // Limpa os campos
  document.getElementById("nomeContato").value = "";
  document.getElementById("emailContato").value = "";
  document.getElementById("telefoneContato").value = "";
}


// ============================
// SCRIPT PARA relatorio.html
// ============================

function carregarTabela() {
  const registros = getRegistrosLocalStorage();
  const corpoTabela = document.querySelector("#tabelaRegistrosContato tbody");
  corpoTabela.innerHTML = "";

  registros.forEach((registro, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${registro.nome}</td>
      <td>${registro.email}</td>
      <td>${registro.telefone}</td>
      <td>
        <button class="botao-editar" onclick="editarRegistro(${index})">Editar</button>
        <button class="botao-excluir" onclick="excluirRegistro(${index})">Excluir</button>
      </td>
    `;

    corpoTabela.appendChild(linha);
  });
}

function editarRegistro(index) {
  const registros = getRegistrosLocalStorage();
  const registro = registros[index];

  const novoNome = prompt("Editar Nome:", registro.nome);
  const novoEmail = prompt("Editar Email:", registro.email);
  const novoTelefone = prompt("Editar Telefone:", registro.telefone);

  if (novoNome && novoEmail && novoTelefone) {
    registros[index] = {
      nome: novoNome,
      email: novoEmail,
      telefone: novoTelefone
    };
    salvarRegistrosLocalStorage(registros);
    carregarTabela();
  }
}

function excluirRegistro(index) {
  if (confirm("Deseja excluir este registro?")) {
    const registros = getRegistrosLocalStorage();
    registros.splice(index, 1);
    salvarRegistrosLocalStorage(registros);
    carregarTabela();
  }
}

// ---------------------------------------------------------------------
// Referências aos elementos do modal
let modal = document.getElementById("myModal");
let openButton = document.getElementById("openModal");
let closeButton = document.getElementsByClassName("close")[0];

// Função para abrir o modal
function openModal() {
  modal.style.display = "block";
}

// Função para fechar o modal
function closeModal() {
  modal.style.display = "none";
}

// Adiciona os event listeners somente se os elementos existirem
if (modal && openButton && closeButton) {
  openButton.addEventListener("click", openModal);
  closeButton.addEventListener("click", closeModal);

  // Fecha o modal se o usuário clicar fora da área do conteúdo
  window.addEventListener("click", function (event) {
    if (event.target === modal) {
      closeModal();
    }
  });
}

// ============================
// FORMULÁRIO DE IMÓVEIS - index.html
// ============================

const registrosImoveisKey = 'registrosImoveis';

function getRegistrosImoveisLocalStorage() {
  const registrosJSON = localStorage.getItem(registrosImoveisKey);
  return registrosJSON ? JSON.parse(registrosJSON) : [];
}

function salvarRegistrosImoveisLocalStorage(registros) {
  localStorage.setItem(registrosImoveisKey, JSON.stringify(registros));
}

function adicionarRegistroImovel() {
  const tipo = document.getElementById("tipo").value;
  const finalidade = document.getElementById("finalidade").value;
  const cep = document.getElementById("cep").value.trim();
  const endereco = document.getElementById("endereco").value.trim();
  const numero = document.getElementById("numero").value.trim();
  const bairro = document.getElementById("bairro").value.trim();
  const cidade = document.getElementById("cidade").value.trim();
  const estado = document.getElementById("estado").value.trim();
  const descricao = document.getElementById("descricao").value.trim();
  const nome = document.getElementById("nome").value.trim();
  const telefone = document.getElementById("telefone").value.trim();
  const email = document.getElementById("email").value.trim();

  if (!tipo || !finalidade || !cep || !endereco || !numero || !bairro || !cidade || !estado || !descricao || !nome || !telefone || !email) {
    alert("Preencha todos os campos!");
    return;
  }

  const registros = getRegistrosImoveisLocalStorage();

  registros.push({ tipo, finalidade, cep, endereco, numero, bairro, cidade, estado, descricao, nome, telefone, email });
  salvarRegistrosImoveisLocalStorage(registros);
  alert("Imóvel registrado com sucesso!");

  // Limpa os campos
  document.getElementById("tipo").value = "";
  document.getElementById("finalidade").value = "";
  document.getElementById("cep").value = "";
  document.getElementById("endereco").value = "";
  document.getElementById("numero").value = "";
  document.getElementById("bairro").value = "";
  document.getElementById("cidade").value = "";
  document.getElementById("estado").value = "";
  document.getElementById("descricao").value = "";
  document.getElementById("nome").value = "";
  document.getElementById("telefone").value = "";
  document.getElementById("email").value = "";
}

// ============================
// SCRIPT PARA relatorio.html
// ============================

function carregarTabelaImoveis() {
  const registros = getRegistrosImoveisLocalStorage();
  const corpoTabela = document.querySelector("#tabelaRegistrosImoveis tbody");
  corpoTabela.innerHTML = "";

  registros.forEach((registro, index) => {
    const linha = document.createElement("tr");

    linha.innerHTML = `
      <td>${registro.tipo}</td>
      <td>${registro.finalidade}</td>
      <td>${registro.endereco}, ${registro.numero} - ${registro.bairro}, ${registro.cidade} - ${registro.estado}</td>
      <td>${registro.descricao}</td>
      <td>${registro.nome}</td>
      <td>${registro.telefone}</td>
      <td>${registro.email}</td>
      <td>
        <button class="botao-editar" onclick="editarRegistroImovel(${index})">Editar</button>
        <button class="botao-excluir" onclick="excluirRegistroImovel(${index})">Excluir</button>
      </td>
    `;

    corpoTabela.appendChild(linha);
  });
}

function editarRegistroImovel(index) {
  const registros = getRegistrosImoveisLocalStorage();
  const registroNovo = registros[index];

  const novoDescricao = prompt("Editar descrição:", registroNovo.descricao);
  const novoPropietario = prompt("Editar Proprietario:", registroNovo.nome);
  const novoTelefone = prompt("Editar telefone:", registroNovo.telefone);
  const novoEmail = prompt("Editar email:", registroNovo.email);

  if (novoDescricao && novoPropietario && novoTelefone && novoEmail) {
    registros[index].descricao = novoDescricao;
    registros[index].nome = novoPropietario;
    registros[index].telefone = novoTelefone;
    registros[index].email = novoEmail;
    salvarRegistrosImoveisLocalStorage(registros);
    carregarTabelaImoveis();
  }
}

function excluirRegistroImovel(index) {
  if (confirm("Deseja excluir este registro de imóvel?")) {
    const registros = getRegistrosImoveisLocalStorage();
    registros.splice(index, 1);
    salvarRegistrosImoveisLocalStorage(registros);
    carregarTabelaImoveis();
  }
}

if (window.location.pathname.includes("relatorio.html")) {
  window.onload = function () {
    carregarTabela();
    carregarTabelaImoveis();
  };
}

// Preenchimento automático de endereço com base no CEP digitado
document.getElementById("cep").addEventListener("blur", async () => {
  const cep = document.getElementById("cep").value.replace(/\D/g, "");// Remove caracteres não numéricos

  if (cep.length !== 8) {
    alert("CEP inválido. Deve conter 8 dígitos numéricos.");
    return;
  }

  try {
    // Faz requisição à API ViaCEP
    const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
    const data = await response.json();

    if (data.erro) {
      alert("CEP não encontrado.");
      return;
    }

    // Preenche os campos do formulário com os dados retornados
    document.getElementById("endereco").value = data.logradouro || "";
    document.getElementById("bairro").value = data.bairro || "";
    document.getElementById("cidade").value = data.localidade || "";
    document.getElementById("estado").value = data.uf || "";

  } catch (error) {
    alert("Erro ao buscar o endereço. Tente novamente.");
    console.error(error);
  }
});





// Botão para subir topo da pagina
const scrollBtn = document.getElementById("btnScrollTop");

// Mostra/esconde o botão ao rolar a página
window.addEventListener("scroll", function () {
  scrollBtn.classList.toggle("active", window.scrollY > 250);
});

// Volta ao topo suavemente
scrollBtn.addEventListener("click", function () {
  window.scrollTo({
    top: 0,
    behavior: "smooth"
  });
});