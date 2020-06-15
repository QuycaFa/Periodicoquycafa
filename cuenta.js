simplyCountdown('#cuentaAtras', {
    year: 2020, // required
    month: 6, // required
    day: 11, // required
    hours: 17, // Default is 0 [0-23] integer 17 = 22
    minutes: 0, // Default is 0 [0-59] integer
    seconds: 0, // Default is 0 [0-59] integer
    words: { //words displayed into the countdown
        days: 'Día',
        hours: 'Hora',
        minutes: 'Minuto',
        seconds: 'Segundo',
        pluralLetter: 's'
    },
    plural: true, //use plurals
    inline: false, //set to true to get an inline basic countdown like : 24 days, 4 hours, 2 minutes, 5 seconds
    inlineClass: 'simply-countdown-inline', //inline css span class in case of inline = true
    // in case of inline set to false
    enableUtc: true, //Use UTC as default
    onEnd: function() {
        document.getElementById("portada").classList.add("ocultar") 
        return; 
    }, //Callback on countdown end, put your own function here
    refresh: 1000, // default refresh every 1s
    sectionClass: 'simply-section', //section css class
    amountClass: 'simply-amount', // amount css class
    wordClass: 'simply-word', // word css class
    zeroPad: false,
    countUp: false
});

let paraOcultar1 = document.getElementById("oculto1");
let paraOcultar2 = document.getElementById("oculto2");
let paraOcultar3 = document.getElementById("oculto3");
let paraOcultar4 = document.getElementById("oculto4");
let paraOcultar5 = document.getElementById("b1");
let paraOcultar6 = document.getElementById("b2");
let paraOcultar7 = document.getElementById("oculto5");


function mostrar() {
    paraOcultar1.classList.toggle("w3-hide");
    paraOcultar2.classList.toggle("w3-hide");
    paraOcultar3.classList.toggle("w3-hide");
    paraOcultar4.classList.toggle("w3-hide");
    paraOcultar5.classList.toggle("w3-show");
    paraOcultar6.classList.toggle("w3-hide");
}

function contenido() {
    paraOcultar7.classList.toggle("w3-hide");
}