particlesJS("particles-js", {
    "particles":{
        "number":{
            "value": 180,
            "density":{
                "enable":true,
                "value_area":800
                }
            },
"color":{"value":"#FFE15D"},

"shape":{
    "type":["star", "image"],
    "stroke":{
    "width": 0,
    "color":"#000000"
},
"polygon":{
    "nb_sides": 5
},
"image":{
    "src":"pumpkin.png",
    "width":100,
    "height":100
}
},

"opacity":{
    "value": 0.7,
    "random": false,
    "anim":{
        "enable":false,
        "speed":1,
        "opacity_min":0.1,
        "sync":false
    }
},
"size":{
    "value": 7,
    "random":true,
    "anim":{
        "enable":false,
        "speed":40,
        "size_min":0.1,
        "sync":false
    }
},
"line_linked":{
    "enable":false,
    "distance":500,
    "color":"#ffffff",
    "opacity":0.4,
    "width":2
},
"move":{
    "enable":true,
    "speed":1.5,
    "direction":"bottom",
    "random":true,
    "straight":false,
    "out_mode":"out",
    "bounce":false,
    "attract":{
        "enable":false,
        "rotateX":300,
        "rotateY":1200
    }
}
},
"interactivity":{
    "detect_on":"canvas",
    "events":{
        "onhover":{
            "enable": false,
            "mode":"bubble"
        },
"onclick":{
    "enable":false,
    "mode":"repulse"
},
"resize":true
},
"modes":{
    "grab":{
        "distance":150,
        "line_linked":{
            "opacity":1
        }
    },
"bubble":{
    "distance":200,
    "size":40,
    "duration":2,
    "opacity":8,
    "speed":3
},
"repulse":{
    "distance":200,
    "duration":0.4
},
"push":{
    "particles_nb":4
},
"remove":{
    "particles_nb":2
}
}
},
"retina_detect":true
});

gsap.from('h3', {duration: 3,  y: -100, opacity: 0, delay: 1.5, ease: 'back'})
gsap.from('.text', {opacity: 0, duration: 3.8, delay: 2.5, stagger: 0.6})
gsap.from('h2', {duration: 3,  y: 100, opacity: 0, delay: 3.8, ease: 'back'})
gsap.from('#btn', {rotation: 360, duration: 4, opacity: 0, delay: 3.5})

const butten = document.querySelector('#btn');
const par = document.querySelector('#par');

const quotes = [
    "Ваші надії та плани здійсняться понад усі очікування.",
    "Незабаром прийде важлива звістка.",
    "У Ваше життя увійде щось нове, що суттєво вплине на Вашу особистість.",
    "Темрява не вічна.",
    "Уважно придивіться до свого оточення: хтось може підвести Вас у вирішальний момент.",
    "Ви – на вірному шляху!",
    "Вам, нарешті, вдасться відімкнути іржавий замок.",
    "Те, чого Ви прагнете, не варте ваших зусиль.",
    "Результати справи, яку ви задумали, дуже розчарують вас.",
    "Успіх прийде, якщо ви не будете слухати нічиї поради.",
    "Темрява, в якій Ви жили й досі, розсіялася.",
    "Проблема не там, де вам здається.",
    "Затримка, яка гальмує процес, буде короткочасною.",
    "Ви отримаєте цікаву пропозицію, якa з великою ймовірністю обіцяє прибуток.",
    "У справах вам допоможуть старі друзі – приділіть їм особливу увагу.",
    "Давно розпочаті справи прийдуть до завершення у вигляді вигідної угоди.",
    "Не поспішайте діяти – почніть із роздумів.",
    "Ваші дії можуть спричинити несподіваний результат.",
    "Щоб виграти у великому, треба втратити у малому.",
    "Вам віддадуть старий борг.",
    "Саме час вирушати у подорож.",
    "Ви почуєте саме ті слова, які очікуєте почути.",
    "Зустріч, на яку ви так очікуєте, відбудеться.",
    "Ви придбаєте бажане, і ціна за нього буде навіть меншою, ніж ви розраховували.",
    "Все завжди приходить свого часу, і скоро ви в цьому переконаєтесь."
]
butten.addEventListener('click', function() {
    let randomQuote = quotes[Math.floor(Math.random() * quotes.length)];
    par.style.display = "block";
    par.textContent = randomQuote;
    document.querySelector('#myAudio').play();
})

