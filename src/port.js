class Port {
    constructor(name) {
        if (name === undefined) {
            throw new Error("Please provide a name for the port.")
        } else {
            this.portName = name;
        }
    }
}

module.exports = Port;