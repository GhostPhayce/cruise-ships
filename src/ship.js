function Ship(name, startingPort) {
    if (name === undefined || startingPort === undefined) {
        throw new Error("Please name the ship and the starting port.")
    } else {
        this.name = name;
        this.startingPort = startingPort;
    }
}

module.exports = Ship;