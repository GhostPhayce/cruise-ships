const Port = require ('../src/port')

describe("constructor", () => {
    let junon;
    beforeEach(() => {
        junon = new Port("Junon");
    });

    it("returns an object", () => {
        expect(junon).toBeInstanceOf(Object);
    });

    it("checks the port has a name", () => {
        expect(junon.portName).toBe("Junon");
    });
});