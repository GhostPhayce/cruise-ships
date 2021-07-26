const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

describe("Ship", () => {
    let highwind, junon, costaDelSol, midgar, itinerary;
    beforeEach(() => {
        junon = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            portName: 'Junon',
            ships: []
        };
        
        costaDelSol = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            portName: 'Costa del Sol',
            ships: []
        };

        midgar = {
            addShip: jest.fn(),
            removeShip: jest.fn(),
            portName: 'Midgar',
            ships: []
        };

        itinerary = {
            ports: [junon, costaDelSol, midgar]
        };

        highwind = new Ship("Highwind", itinerary);
    });

    it("can be instantiated", () => {
        expect(highwind).toBeInstanceOf(Object);
    });

    it("gets added to a port on instantiation", () => {
        expect(junon.addShip).toHaveBeenCalledWith(highwind);
    });

    it("checks a startingPort has been assigned", () => {
        expect(highwind.startingPort).toEqual(junon);
    });

    it("checks previousPort is set to null", () => {
        expect(highwind.previousPort).toEqual(null);
    });

    it("returns an error if arguments are not passed", () => {
        expect(() => new Ship()).toThrow(Error);
    });

    it("returns an error if the name is not a string", () => {
        expect(() => new Ship(highwind, itinerary)).toThrow(Error);
    });

    it("returns an error if the itinerary is not an object", () => {
        expect(() => new Ship("highwind", "itinerary")).toThrow(Error);
    });

    it("setSail() and gets the ship started on its journey", () => {
        highwind.setSail();
        expect(highwind.currentPort).toBeFalsy();
    });

    it("expects the ship to be removed from the previous port after setSail()", () => {
        highwind.setSail();
        expect(junon.removeShip).toHaveBeenCalledWith(highwind);
    })

    it("returns an error if you try and setSail() when you have reached the end of the itinerary", () => {
        highwind.setSail();
        highwind.dock();
        highwind.setSail();
        highwind.dock();
        expect(() => highwind.setSail()).toThrow(Error);
    });

    it("dock() the ship at a port and adds it to the ports array", () => {
        highwind.setSail();
        highwind.dock();
        expect(highwind.currentPort).toBeTruthy();
        expect(costaDelSol.addShip).toHaveBeenCalledWith(highwind);
    });

    it("returns an error if you try and setSail() at sea", () => {
        highwind.setSail();
        expect(() => highwind.setSail()).toThrow(Error);
    });

    it("returns an error if you try and dock() when not at sea", () => {
        highwind.setSail()
        highwind.dock();
        expect(() => highwind.dock()).toThrow(Error);
    });
});