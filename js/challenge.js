document.addEventListener('DOMContentLoaded', () => {
let mainCounter = document.getElementById('counter')
let intervalId = setInterval(incrementCounter, 1000)
function incrementCounter () {
    mainCounter.innerText = parseInt(mainCounter.innerText) + 1
}





let minus = document.getElementById('minus')
minus.addEventListener('click', () => {
    let mainCounter = document.getElementById('counter')
    mainCounter.innerText = parseInt(mainCounter.innerText) - 1
})

let plus = document.getElementById('plus')
plus.addEventListener('click', () => {
    let mainCounter = document.getElementById('counter')
    mainCounter.innerText = parseInt(mainCounter.innerText) + 1
})

let heart = document.getElementById('heart')
heart.addEventListener('click', (event) => {
    let mainCounter = document.getElementById('counter').innerText
    let likes = document.querySelector('.likes')
    let li = document.createElement('li')
    
    let determineTime = function () {
        if (event.detail <= 1) {
            return 'time'
        }
        else {
            return "times"
        }
    }
    li.innerText = `${mainCounter} has been liked ${event.detail} ${determineTime()}`
    likes.appendChild(li)
})



let pause = document.getElementById('pause')
pause.addEventListener ('click', (e) => {
    if (e.target.innerText === 'pause') {
        clearInterval(intervalId)
        minus.disabled = true
        plus.disabled = true
        heart.disabled = true
        submit.disabled = true
        e.target.innerText = 'resume'
    }
    else {
            intervalId = setInterval(incrementCounter, 1000)
            minus.disabled = false
            plus.disabled = false
            heart.disabled = false
            submit.disabled = false
            e.target.innerText = 'pause'
        }
    })


let submit = document.getElementById('submit')
let comment = document.getElementById('comment-input')
submit.addEventListener('click', (e) => {
    e.preventDefault()
    let p = document.createElement('p')
    p.innerText = comment.value
    document.querySelector('div#list').appendChild(p)
    comment.value = ''
})





})
