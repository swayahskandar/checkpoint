let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)


for (let el of btnPlus) {
    el.addEventListener('click', function () {
      el.nextElementSibling.nextElementSibling.value++
      let val=document.getElementById('inc').value
      console.log(val)

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

let val=document.getElementById('inc').value;
let sp= document.getElementById('sp').innerHTML;
let spp=parseInt(sp)
console.log(spp)

function somme(x,y){
    return x*y
}
console.log(somme(val ,spp))

// return(x)


