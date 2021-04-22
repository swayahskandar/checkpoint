let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)
// let sp = document.getElementsByClassName('sp');
// console.log(sp)

for (let el of btnPlus) {
    el.addEventListener('click', function () {
        el.nextElementSibling.nextElementSibling.value++
        // let val = document.getElementsByClassName('inc').value
        // console.log(val)
        // somme(val, sp)
        sum()
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

// function somme(x, y) {
//     console.log(x * y)
// }
// console.log(somme(val, sp))
// // let val = document.getElementById('inc').value
// //             console.log(val)

// console.log(val)

function sum(){
    let prices = document.getElementsByClassName('sp');
    console.log(prices[1].innerHTML)
    let qte = document.getElementsByClassName('inc');
    console.log(qte[1].value)


    let s = 0 

    for (let i=0 ; i<prices.length;i++){
   s+= prices[i].innerHTML * qte[i].value
   console.log(s)
    }

    return document.getElementById('t').innerHTML = s
    

}

console.log(sum())
