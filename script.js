let hrs = document.getElementById("hrs");
let min = document.getElementById("min");
let sec = document.getElementById("sec");
let day = document.getElementById("day");
let year = document.getElementById("year")

function clock() {
    let date = new Date();

    hrs.innerHTML = date.getHours();
    min.innerHTML = date.getMinutes();
    sec.innerHTML = date.getSeconds();
    year.innerHTML = date.getFullYear();
    // let.day ,innerHTML = date.getDay()
    let dayposition =date.getDay()
    let days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursdy', 'Friday', 'Saturday']
    // let days = [days[dayposition]]
    // console.log(dayName)
    let dayName = days[dayposition]
    console.log(dayName)
    day.innerHTML = dayName

}
setInterval(() => {
    clock();
}, 1000);