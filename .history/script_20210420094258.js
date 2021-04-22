let btnPlus = document.getElementsByClassName("incr")
console.log(btnPlus)

for(let el of btnPlus){
    el.addEventListener('click', function(){
        el.nextElementSibling.nextElementSibling.value++
    })
}