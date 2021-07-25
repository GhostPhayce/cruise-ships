class Ship {
    constructor(name, itinerary) {
        // if (name === undefined || typeof name !== "string" || itinerary === undefined || typeof itinerary !== "object") {
        //     throw new Error("Please give the ship a name (string) and an itinerary (object).")
        // }
        this.shipName = name;
        this.itinerary = itinerary;
        this.startingPort = itinerary.ports[0];
        this.currentPort = itinerary.ports[0];
        this.previousPort = null;
        this.currentPort.addShip(this);
    }

    setSail() {
        const itinerary = this.itinerary;
        const currentPortIndex = itinerary.ports.indexOf(this.currentPort);

        if (currentPortIndex === itinerary.ports.length - 1) {
            throw new Error("End of itinerary reached.");
          }
        this.previousPort = this.currentPort;
        this.currentPort = null;
        this.previousPort.removeShip(this);
        // return `${this.shipName} has departed from ${this.previousPort.portName} for ${this.itinerary.ports[this.nextPort].portName}.`

    }

    dock() {
        // if (port === undefined || typeof port !== "object") {
        //     throw new Error("The port must be an object and not undefined.")
        // }
        const itinerary = this.itinerary;
        const previousPortIndex = itinerary.ports.indexOf(this.previousPort);
        this.currentPort = itinerary.ports[previousPortIndex + 1];
        this.currentPort.addShip(this);
        // return `${this.shipName} has docked at ${this.currentPort.portName}.`
    }
};

module.exports = Ship;