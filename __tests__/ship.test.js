const Ship = require('../src/ship');
const Port = require('../src/port');
const Itinerary = require('../src/itinerary');

// describe("Ship", () => {
    // let highwind, junon, costaDelSol, midgar, itinerary;
    // beforeEach(() => {
    //     junon = new Port("Junon");
    //     costaDelSol = new Port("Costa del Sol");
    //     midgar = new Port("Midgar");
    //     itinerary = new Itinerary([junon, costaDelSol, midgar]);
    //     highwind = new Ship("Highwind", itinerary);
    // });

//     it("can be instantiated", () => {
//         expect(highwind).toBeInstanceOf(Object);
//     });

//     xit("checks a startingPort has been assigned", () => {
//         expect(highwind.startingPort).toEqual(junon);
//     });

//     it("checks previousPort is set to null", () => {
//         expect(highwind.previousPort).toEqual(null);
//     });

//     xit("returns an error if arguments are not passed", () => {
//         expect(() => new Ship()).toThrow(Error);
//     });

//     xit("returns an error if the name is not a string", () => {
//         expect(() => new Ship(highwind, itinerary)).toThrow(Error);
//     });

//     xit("returns an error if the itinerary is not an object", () => {
//         expect(() => new Ship("highwind", "itinerary")).toThrow(Error);
//     });
// });

describe("setSail", () => {
    let highwind, junon, costaDelSol, midgar, itinerary;
    beforeEach(() => {
        junon = new Port("Junon");
        costaDelSol = new Port("Costa del Sol");
        midgar = new Port("Midgar");
        itinerary = new Itinerary([junon, costaDelSol, midgar]);
        highwind = new Ship("Highwind", itinerary);
    });

    it("gets the ship started on its journey", () => {
        highwind.setSail();
        expect(highwind.currentPort).toBeFalsy();
    });

    it("returns an error if you try and setSail() when you have reached the end of the itinerary", () => {
        highwind.setSail();
        highwind.dock();
        highwind.setSail();
        highwind.dock();
        expect(() => highwind.setSail()).toThrow(Error);
    });
});

describe("dock", () => {
    let highwind, junon, costaDelSol, midgar, itinerary;
    beforeEach(() => {
        junon = new Port("Junon");
        costaDelSol = new Port("Costa del Sol");
        midgar = new Port("Midgar");
        itinerary = new Itinerary([junon, costaDelSol, midgar]);
        highwind = new Ship("Highwind", itinerary);
    });

    it("docks the ship at a port", () => {
        highwind.setSail();
        highwind.dock();
        expect(highwind.currentPort).toBe(costaDelSol);
    });

    // xit("returns an error if port is not an object", () => {
    //     expect(() => highwind.dock("costaDelSol")).toThrow(Error);
    // });
});