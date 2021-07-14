const Ship = require('../src/ship');

describe("constructor", () => {
    it("returns an object", () => {
        expect(new Ship("Serenity", "Dover")).toBeInstanceOf(Object);
    });

    it("sets the name and startingPort property", () => {
        expect(new Ship("Serenity", "Dover")).toEqual({"name": "Serenity", "startingPort": "Dover"});
    });

    it("checks a starting port has been assigned", () => {
        const ship = new Ship("Serenity", "Dover");
        expect(ship.startingPort).toBe("Dover");
    })

    it("returns an error if arguments are not passed", () => {
        expect(() => new Ship()).toThrow("Please name the ship and the starting port.");
    });
});