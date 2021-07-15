class Ship {
    constructor(name, startingPort) {
        if (name === undefined || startingPort === undefined) {
            throw new Error("Please give the ship a name and a starting port.")
        } else {
            this.name = name;
            this.startingPort = startingPort;
        }
    }

    setSail() {
        return `${this.name} has departed from ${this.startingPort}.`
    }
};

module.exports = Ship;