
window.addEventListener('input', colorChange, false)

function colorChange(){
    console.log('you clicked')
    // let b = prompt("enter your name: ")
    // document.getElementById('p').innerHtml=b
    // document.getElementById('ball').style.backgroundColor='red'
    var a = document.getElementById('colorValue').value
    // console.log(a)
    document.getElementById('ball').style.backgroundColor=event.target.value;
}
