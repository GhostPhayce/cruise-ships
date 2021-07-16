class Ship {
    constructor(name, startingPort) {
        if (name === undefined || startingPort === undefined) {
            throw new Error("Please give the ship a name and a starting port.")
        } else {
            this.shipName = name;
            this.startingPort = startingPort;
        }
    }

    setSail(destinationPort) {
        if (destinationPort === undefined) {
            throw new Error("Please provide a destination port.")
        } else {
            this.destinationPort = destinationPort;
            return `${this.shipName} has departed from ${this.startingPort} for ${this.destinationPort}.`
        }
    }

    dock(currentPort) {
        if (currentPort === undefined) {
            throw new Error("Please provide the name of the port you wish to dock at.")
        } else {
            this.currentPort = currentPort;
            this.destinationPort = null;
            return `${this.shipName} has docked at ${this.currentPort}.`
        }
    }
};

module.exports = Ship;