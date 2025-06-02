//DATE : data yang berhubungan dengan waktu
let now: Date = new Date (); //class constructor date
console.log(now.toUTCString());
console.log(now.toISOString());
console.log(now.toLocaleDateString("id"));
console.log(now.toLocaleTimeString("id"));
console.log(now.toLocaleString("id"));
console.log(now.getFullYear());
console.log(now.getHours());
console.log(now.getMinutes());
console.log(now.getSeconds());
console.log(now.getMonth());//getMonth hitungannya hari mulai dari 0 yaitu minggu
console.log(now.getTime());//millisecond
console.log(now.getDay());//getDay hitungannya hari mulai dari 0 yaitu minggu