/* h2 color set */
const heading2 = document.getElementsByTagName('h2');
for (const h2 of heading2) {
    h2.style.color = 'lightblue'
}


/* Backpack background color */
const backPack = document.getElementById('backpack')
backPack.style.backgroundColor = 'tomato'


/* card radius */
const cards = document.getElementsByClassName('card');
for (const card of cards) {
    card.addEventListener('click', function () {
        card.style.borderRadius = '50px'
    })
}



/* by clicking Button it Will be remove */
const buyNowButtons = document.getElementsByClassName('buy-now')
for (const buyNowButton of buyNowButtons) {
    buyNowButton.addEventListener('click', function (event) {
        event.target.parentNode.removeChild(event.target)
        // buyNowButton.style.display = 'none'
    })
}



/* by clicking any button, text of this button will be print in console  */
const buttons = document.getElementsByClassName('btn')
for (const button of buttons) {
    button.addEventListener('click', function (event) {
        console.log(event.target.innerText, 'button is clicked')
        event.stopImmediatePropagation()
    })
}



/* submit button enable */
const submitBtn = document.getElementById('submit')
const exampleInputEmail1 = document.getElementById('exampleInputEmail1')
exampleInputEmail1.addEventListener('keyup', function (event) {
    if (event.target.value == 'submit') {
        submitBtn.removeAttribute('disabled')
    } else {
        submitBtn.setAttribute('disabled', true)
    }
})


/* image change on mouseover */
document.getElementById('red-bag').addEventListener('mouseover', function (event) {
    event.target.src = 'images/bags/bag-3.png';
})
document.getElementById('red-bag').addEventListener('mouseout', function (event) {
    event.target.src = 'images/bags/bag-1.png';
})


/* Double click background color change */
document.getElementById('doubleClickBg').addEventListener('dblclick', function (event) {
    document.getElementById('doubleClickBg').style.backgroundColor = 'tomato'
})