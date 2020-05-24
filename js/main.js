var buttonChoice = document.querySelector(".choices");
var loading = document.querySelector(".loading");
var history = document.querySelector(".history");

/*history.addEventListener("click", function(event) {
    var targetEvent = event.target;
    targetEvent.classList.toggle("truncate");
    console.log("fuiclicado")
});*/

buttonChoice.addEventListener("click", function(event) {
    var targetEvent = event.target;
    var fatherTarget = targetEvent.parentNode;
    var human = fatherTarget.querySelector("h3").textContent;

    var machineValue = choiceMachine(1, 3);
    var machine = defining(machineValue);

    battle(human, machine);
    transition();

});

function choiceMachine(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

function defining(m) {
    var machine; 
    if (m == 1) machine = "Pedra";
    if (m == 2) machine = "Papel";
    if (m == 3) machine = "Tesoura";
    return machine;
}

function battle(h, m) {
    var result = validation(h,m)
    console.log(result)
}

function validation(h, m) {
    var result = 0;
    if (h == m) {
        console.log("Empate");
        result = 1;
        return result;
    }
    if (h == "Pedra" && m == "Tesoura") {
        console.log("Você venceu!")
        result = 2;
        return result;
    } else if (h == "Pedra" && m == "Papel") {
        console.log("Você perdeu!")
        result = 3;
        return result;
    }
    if (h == "Papel" && m == "Pedra") {
        console.log("Você venceu!")
        result = 2;
        return result;
    } else if (h == "Papel" && m == "Tesoura") {
        console.log("Você perdeu!")
        result = 3;
        return result;
    }
    if (h == "Tesoura" && m == "Papel") {
        console.log("Você venceu!")
        result = 2;
        return result;
    } else if (h == "Tesoura" && m == "Pedra") {
        console.log("Você perdeu!")
        result = 3;
        return result;
    }
}

function transition(){
    buttonChoice.classList.add("fadeOut");
    setTimeout(() => {
        buttonChoice.style.display = "none";
    }, 500);
    
    loading.style.display = "block";
    setTimeout(() => {
        loading.classList.toggle("fadeIn");
    }, 500)

    setTimeout(() => {
        loading.classList.toggle("fadeIn");
    }, 2000)

    setTimeout(() => {
    loading.style.display = "none";
    }, 2500)
}

