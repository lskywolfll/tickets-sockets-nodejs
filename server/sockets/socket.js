const { io } = require('../server');
const TicketControl = require('../classes/ticket-control');

const ticketControl = new TicketControl();

io.on('connection', (client) => {

    client.on("siguienteTicket", (data, callback) => {
        let ticket = ticketControl.siguiente()
        callback(ticket);
    })

    client.emit("estadoActual", {
        actual: ticketControl.getUltimoTicket(),
        ultimos4: ticketControl.getUltimos4()
    })

    client.on("atenderTicket", ({ escritorio }, callback) => {

        if (!escritorio) {
            return callback({
                err: true,
                message: "El escritorio es necesario"
            })
        }

        let atenderTicket = ticketControl.atenderTicket(escritorio);

        callback(atenderTicket);

        client.broadcast.emit("ultimos4", ticketControl.getUltimos4());
    })



});