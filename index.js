setInterval( () => {
    let degMin = 6;
    let degHour = 30;
    let hr = document.querySelector('#hr');
    let mn = document.querySelector('#mn');
    let sc = document.querySelector('#sc');

    let day = new Date();
    let hh = day.getHours();
    let mm = day.getMinutes();
    let ss = day.getSeconds();

    hr.style.transform = `rotateZ(${(hh + mm/60)*degHour}deg)`;
    mn.style.transform = `rotateZ(${(mm + ss/60)*degMin}deg)`;
    sc.style.transform = `rotateZ(${ss*degMin}deg)`;

})


// one circle: 12 hour, 60 min, 60 sec;
// degMin = 360(degree) / 60 = 6;
// degHour = 360 / 12 = 30;
