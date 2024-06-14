function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new CreateItem(1,'Wild Bird Seed','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Bird%20Food/food.jpg',
    'Healthy and nutritious food for your feathery little friends.',1,50)

let item2 = new CreateItem(2,'Mixed Bird Seed','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Bird%20Food/fooood3.png',
    'A healthy mixed treat for all  your feathery family members.',1,75)

let item3 = new CreateItem(3,'Mixed Bird Seed','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Bird%20Food/foood2.jpg',
    'A healthy treats for your little birds.',1,75)



    let items = [item1,item2,item3]

    localStorage.setItem('bird',JSON.stringify(items))
    
    let container = document.querySelector('.bird')
    
    items.forEach(item =>{
        container.innerHTML += `
                                  <div class="card" style="width: 18rem;">
                                    <img src="${item.image}" class="card-img-top" alt="...">
                                     <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text">${item.catergory}</p>
                                        <p class="card-text">${item.description}</p>
                                        <p class="card-text">R${item.price}</p>
                                        <a href="#" class="btn btn-primary">Add to Cart</a>
                                    </div>
                                 </div>
                               `
})


// function birdCage(id, name, catergory, image, description,quantity,price) {
//     this.id = id
//     this.name = name
//     this.catergory = catergory
//     this.image = image
//     this.description = description
//     this.quantity = quantity
//     this.price = price
// }

// let item4 = new birdCage(4,'Medium Bird Cage','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Birdie/Cage2.jpg',
//     'A large enough cage for your little friend to play in',1,300)

// let item5 = new birdCage(5,'Medium Bird Ladder','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Birdie/Ladderr.jpg',
//     'A small toy for your birds to play with.',1,150)

// let item6 = new birdCage(6,'Bird Toy','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Birdie/thingy.jpg',
//     'An engaging toy to keep your feathery friend active.',1,200)



//     let birdAccess = [item4,item5,item6]

//     localStorage.setItem('birdAccess',JSON.stringify(birdAccess))
    
//     let bird = document.querySelector('.birdCage')
    
//     birdAccess.forEach(birdAccess =>{
//         bird.innerHTML += `
//                                   <div class="card" style="width: 18rem;">
//                                     <img src="${birdAccess.image}" class="card-img-top" alt="...">
//                                      <div class="card-body">
//                                         <h5 class="card-title">${birdAccess.name}</h5>
//                                         <p class="card-text">${birdAccess.catergory}</p>
//                                         <p class="card-text">${birdAccess.description}</p>
//                                         <p class="card-text">R${birdAccess.price}</p>
//                                         <a href="#" class="btn btn-primary">Add to Cart</a>
//                                     </div>
//                                  </div>
//                                `
// })