var socket = io();

var searchParams = new URLSearchParams(window.location.search);
let estado = searchParams.has("escritorio");

if (!estado) {
    window.location = "index.html";
    throw new Error("El escritorio es necesario");
}

var escritorio = searchParams.get("escritorio");
var label = $("small");

console.log(escritorio)

$("h1").text(`Escritorio ${escritorio}`);

$("button").on("click", () => {

    socket.emit("atenderTicket", { escritorio }, (resp) => {

        if (resp === "No hay tickets") {
            alert(resp);
            label.text(resp)
            return;
        }

        label.text(resp.numero)

    })

})

// socket.on('connect', () => {
//     console.log("Conectado");
// })

// socket.on('disconnect', () => {
//     console.log("Desconectado")
// })