// // Obtém o modal
// var modal = document.getElementById("myModal");

// // Obtém o botão que abre o modal
// var btn = document.getElementById("openModal");

// // Obtém o elemento <span> que fecha o modal
// var span = document.getElementsByClassName("close")[0];

// // Quando o usuário clica no botão, abre o modal
// btn.onclick = function() {
//     modal.style.display = "block";
// }

// // Quando o usuário clica no <span> (x), fecha o modal
// span.onclick = function() {
//     modal.style.display = "none";
// }

// // Quando o usuário clica em qualquer lugar fora do modal, fecha o modal
// window.onclick = function(event) {
//     if (event.target == modal) {
//         modal.style.display = "none";
//     }
// }

// function mostrarMensagem(event) {
//     event.preventDefault(); // Impede o envio do formulário
//     alert("Formulário enviado com sucesso!");
//     modal.style.display = "none";
// }

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
        event.preventDefault();
        alert("Formulário enviado com sucesso!");
        closeModal();
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

    const form = document.getElementById("contactForm");
    if (form) {
        form.addEventListener("submit", handleFormSubmit);
    }
});
