class Ship {
    constructor(name, startingPort) {
        if (name === undefined || typeof name !== "string" || startingPort === undefined || typeof startingPort !== "object") {
            throw new Error("Please give the ship a name (string) and a starting port (object).")
        } else {
            this.shipName = name;
            this.startingPort = startingPort;
            this.currentPort = startingPort;
        }
    }

    setSail(destinationPort) {
        if (destinationPort === undefined || typeof destinationPort !== "object") {
            throw new Error("The destinationPort must be an object and not undefined.")
        } else {
            this.destinationPort = destinationPort;
            this.departedFrom = this.currentPort;
            this.currentPort = null;
            return `${this.shipName} has departed from ${this.departedFrom.portName} for ${this.destinationPort.portName}.`
        }
    }

    dock(port) {
        if (port === undefined || typeof port !== "object") {
            throw new Error("The port must be an object and not undefined.")
        } else {
            this.currentPort = port;
            this.destinationPort = null;
            return `${this.shipName} has docked at ${this.currentPort.portName}.`
        }
    }
};

module.exports = Ship;