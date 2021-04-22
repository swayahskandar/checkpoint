let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)

function quantity(){
for (let el of btnPlus) {
    el.addEventListener('click', function () {
      return  (el.nextElementSibling.nextElementSibling.value++)
    })
}}

let btnMoins = document.getElementsByClassName("decr")
console.log(btnMoins)

for (let el of btnMoins) {
    el.addEventListener('click', function () {
        if (el.nextElementSibling.value > 0) {
            el.nextElementSibling.value--
        }
    })
}

let val=quantity();
let sp= document.getElementById('sp').innerHTML;
let spp=parseInt(sp)
console.log(val)
console.log(spp)

function somme(x,y){
    return x*y
}
console.log(somme(quantity() ,spp))

// return(x)


