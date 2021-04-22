let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)
let sp = document.getElementsByClassName('sp').innerHTML;


for (let el of btnPlus) {
    el.addEventListener('click', function () {
        el.nextElementSibling.nextElementSibling.value++
        let val = document.getElementsByClassName('inc').value
        console.log(val)
        somme(val, sp)
    })
}


let btnMoins = document.getElementsByClassName("decr")
console.log(btnMoins)

for (let el of btnMoins) {
    el.addEventListener('click', function () {
        if (el.nextElementSibling.value > 0) {
            el.nextElementSibling.value--
        }
    })
}

function somme(x, y) {
    console.log(x * y)
}
console.log(somme(val, sp))