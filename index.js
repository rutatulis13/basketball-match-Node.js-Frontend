const getInfo = () => {

fetch('http://localhost:3003')
.then((response) => response.json())
.then(jsonObjektas => {
    console.log(jsonObjektas)

    document.querySelector(".container__info").innerHTML += `<div class="container__info--details">${jsonObjektas.date}</div><div class="container__info--dot"></div>`;

    document.querySelector(".container__info").innerHTML += `<div class="container__info--details">${jsonObjektas.round}</div><div class="container__info--dot"></div>`;

    document.querySelector(".container__info").innerHTML += `<div class="container__info--details">${jsonObjektas.stadium}</div><div class="container__info--dot-last"></div>`;

    document.querySelector(".container__info").innerHTML += `<div class="container__info--details time">${jsonObjektas.time}</div>`;

    document.querySelector(".container__team1").innerHTML += `<div class="container__info--teams">${jsonObjektas.team1}</div>`;
    
    document.querySelector(".container__team2").innerHTML += `<div class="container__info--teams">${jsonObjektas.team2}</div>`;
})
}
getInfo();

const checkData = () => {

    fetch('http://localhost:3003/checkscore')
    .then((response) => response.json())
    .then(jsonObjektas => {
        console.log(jsonObjektas)

        document.querySelector(".container__scores").innerHTML = `<div class="container__scores--first">${jsonObjektas.komanda1}</div><div class="container__scores--border"></div><div class="container__scores--second">${jsonObjektas.komanda2}</div>`;


        document.querySelector(".container__team1").classList.remove("green-font");
        document.querySelector(".container__team2").classList.remove("green-font");
        
        if ( jsonObjektas.komanda1 > jsonObjektas.komanda2 ) {
            document.querySelector(".container__scores--first").classList.add("green-font");
        } else if ( jsonObjektas.komanda1 < jsonObjektas.komanda2 ) {
            document.querySelector(".container__scores--second").classList.add("green-font");
        }
   })
}

checkData();

document.querySelector(".btn").addEventListener("click", () => {
    checkData();
})


const getRez = () => {
    fetch('http://localhost:3003/result')
    .then((response) => response.json())
    .then(jsonObjektas => {
        console.log(jsonObjektas)
        function getRandomNum(min, max) {
            let randomNum = Math.floor(Math.random()*(max-min+1)+min);
            return randomNum;
      }
    
        let status = getRandomNum(0, 4);

        document.querySelector(".quarter").innerHTML += `
        <div class="container__final">${jsonObjektas.half[status]}</div>`
        })
    }

    getRez();
