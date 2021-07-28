setTimer()
startTimer()

function setTimer(){ //enable the input fields
    let setTimerBtn = document.getElementById("setTimerBtn")
    let startBtn = document.getElementById("startBtn")
    let numberDisplay = document.querySelectorAll("h2")
    let input = document.querySelectorAll("input")

    setTimerBtn.addEventListener('click',()=>{
        for(let i = 0; i<numberDisplay.length; i++){
            numberDisplay[i].classList.add("d-none")
            input[i].classList.remove("d-none")
        }
        setTimerBtn.classList.add("d-none")
        startBtn.classList.remove("d-none")
    })
}

function startTimer(){
    let input = document.querySelectorAll("input")
    let startBtn = document.getElementById("startBtn")
    let numberDisplay = document.querySelectorAll("h2")


    startBtn.addEventListener('click',()=>{
        for(let i = 0 ; i<input.length;i++){
            numberDisplay[i].innerText = input[i].value
            numberDisplay[i].classList.remove("d-none")
            input[i].classList.add("d-none")
        }
        setTimerBtn.classList.remove("d-none")
        startBtn.classList.add("d-none")
        timerLogic(input[3].value, input[2].value,input[1].value,input[0].value)
    })

}

function timerLogic(seconds,minutes,hours,days){
    let numberDisplay = document.querySelectorAll("h2")
    setInterval(() => {
        if (seconds > 0){
            seconds = seconds - 1
            numberDisplay[3].innerText = seconds
        }else if(minutes > 0){
            seconds = 59
            minutes = minutes -1
            numberDisplay[2].innerText = minutes
        }else if(hours > 0){
            minutes = 59
            hours = hours - 1
            numberDisplay[1].innerText = hours
        }else if(days > 0){
            days = days -1 
            hours = 24
            numberDisplay[0].innerText = days
        }
    }, 1000);
}