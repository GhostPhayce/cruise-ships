class Ship {
    constructor(name, itinerary) {
        if (name === undefined || typeof name !== "string" || itinerary === undefined || typeof itinerary !== "object") {
            throw new Error("Please give the ship a name (string) and an itinerary (object).")
        }
        this.shipName = name;
        this.itinerary = itinerary;
        this.startingPort = itinerary.ports[0];
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
        this.atSea = false;
    }

    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === itinerary.ports.length - 1) {
            throw new Error("End of itinerary reached.");
        }
        if (this.atSea === true) {
            throw new Error(`${this.shipName} is already at sea.`)
        }
        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.destination = itinerary.ports[currentPortIndex + 1];
        this.previousPort.removeShip(this);
        this.atSea = true;
        return `${this.shipName} has departed from ${this.previousPort.portName} for ${this.destination.portName}.`

    }

    dock() {
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        if (this.atSea === false) {
            throw new Error(`${this.shipName} is already docked.`)
        }
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
        this.atSea = false;
        return `${this.shipName} has docked at ${this.currentPort.portName}.`
    }
};

module.exports = Ship;