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
});
