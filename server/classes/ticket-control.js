const fs = require('fs');

class TicketControl {

    constructor() {
        this.ultimo = 0;
        this.hoy = new Date().getDate();

        let { ultimo, hoy } = require('../data/data.json');

        if (hoy === this.hoy) {

        } else {
            this.reiniciarConteo();
        }
    }

    reiniciarConteo() {

        let jsonData = {
            ultimo: this.ultimo,
            hoy: this.hoy
        }

        let jsonDataString = JSON.stringify(jsonData);

        fs.writeFileSync("./server/data/data.json", jsonDataString);

        console.log("Se ha inicializado el sistema")
    }

}


module.exports = TicketControl;