let chartHeight = document.querySelectorAll(".daysChart div p"); 
let days = document.querySelectorAll(".daysChart div small");
let values = document.querySelectorAll(".daysChart div .value");
let total = document.querySelector(".left strong");
function getChart() {
    fetch("data.json")
    .then(res => res.json())
    .then(data => {
        chartHeight[0].style.height = `${data[0].amount * 3}px`;
        chartHeight[1].style.height = `${data[1].amount * 3}px`;
        chartHeight[2].style.height = `${data[2].amount * 3}px`;
        chartHeight[3].style.height = `${data[3].amount * 3}px`;
        chartHeight[4].style.height = `${data[4].amount * 3}px`;
        chartHeight[5].style.height = `${data[5].amount * 3}px`;
        chartHeight[6].style.height = `${data[6].amount * 3}px`;
        days[0].innerText = data[0].day;
        days[1].innerText = data[1].day;
        days[2].innerText = data[2].day;
        days[3].innerText = data[3].day;
        days[4].innerText = data[4].day;
        days[5].innerText = data[5].day;
        days[6].innerText = data[6].day;
        values[0].innerText = `$${data[0].amount}`;
        values[1].innerText = `$${data[1].amount}`;
        values[2].innerText = `$${data[2].amount}`;
        values[3].innerText = `$${data[3].amount}`;
        values[4].innerText = `$${data[4].amount}`;
        values[5].innerText = `$${data[5].amount}`;
        values[6].innerText = `$${data[6].amount}`;
        
        total.innerText = `$${data[0].amount + data[1].amount + data[2].amount + data[3].amount + data[4].amount + data[5].amount + data[6].amount}`;
    })
}

getChart();