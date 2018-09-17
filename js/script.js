let button = document.getElementById("buttonStart");
button.innerHTML = "Погнали!";

function startGame() {
    button.onclick = function() {
        if (button.innerHTML === "Погнали!") {
            button.innerHTML = "СТОП!";
            button.style.background = "indianred";
            let start = setInterval(randomAuto, 2000);
        }
        else {
            button.innerHTML = "Погнали!";
            button.style.background = "yellowgreen";
            clearInterval(randomAuto);
        }
    };


    function randomAuto() {
        let color = Math.floor(Math.random() * 8);
        let colors = ['red', 'green', 'blue', 'yellow', 'aquamarine', 'yellowgreen', 'rebeccapurple', 'dodgerblue']; // Поработать над цветами и сделать их хотябы 10
        let automobile = document.getElementsByClassName("automobile");

        let lineSelect = Math.floor(Math.random() * 4);
        automobile[lineSelect].style.backgroundColor = colors[color];
        automobile[lineSelect].style.display = "block";
        // let line = document.getElementsByClassName("line" + lineSelect);



        let time = setInterval(moveAutoLR, 10);
        // let time2 = setInterval(moveAutoRL, 10);
        let positionL = -28;
        // let positionR = 194;
            function moveAutoLR() {
                if (positionL >= 194) {
                    clearInterval(time);
                }
                else {
                    positionL += 1;
                    automobile[lineSelect].style.left = positionL + "px";
                }
            }
    }




};


// function moveAutoRL() {
//     if (positionR <= 0) {
//         clearInterval(time2);
//     }
//     else {
//         positionL -= 1;
//         automobile.style.left = positionL + "px";
//     }
// }


// let createAuto = document.createElement("div");
// createAuro.className = "automobile";







// В будующем сделать полицейскую машину!
// Возможность выбирать видимость дороги. По умолчанию стоит 194px