const hr = document.getElementById("hours");
const min = document.getElementById("minutes");
const sec = document.getElementById("seconds");

timeid = setInterval(time, 1000)

function time (){
    let date = new Date();
    let currenth = date.getHours();
    let currentm = date.getMinutes();
    let currents = date.getSeconds();

    hr.textContent = twodigits(currenth);
    min.textContent  =  twodigits(currentm);
    sec.textContent =  twodigits(currents);
}

function twodigits (number){
    if (number>=10){
        return(number)
    }
    else{
        return (`0${number}`)
    }
}