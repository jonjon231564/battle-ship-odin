const { Ship, Gameboard } = require("./main");

let ship = new Ship(8);

test("Ship constructor", () => {
    expect(ship).toEqual({
        length: 8,
        hits: 0,
        sunk: false,
        
    });
});

test("Ship.hit", () => {
    ship.hit();
    expect(ship).toEqual({
        length: 8,
        hits: 1,
        sunk: false,
        
    });
});

test("Ship.hit", () => {
    expect(ship.isSunk()).toEqual(false);
});

let gameboard = new Gameboard();

test("gameboard.placeShips()", () => {
    gameboard.placeShips()
    let x = 0
    for(let i = 0; i < 10; i++) {
        gameboard.gameboard[i].reduce(coordinate => typeof coordinate === 'string')
        x += gameboard.gameboard[i].length
    }
    expect(x).toEqual(17);
});
