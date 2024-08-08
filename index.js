const button = document.querySelector('.btn')
const clock = document.querySelector('.clock')
const IntialTime = setInterval(()=>{
    const d = new Date()
    clock.innerHTML = d.toLocaleTimeString()
},1000)
button.addEventListener("click",()=>{
    clearInterval(IntialTime)
    const clock = document.querySelector('.clock')
    const JTime = 0
    const ITime = 0
    if(button.innerText === "Change to Japan")
    {
        clearInterval(ITime)
        button.innerText = "Change to India"
        jTime = setInterval(() => {
            const d = new Date()
            const localtime = d.getTime()
            const localOffset = d.getTimezoneOffset() * 60000
            const utc = localtime + localOffset
            const offSet = 9
            const jpn = utc + (3600000 * offSet)
            const jpnTime = new Date(jpn).toLocaleTimeString()
            clock.innerHTML = jpnTime
        }, 1000);
    }
    else if(button.innerText === "Change to India")
    {
        clearInterval(jTime)
        button.innerText = "Change to Japan"
        ITime = setInterval(()=>{
            const d = new Date()
            clock.innerHTML = d.toLocaleTimeString()
        },1000)
    }
})


