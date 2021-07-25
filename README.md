# Cruise Ships

.load src/ship.js
.load src/port.js
.load src/itinerary.js
const junon = new Port("Junon")
const costaDelSol = new Port("Costa del Sol")
const midgar = new Port("Midgar")
const itinerary = new Itinerary([junon, costaDelSol, midgar])
const highwind = new Ship("Highwind", itinerary)

highwind.setSail()

highwind.dock()