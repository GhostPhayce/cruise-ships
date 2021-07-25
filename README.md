[![Contributors][contributors-shield]][contributors-url]
[![Forks][forks-shield]][forks-url]
[![Stargazers][stars-shield]][stars-url]
[![Issues][issues-shield]][issues-url]
[![LinkedIn][linkedin-shield]][linkedin-url]

<br />
<p align="center">
  <h1 style="text-transform: uppercase;">Cruise Ships</h1>
</p>

<details open="open">
  <summary><h2 style="display: inline-block">Table of Contents</h2></summary>
  <ol>
    <li>
      <a href="#about-the-project">About The Project</a>
    </li>
    <li>
      <a href="#getting-started">Getting Started</a>
      <ul>
        <li><a href="#install">Install</a></li>
        <li><a href="#create-a-pet">Create a port, itinerary and ship</a></li>
      </ul>
    </li>
    <li>
      <a href="#available-functions">Available functions!</a>
    </li>
  </ol>
</details>
<br />

## About The Project
This was created as part of an introduction to JavaScript as part of a bootcamp with Manchester Codes. 
<br />
<br />

## Getting Started

### Install
  ```
  npm install
  ```
### Create a port, itinerary and ship
1. Open your terminal and enter Node REPL
    ```
    node
    ```
2. Import the ship, port and itinerary constructors
    ```
    .load src/ship.js
    .load src/port.js
    .load src/itinerary.js
    ```
3. Create new ports
    ```
    const junon = new Port("Junon")
    const costaDelSol = new Port("Costa del Sol")
    const midgar = new Port("Midgar")
    ```

4. Create a new itinerary
    ```
    const itinerary = new Itinerary([junon, costaDelSol, midgar])
    ```

4. Create a new ship
    ```
    const highwind = new Ship("Highwind", itinerary)
    ```

## Available functions!
* set sail to the next port on your itinerary
    ```
    highwind.setSail()
    ```
* dock at your destination port
    ```
    highwind.dock()
    ```


<!-- MARKDOWN LINKS & IMAGES -->
[contributors-shield]: https://img.shields.io/github/contributors/GhostPhayce/cruise-ships.svg?style=for-the-badge
[contributors-url]: https://github.com/GhostPhayce/cruise-ships/graphs/contributors
[forks-shield]: https://img.shields.io/github/forks/GhostPhayce/cruise-ships.svg?style=for-the-badge
[forks-url]: https://github.com/GhostPhayce/cruise-ships/network/members
[stars-shield]: https://img.shields.io/github/stars/GhostPhayce/cruise-ships.svg?style=for-the-badge
[stars-url]: https://github.com/GhostPhayce/cruise-ships/stargazers
[issues-shield]: https://img.shields.io/github/issues/GhostPhayce/cruise-ships.svg?style=for-the-badge
[issues-url]: https://github.com/GhostPhayce/cruise-ships/issues
[license-shield]: https://img.shields.io/github/license/GhostPhayce/cruise-ships.svg?style=for-the-badge
[license-url]: https://github.com/GhostPhayce/cruise-ships/blob/master/LICENSE.txt
[linkedin-shield]: https://img.shields.io/badge/-LinkedIn-black.svg?style=for-the-badge&logo=linkedin&colorB=555
[linkedin-url]: https://www.linkedin.com/in/thomas-ramsden-95894013b