// // function displayTime(){
// //     let dateTime = new Date();
// //     let hrs = dateTime.getHours();
// //     let min = dateTime.getMinutes();
// //     let sec = dateTime.getSeconds();

// //     document.getElementById('hours').innerHTML = hrs;
// //     document.getElementById('minutes').innerHTML = min;
// //     document.getElementById('seconds').innerHTML = sec;
// // }
// // setInterval(displayTime, 10);

// // function changeTimeZone(){
// //     document.getElementById('hours').innerHTML = hrs;

// //     for()
// // }

// const timezones = ['wib', 'wita', 'wit']
// var index = 0

// let dateTime = new Date()
// let hrs = dateTime.getHours()
// let min = dateTime.getMinutes()
// let sec = dateTime.getSeconds()
// let set = dateTime.setHours()



// function timezoneSet (time) {
//     if (time == 'wib') {
//     // code
//         document.getElementById('hours').innerHTML = hrs;
//         document.getElementById('minutes').innerHTML = min;
//         document.getElementById('seconds').innerHTML = sec;
//     } else if (time == 'wita') {
//     // code
//         let newHour = set(hrs + 1);
//         document.getElementById('hours').innerHTML = newHour;
//         document.getElementById('minutes').innerHTML = min;
//         document.getElementById('seconds').innerHTML = sec;
//     } else if (time == 'wit') {
//     // code
//         let newHour = set(hrs + 2);
//         document.getElementById('hours').innerHTML = newHour;
//         document.getElementById('minutes').innerHTML = min;
//         document.getElementById('seconds').innerHTML = sec;
//     }
// }

// function change() {
//   if (key.event == 'a') {
//     index += 1
//   }
//   timezoneSet(timezones[index % timezones.length])
// }

var index = 0

const timezones = ['wib', 'wita', 'wit']

function displayTime(){
    let dateTime = new Date();
    dateTime.setHours(dateTime.getHours()+index);
    let hrs = dateTime.getHours();
    let min = dateTime.getMinutes();
    let sec = dateTime.getSeconds();

    document.getElementById('hours').innerHTML = hrs;
    document.getElementById('minutes').innerHTML = min;
    document.getElementById('seconds').innerHTML = sec;
}
setInterval(displayTime, 10);

function changeTimeZone(){
    index += 1;
    index = index % 3;
}

function timezoneSet (time) {
    if (time == 'wib') {
    // code
        document.getElementById('hours').innerHTML = hrs;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
    } else if (time == 'wita') {
    // code
        let newHour = set(hrs + 1);
        document.getElementById('hours').innerHTML = newHour;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        document.getElementById('timezoneName').innerHTML = 'WITA';
    } else if (time == 'wit') {
    // code
        let newHour = set(hrs + 2);
        document.getElementById('hours').innerHTML = newHour;
        document.getElementById('minutes').innerHTML = min;
        document.getElementById('seconds').innerHTML = sec;
        document.getElementById('timezoneName').innerHTML = 'WIT';
    }
}

