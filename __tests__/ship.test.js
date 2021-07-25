const Ship = require('../src/ship');
const Port = require('../src/port');

describe("constructor", () => {
    let highwind;
    let junon;
    beforeEach(() => {
        junon = new Port("Junon");
        highwind = new Ship("Highwind", junon);
    });

    it("returns an object", () => {
        expect(highwind).toBeInstanceOf(Object);
    });

    it("checks a startingPort has been assigned", () => {
        expect(highwind.startingPort).toEqual(junon);
    });

    it("returns an error if arguments are not passed", () => {
        expect(() => new Ship()).toThrow(Error);
    });

    it("returns an error if the name is not a string", () => {
        expect(() => new Ship(highwind, junon)).toThrow(Error);
    });

    it("returns an error if the port is not an object", () => {
        expect(() => new Ship("highwind", "junon")).toThrow(Error);
    });
});

describe("setSail", () => {
    let highwind;
    let junon;
    let costaDelSol;
    beforeEach(() => {
        junon = new Port("Junon");
        costaDelSol = new Port("Costa del Sol");
        highwind = new Ship("Highwind", junon);
    });

    it("gets the ship started on its journey", () => {
        expect(highwind.setSail(costaDelSol)).toBe("Highwind has departed from Junon for Costa del Sol.");
    });

    it("returns an error if the port is not an object", () => {
        expect(() => highwind.setSail("costaDelSol")).toThrow(Error);
    });
});

describe("dock", () => {
    let highwind;
    let junon;
    let costaDelSol;
    beforeEach(() => {
        junon = new Port("Junon");
        costaDelSol = new Port("Costa del Sol");
        highwind = new Ship("Highwind", junon);
    });

    it("docks the ship at the named port", () => {
        expect(highwind.dock(costaDelSol)).toBe("Highwind has docked at Costa del Sol.");
    });

    it("returns an error if arguments are not passed", () => {
        expect(() => highwind.dock()).toThrow(Error);
    });

    it("returns an error if port is not an object", () => {
        expect(() => highwind.dock("costaDelSol")).toThrow(Error);
    });

    it("expects destinationPort to be falsy after setSail() is executed", () => {
        expect(highwind.dock(costaDelSol).destinationPort).toBeFalsy();
    });
});