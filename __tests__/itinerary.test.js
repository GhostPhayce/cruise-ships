const Itinerary = require ('../src/itinerary');

describe("Itinerary", () => {
    let junon, costaDelSol, itinerary;
    beforeEach(() => {
        junon = jest.fn();
        costaDelSol = jest.fn();
        itinerary = new Itinerary([junon, costaDelSol]);
    });

    it("returns an object", () => {
        expect(itinerary).toBeInstanceOf(Object);
    });

    it("has a ports property", () => {
        expect(itinerary.ports).toEqual([junon, costaDelSol]);
    })
});