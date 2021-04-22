let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)

for (let el of btnPlus) {
    el.addEventListener('click', function () {
        el.nextElementSibling.nextElementSibling.value++
       um()
    })
}


let btnMoins = document.getElementsByClassName("decr")
console.log(btnMoins)

for (let el of btnMoins) {
    el.addEventListener('click', function () {
        if (el.nextElementSibling.value > 0) {
            el.nextElementSibling.value--
            sum()
        }
    })
}

function sum(){
    let prices = document.getElementsByClassName('sp');
    console.log(prices[1].innerHTML)
    let qte = document.getElementsByClassName('inc');
    console.log(qte[1].value)


    let s = 0 
    let m = 0
    for (let i=0 ; i<prices.length;i++){
   s+= prices[i].innerHTML * qte[i].value
   m-=prices[i].innerHTML * qte[i].value
  let pr=s+m
   console.log(pr)
    }

    return document.getElementById('t').innerHTML = pr
    

}

// console.log(sum())
