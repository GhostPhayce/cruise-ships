const Ship = require('../src/ship');

describe("constructor", () => {
    let ship;
    beforeEach(() => {
        ship = new Ship("Highwind", "Junon");
    });

    it("returns an object", () => {
        expect(ship).toBeInstanceOf(Object);
    });

    it("sets the name and startingPort property", () => {
        expect(ship).toEqual({"name": "Highwind", "startingPort": "Junon"});
    });

    it("checks a starting port has been assigned", () => {
        expect(ship.startingPort).toBe("Junon");
    });

    it("returns an error if arguments are not passed", () => {
        expect(() => new Ship()).toThrow(Error);
    });
});

describe("setSail", () => {
    let ship;
    beforeEach(() => {
        ship = new Ship("Highwind", "Junon");
    });

    it("gets the ship started on its journey", () => {
        expect(ship.setSail()).toBe("Highwind has departed from Junon.");
    });

    it("expects startingPoint to be falsy after setSail() is executed", () => {
        expect(ship.startingPort).toBeFalsy();
    });
});