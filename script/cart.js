let display = document.querySelector('tbody')
let dogProds = JSON.parse(localStorage.getItem('dogAccess'))||[]
console.log(dogProds);

dogProds.forEach(dogitem => {
       display.innerText +=`
                             <tr>
                                <td><img scr='${dogitem.image}'></td>
                                <td>${dogitem.name}</td>
                                <td>${dogitem.description}</td>
                                <td>${dogitem.quantity}</td>
                                <td>${dogitem.price}</td>
                                <td>${dogitem.edit}</td>
                            </tr>
                            `
});

let display1 = document.querySelector('tbody')
let catProds = JSON.parse(localStorage.getItem('catAccess'))||[]

catProds.forEach(catitem => {
    display1.innerText +=`
                             <tr>
                                <td><img src="${catitem.image}"></td>
                                <td>${catitem.name}</td>
                                <td>${catitem.description}</td>
                                <td>${catitem.quantity}</td>
                                <td>${catitem.price}</td>
                                <td>${catitem.edit}</td>
                            </tr>
                            `
});

let display2 = document.querySelector('tbody')
let birdProds = JSON.parse(localStorage.getItem('birdAccess'))||[]

birdProds.forEach(birditem => {
    display2.innerHTML +=    `
                             <tr>
                                <td><img src='${birditem.image}'></td>
                                <td>${birditem.name}</td>
                                <td>${birditem.description}</td>
                                <td>${birditem.quantity}</td>
                                <td>${birditem.price}</td>
                                <td>${birditem.edit}</td>
                            </tr>
                            `
});

let display3 = document.querySelector('tbody')
let hamsterProds = JSON.parse(localStorage.getItem('hamsterAccess'))||[]

hamsterProds.forEach(hamsteritem => {
    display3.innerHTML +=    `
                             <tr>
                                <td><img src='${hamsteritem.image}'></td>
                                <td>${hamsteritem.name}</td>
                                <td>${hamsteritem.description}</td>
                                <td>${hamsteritem.quantity}</td>
                                <td>${hamsteritem.price}</td>
                                <td>${hamsteritem.edit}</td>
                            </tr>
                            `
});

// let display4 = document.querySelector('tbody')
// let dogFood = JSON.parse(localStorage.getItem('dogTreat'))

// dogFood.forEach(dogi => {
//     display4.innerHTML +=    `
//                              <tr>
//                                 <td><img scr='${dogi.image}'></td>
//                                 <td>${dogi.name}</td>
//                                 <td>${dogi.description}</td>
//                                 <td>${dogi.quantity}</td>
//                                 <td>${dogi.price}</td>
//                                 <td>${dogi.edit}</td>
//                             </tr>
//                             `
// });

// let display5 = document.querySelector('tbody')
// let catFood = JSON.parse(localStorage.getItem('cat'))

// dogFood.forEach(cati => {
//     display5.innerHTML +=   `
//                             <tr>
//                                 <td><img scr='${cati.image}'></td>
//                                 <td>${cati.name}</td>
//                                 <td>${cati.description}</td>
//                                 <td>${cati.quantity}</td>
//                                 <td>${cati.price}</td>
//                                 <td>${cati.edit}</td>
//                             </tr>
//                             `
// });

// let display6 = document.querySelector('tbody')
// let birdFood = JSON.parse(localStorage.getItem('bird'))

// birdFood.forEach(birdi => {
//     display6.innerHTML +=    `
//                             <tr>
//                                 <td><img scr='${birdi.image}'></td>
//                                 <td>${birdi.name}</td>
//                                 <td>${birdi.description}</td>
//                                 <td>${birdi.quantity}</td>
//                                 <td>${birdi.price}</td>
//                                 <td>${birdi.edit}</td>
//                             </tr>
//                             `
// });

// let display7 = document.querySelector('tbody')
// let hamsterFood = JSON.parse(localStorage.getItem('hamsterTreat'))

// hamsterFood.forEach(hamsteri => {
//     display7.innerHTML +=   `
//                              <tr>
//                                 <td> <img scr='${hamsteri.image}'></td>
//                                 <td>${hamsteri.name}</td>
//                                 <td>${hamsteri.description}</td>
//                                 <td>${hamsteri.quantity}</td>
//                                 <td>${hamsteri.price}</td>
//                                 <td>${hamsteri.edit}</td>
//                             </tr>
//                             `
// });
