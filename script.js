import { Player, Gameboard, Ship } from "./main.js";

document.addEventListener("DOMContentLoaded", function () {
    function refractorPlayerOne() {
        let playerOne = new Gameboard("Jon", "human");
        let playerOneGameboard = document.getElementById('player-one-gameboard')
        let title = document.createElement('h1')
        playerOneGameboard.appendChild(title)
        title.textContent = 'Player 1 Board'
        let squareId = [0, 0]
        playerOne.gameboard.forEach((rowData) => {
            // Create a div for the row
            const row = document.createElement("div");
            row.classList.add("row");

            rowData.forEach((cellData) => {
                // Create a div for each square
                const square = document.createElement("div");
                square.classList.add("square");
                square.id = squareId
                square.textContent = cellData;
                square.addEventListener('click', () => {
                    let attackReturn = playerOne.receiveAttack(square.id)
                    if(attackReturn == 'miss') {
                        square.textContent = ''
                        square.style.backgroundColor = 'white'
                        setTimeout(() => {
                            playerOneGameboard.style.display = 'none'
                            document.getElementById('player-two-gameboard').style.display = 'block'
                        }, 100);
                    } else if(attackReturn == 'hit') {
                        
                        square.style.backgroundColor = 'red'
                        
                        
                    } else if(attackReturn == 'game over') {
                        square.textContent = ''
                        square.style.backgroundColor = 'red'
                        let gameOver = document.createElement('h1')
                        gameOver.textContent = 'GAME OVER PLAYER 2 WINS'
                        playerOneGameboard.appendChild(gameOver)
                    }

                })
                
                squareId[1]++
                // Append the square to the row
                row.appendChild(square);
                
            });
            squareId[0]++
            squareId[1] = 0
            // Append the row to the gameboard
            playerOneGameboard.appendChild(row);
        });

        const refractorPlayerOneButton = document.createElement("button");
        refractorPlayerOneButton.id = "refractor-player-one";
        refractorPlayerOneButton.textContent = "Refractor";
        playerOneGameboard.appendChild(refractorPlayerOneButton);
        refractorPlayerOneButton.addEventListener('click', ()=> {
            playerOneGameboard.innerHTML = ''
            refractorPlayerOne()
        })

        const playerOneHide = document.createElement('button')
        playerOneHide.id = 'player-one-hide'
        playerOneHide.textContent = 'hide'
        playerOneGameboard.appendChild(playerOneHide)
        playerOneHide.addEventListener('click', () => {
            playerOneGameboard.style.color = 'blue'
            refractorPlayerOneButton.remove()
            playerOneHide.remove()
        })
    }

    function refractorPlayerTwo() {
        let playerTwo = new Gameboard("Bob", "computer");
        let playerTwoGameboard = document.getElementById('player-two-gameboard')
        let title = document.createElement('h1')
        playerTwoGameboard.appendChild(title)
        title.textContent = 'Player 2 Board'
        let squareId = [0, 0]
        playerTwo.gameboard.forEach((rowData) => {
            // Create a div for the row
            const row = document.createElement("div");
            row.classList.add("row");

            rowData.forEach((cellData) => {
                // Create a div for each square
                const square = document.createElement("div");
                square.classList.add("square");
                square.textContent = cellData;
                square.id = squareId
                square.addEventListener('click', () => {
                    let attackReturn = playerTwo.receiveAttack(square.id)
                    if(attackReturn == 'miss') {
                        square.textContent = ''
                        square.style.backgroundColor = 'white'
                        setTimeout(() => {
                            playerTwoGameboard.style.display = 'none'
                            document.getElementById('player-one-gameboard').style.display = 'block'
                        }, 100);
                    } else if(attackReturn == 'hit') {
                        
                        square.style.backgroundColor = 'red'
                        
                    } else if(attackReturn == 'game over') {
                        
                        square.style.backgroundColor = 'red'
                        

                        let gameOver = document.createElement('h1')
                        gameOver.textContent = 'GAME OVER PlAYER 1 WINS'
                        playerTwoGameboard.appendChild(gameOver)
                    }

                })
                squareId[1]++

                // Append the square to the row
                row.appendChild(square);
            });

            squareId[0]++
            squareId[1] = 0
            // Append the row to the gameboard
            playerTwoGameboard.appendChild(row);
        });

        const refractorPlayerTwoButton = document.createElement("button");
        refractorPlayerTwoButton.id = "refractor-player-two";
        refractorPlayerTwoButton.textContent = "Refractor";
        playerTwoGameboard.appendChild(refractorPlayerTwoButton);
        refractorPlayerTwoButton.addEventListener('click', ()=> {
            playerTwoGameboard.innerHTML = ''
            refractorPlayerTwo()
        })

        const playerTwoHide = document.createElement('button')
        playerTwoHide.id = 'player-two-hide'
        playerTwoHide.textContent = 'hide'
        playerTwoGameboard.appendChild(playerTwoHide)
        playerTwoHide.addEventListener('click', () => {
            playerTwoGameboard.style.color = 'blue'
            refractorPlayerTwoButton.remove()
            playerTwoHide.remove()
        })
    }
    

    refractorPlayerOne()
    refractorPlayerTwo()
});
