class Port {
    constructor(name) {
        if (name === undefined || typeof name !== "string") {
            throw new Error("Please provide a name for the port.")
        }
        this.portName = name;
        this.ships = [];
    }

    addShip(ship) {
        this.ships.push(ship);
    }

    removeShip(ship) {
        const removeShip = this.ships.indexOf(ship);
        this.ships.splice(removeShip, 1);
    }
}

module.exports = Port;