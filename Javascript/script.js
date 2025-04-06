document.addEventListener("DOMContentLoaded", function () {
    let modal = document.getElementById("myModal");
    let openButton = document.getElementById("openModal");
    let closeButton = document.getElementsByClassName("close")[0];

    function openModal() {
        modal.style.display = "block";
    }

    function closeModal() {
        modal.style.display = "none";
    }

    function handleFormSubmit(event) {
        event.preventDefault(); // impede o recarregamento da página
        alert("Formulário enviado com sucesso! Entraremos em contato em breve.");
        event.target.reset(); // limpa os campos do formulário
        closeModal(); // fecha o modal
    }

    if (modal && openButton && closeButton) {
        openButton.addEventListener("click", openModal);
        closeButton.addEventListener("click", closeModal);

        window.addEventListener("click", function (event) {
            if (event.target === modal) {
                closeModal();
            }
        });
    }

    const form = document.getElementById("propertyForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }

    // Preencher endereço automaticamente via API ViaCEP
    document.getElementById("cep").addEventListener("blur", async () => {
        const cep = document.getElementById("cep").value.replace(/\D/g, "");
  
        if (cep.length !== 8) {
          alert("CEP inválido. Deve conter 8 dígitos numéricos.");
          return;
        }
  
        try {
          const response = await fetch(`https://viacep.com.br/ws/${cep}/json/`);
          const data = await response.json();
  
          if (data.erro) {
            alert("CEP não encontrado.");
            return;
          }
  
          document.getElementById("endereco").value = data.logradouro || "";
          document.getElementById("bairro").value = data.bairro || "";
          document.getElementById("cidade").value = data.localidade || "";
          document.getElementById("estado").value = data.uf || "";
  
        } catch (error) {
          alert("Erro ao buscar o endereço. Tente novamente.");
          console.error(error);
        }
      });
});
