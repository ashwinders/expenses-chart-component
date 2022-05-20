const data = [
    {
        "day": "mon",
        "amount": 17.45
    },
    {
        "day": "tue",
        "amount": 34.91
    },
    {
        "day": "wed",
        "amount": 52.36
    },
    {
        "day": "thu",
        "amount": 31.07
    },
    {
        "day": "fri",
        "amount": 23.39
    },
    {
        "day": "sat",
        "amount": 43.28
    },
    {
        "day": "sun",
        "amount": 25.48
    }
]

let bars = document.querySelectorAll('.graph-bar');
let max = 0
const currentDay = (new Date).getDay()

data.forEach((item, index) => {
    if (item.amount > max) {
        max = item.amount
    }

    bars[index].classList.remove('current')
    if (index == currentDay - 1) {
        bars[index].classList.add('current')
    }
})

data.forEach((item, index) => {
    item.percent = Math.round(item.amount / max * 100)
    bars[index].style.setProperty('--percent', item.percent)
    bars[index].querySelector('.graph-bar__bar').setAttribute('data-amount', `$${item.amount}`)
})
