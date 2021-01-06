const fs = require('fs');

class Ticket {

    constructor(numero, escritorio) {
        this.numero = numero;
        this.escritorio = escritorio;
    }



}

class TicketControl {

    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();
        this.tickets = [];

        let { ultimo, hoy, tickets } = require('../data/data.json');

        if (hoy === this.hoy) {
            this.ultimo = ultimo;
            this.tickets = tickets
        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {
        this.ultimo = 0;
        this.tickets = [];

        this.grabarInformacion();
    }

    siguiente() {
        this.ultimo += 1;

        let ticket = new Ticket(this.ultimo, null);

        this.tickets.push(ticket);

        this.grabarInformacion();

        return `Ticket ${this.ultimo}`;
    }

    getUltimoTicket() {
        return `Ticket ${this.ultimo}`;
    }

    grabarInformacion() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy,
            tickets: this.tickets
        }

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync("./server/data/data.json", jsonDataString);
    }

}


module.exports = TicketControl;