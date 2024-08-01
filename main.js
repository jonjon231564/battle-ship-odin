function isArray(value) {
    return Array.isArray(value);
}

class Ship {
    constructor(length, type, hits = 0, sunk = false) {
        this.length = length;
        this.type = type;
        this.hits = hits;
        this.sunk = sunk;
    }
    hit() {
        this.hits++;
    }
    isSunk() {
        if (this.hits === this.length) {
            return true;
        } else {
            return false;
        }
    }
}

class Gameboard {
    constructor() {
        this.gameboard = [
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
            [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
        ];
        this.ships = [
            new Ship(5, "ca"),
            new Ship(4, "ba"),
            new Ship(3, "cr"),
            new Ship(3, "su"),
            new Ship(2, "de"),
        ];
        this.placeShips()
    }
    placeShips(shipObject) {
        // for loop for each ship
        for(let i = 0; i < this.ships.length; i++) {
            let array = []
            let arrayQueue = []
            // while loop that is completed once a ship placement is valid
            while(true) {
                let a = Math.floor(Math.random() * 10)
                let b = Math.floor(Math.random() * 10)
                let randomDirection = Math.floor(Math.random() * 2)

                arrayQueue = []
                // for loop that is for each coordinate array of the ship placement
                for(let j = 0; j < this.ships[i].length; j++) {
                    if(a > 9 || b > 9) {
                        break
                    }
                    // if else that makes sure the coordinate is valid
                    if(this.gameboard[a][b] === 0) {
                        arrayQueue[j] = [a, b]
                        if (randomDirection == 0) {
                            a++
                        } else {
                            b++
                        }
                    } else {
                        break
                    }
                }
                if(arrayQueue.length == this.ships[i].length) {
                    break
                }
            }
            array = [...arrayQueue]
            // placing the ship
            for(let x = 0; x < array.length; x++) {
                this.gameboard[array[x][0]][array[x][1]] = this.ships[i].type
            }
        }
        
    }
    receiveAttack(coordinates) {
        let x = coordinates[0]
        let y = coordinates[1]
        // checks to see whether or not the coordinate is a ship 
        // or not and proceeds to change the coordinates to two if 
        // it is a hit or 1 if it is a miss
        if(this.gameboard[x][y] === 0) {
            this.gameboard[x][y] = 1
        } else {
            for(let i = 0; i < this.ships.length; i++) {
                if(this.ships[i].type == this.gameboard[x][y]) {
                    this.ships[i].hit()
                    this.gameboard[x][y] = 2
                }
            }
        }
        // checks to see if all the ships are sunk
        let a = 0
        for(let i = 0; i < this.ships.length; i++) {
            if(this.ships[i].isSunk()) {
                a++
            }
            if(a === 5) {
                return 'game over'
            }
        }
        
    }
}

class Player{

}

const gameboard = new Gameboard();
gameboard.receiveAttack([5, 5])
console.log(gameboard)


module.exports = { Ship, Gameboard };
