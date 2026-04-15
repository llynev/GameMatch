let jogoSelecionado = "";

function reservar(jogo) {
    jogoSelecionado = jogo;
    document.getElementById("formulario").style.display = "block";
}

function confirmar() {
    const nome = document.getElementById("nome").value;
    const hora = document.getElementById("hora").value;

    if (nome === "" || hora === "") {
        alert("Preencha tudo!");
        return;
    }

    alert(`Reserva confirmada!\n${nome} reservou ${jogoSelecionado} às ${hora}`);
}