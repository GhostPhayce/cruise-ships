const Port = require ('../src/port');

describe("Port", () => {
    let junon;
    beforeEach(() => {
        junon = new Port("Junon");
    });

    it("can be instantiated", () => {
        expect(junon).toBeInstanceOf(Object);
    });

    it("checks the port has a name", () => {
        expect(junon.portName).toBe("Junon");
    });

    it("adds a ship to the port", () => {
        const highwind = jest.fn();
        junon.addShip(highwind);
        expect(junon.ships).toContain(highwind);
    })

    it("removes a ship from the port", () => {
        const highwind = jest.fn();
        const explorer = jest.fn();
        const discovery = jest.fn();
        junon.addShip(highwind);
        junon.addShip(explorer);
        junon.addShip(discovery);
        junon.removeShip(explorer);
        expect(junon.ships).toEqual([highwind, discovery]);
    })

    it("returns an error if the name is undefined", () => {
        expect(() => new Port()).toThrow(Error);
    });

    it("returns an error if the name is not a string", () => {
        expect(() => new Port(junon)).toThrow(Error);
    });
});