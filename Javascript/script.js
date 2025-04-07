// Aguarda o carregamento completo do DOM antes de executar qualquer código
// Isso garante que os elementos HTML estejam disponíveis para manipulação
// DOMContentLoaded garante que o JS só roda após o HTML estar pronto

document.addEventListener("DOMContentLoaded", function () {
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

  // Lida com o envio do formulário
  function handleFormSubmit(event) {
    event.preventDefault(); // impede o recarregamento da página
    alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
    event.target.reset(); // limpa os campos do formulário
    closeModal(); // fecha o modal
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

  // Evento de envio do formulário
  const form = document.getElementById("propertyForm");
  if (form) {
    form.addEventListener("submit", handleFormSubmit);
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

  const form2 = document.getElementById("propertyForm2");
  if (form2) {
    form2.addEventListener("submit", handleFormSubmit);
  }

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
});
