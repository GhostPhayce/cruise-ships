const Ship = require('../src/ship');
const Port = require('../src/port');

describe("constructor", () => {
    let highwind;
    beforeEach(() => {
        highwind = new Ship("Highwind", "Junon");
    });

    it("returns an object", () => {
        expect(highwind).toBeInstanceOf(Object);
    });

    it("sets the name and startingPort property", () => {
        expect(highwind).toEqual({"shipName": "Highwind", "startingPort": "Junon"});
    });

    it("checks a starting port has been assigned", () => {
        expect(highwind.startingPort).toBe("Junon");
    });

    it("returns an error if arguments are not passed", () => {
        expect(() => new Ship()).toThrow(Error);
    });
});

describe("setSail", () => {
    let highwind;
    let port;
    beforeEach(() => {
        highwind = new Ship("Highwind", "Junon");
        port = new Port("Costa del Sol");
    });

    it("gets the ship started on its journey", () => {
        expect(highwind.setSail("Costa del Sol")).toBe("Highwind has departed from Junon for Costa del Sol.");
    });
});

describe("dock", () => {
    let highwind;
    let port;
    beforeEach(() => {
        highwind = new Ship("Highwind", "Junon");
        port = new Port("Costa del Sol");
    });

    it("docks the ship at the named port", () => {
        expect(highwind.dock("Costa del Sol")).toBe("Highwind has docked at Costa del Sol.");
    });

    it("returns an error if arguments are not passed", () => {
        expect(() => highwind.dock()).toThrow(Error);
    });

    it("expects destinationPort to be falsy after setSail() is executed", () => {
        expect(highwind.dock("Costa del Sol").destinationPort).toBeFalsy();
    });
})