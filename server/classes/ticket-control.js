const fs = require('fs');

class TicketControl {

    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let { ultimo, hoy } = require('../data/data.json');

        if (hoy === this.hoy) {
            this.ultimo = ultimo;
        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {
        this.ultimo = 0;

        grabarInformacion();

        return `Ticket ${this.ultimo}`;
    }

    siguiente() {
        this.ultimo += 1;

        grabarInformacion();
    }

    grabarInformacion() {
        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        }

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync("./server/data/data.json", jsonDataString);
    }

}


module.exports = TicketControl;