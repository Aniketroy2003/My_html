// document.getElementById("counter").innerText = 5

// let counter = 3;
// console.log(counter)

// let human = 19
// let my_dog = 3
// console.log(human*my_dog)


let counterButton = document.getElementById("counter")
let counter = 0
function increament(){
    counter += 1;
    // console.log(counter)
    counterButton.innerText = counter

}