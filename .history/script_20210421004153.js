let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)

for (let el of btnPlus) {
    el.addEventListener('click', function () {
        el.nextElementSibling.nextElementSibling.value++
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

let val=document.getElementById('inc').innerHTML;
let sp= document.getElementById('sp').innerHTML;
let spp=parseInt.apply(sp)
console.log(val)
console.log(spp)

function somme(x){
    var x=val*sp;
}
console.log(x)
// return(x)


