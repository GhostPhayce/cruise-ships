class Port {
    constructor(name) {
        if (name === undefined) {
            throw new Error("Please provide a name for the port.")
        }
        this.portName = name;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        const shipToRemove = this.ships.indexOf(ship);
        this.ships.splice(shipToRemove, 1);
    }
}

module.exports = Port;