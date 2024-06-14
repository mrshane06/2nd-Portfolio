function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new CreateItem(1,'Large Pack of Dog food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Dog%20Food/Doggo%20food%203.png',
    'Healthy , nutritious , and flavourful food for your little canine friends.',1,350)

let item2 = new CreateItem(2,'Xtra large Dog Food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Dog%20Food/Doggo%20Food2.jpg',
    'An extra large food pack for your dogs',1,375)

let item3 = new CreateItem(3,'Xtra Large Pack of Dog Food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Dog%20Food/Doogo%20Food.jpg',
    'Lots of nutritious foods for your dogs.',1,375)

let item4 = new CreateItem(4,'Dog Food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Dog%20Food/Dooog%20foood.jpg',
    'Lots of nutritious foods for your growing pups',1,150)

let item5 = new CreateItem(5,'Dog Food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Dog%20Food/foood.jpg',
    'Healthy and affordable dog food, essential for growing puppies.',1,150)

let item6 = new CreateItem(6,'Variety Pack','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Dog%20Food/big%20pack%20foood.jpg',
    'A variety pack , full of nutritious and yummy foods for your dogs.',1,200)



    let items = [item1,item2,item3,item4,item5,item6]

    localStorage.setItem('dogTreat',JSON.stringify(items))
    
    let dogTreats = document.querySelector('.dogFood')
    
    items.forEach(item =>{
        dogTreats.innerHTML += `
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


// function CreateItem(id, name, catergory, image, description,quantity,price) {
//     this.id = id
//     this.name = name
//     this.catergory = catergory
//     this.image = image
//     this.description = description
//     this.quantity = quantity
//     this.price = price
// }

// let item7 = new CreateItem(7,'Dog Balls','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Doggo/BAllls.jpg',
//     'Assorted dog balls to keep your dog active and healthy.',1,60)

// let item8 = new CreateItem(8,'Dog Toy','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Doggo/Chicken.jpg',
//     'Dog toys to keep your dogs entertained and active.',1,50)

// let item9 = new CreateItem(9,'Dog toys','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Doggo/toyys.jpg',
//     'Fun and engaging toys for you to play fetch with your dog.',1,400)

// let item10 = new CreateItem(10,'Dog Bed','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Doggo/BED2.jpg',
//     'LA soft ,large , and comfy dog bed.',1,400)

// let item11 = new CreateItem(11,'Dog Bowls','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Doggo/Douuble%20Bowl.jpg',
//     'Every dog needs a dog bowl.',1,150)

// let item12 = new CreateItem(12,'Dog Collars','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Doggo/Collars2.jpg',
//     'Collars are a much needed accessory that every dog needs.',1,100)



//     let dogAccess = [item7,item8,item9,item10,item11,item12]

//     localStorage.setItem('dogAccess',JSON.stringify(dogAccess))
    
//     let dog = document.querySelector('.dogAccess')
    
//     dogAccess.forEach(dogAccess =>{
//         dog.innerHTML += `
//                                   <div class="card" style="width: 18rem;">
//                                     <img src="${dogAccess.image}" class="card-img-top" alt="...">
//                                      <div class="card-body">
//                                         <h5 class="card-title">${dogAccess.name}</h5>
//                                         <p class="card-text">${dogAccess.catergory}</p>
//                                         <p class="card-text">${dogAccess.description}</p>
//                                         <p class="card-text">R${dogAccess.price}</p>
//                                         <a href="#" class="btn btn-primary">Add to Cart</a>
//                                     </div>
//                                  </div>
//                                `
// })