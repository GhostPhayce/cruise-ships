const Ship = require('../src/ship');

describe("constructor", () => {
    let ship;
    beforeEach(() => {
        ship = new Ship("Serenity", "Dover");
    })

    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("sets the name and startingPort property", () => {
        expect(ship).toEqual({"name": "Serenity", "startingPort": "Dover"});
    });

    it("checks a starting port has been assigned", () => {
        expect(ship.startingPort).toBe("Dover");
    })

    it("returns an error if arguments are not passed", () => {
        expect(() => new Ship()).toThrow("Please name the ship and the starting port.");
    });
});