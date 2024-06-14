function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new CreateItem(1,'Whikas: Box of wet cat food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Cat%20Food/Kittie%20box.png',
    'Healthy , nutritious , and flavourful food for your little feline friends.',1,250)

let item2 = new CreateItem(2,'Whiskas: Wet Canned Food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Cat%20Food/Kittie%20Can.jpg',
    'A healthy treat for your furballs',1,75)

let item3 = new CreateItem(3,'Whiskas: Large bag of Dry cat food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Cat%20Food/Big%20Dry%20Kittie%20Bag.png',
    'Lots of nutritious foods for your furry cats.',1,300)

let item4 = new CreateItem(4,'Whiskas: Pack of wet cat food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Cat%20Food/Kittie%20Special%20Packs.jpg',
    'Lots of nutritious foods for your growing kittens.',1,200)

let item5 = new CreateItem(5,'Single pack cat food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Cat%20Food/Kittie%20Food.jpg',
    'Healthy and affordable cat food, essential for growing kitties.',1,50)

let item6 = new CreateItem(6,'Whiskas:Double Pack of cat food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Cat%20Food/Double%20Kittie.png',
    'healthy and nutritious , essential for growing cats.',1,100)



    let items = [item1,item2,item3,item4,item5,item6]

    localStorage.setItem('catTreat',JSON.stringify(items))
    let catSnack = []
    let catTreats = document.querySelector('.catFood')
    
    items.forEach(item =>{
        catTreats.innerHTML += `
                                  <div class="card" style="width: 18rem;">
                                    <img src="${item.image}" class="card-img-top" alt="...">
                                     <div class="card-body">
                                        <h5 class="card-title">${item.name}</h5>
                                        <p class="card-text">${item.catergory}</p>
                                        <p class="card-text">${item.description}</p>
                                        <p class="card-text">R${item.price}</p>
                                        <button class="purchase" value='${item.id}'>Add to Cart</button>
                                    </div>
                                 </div>
                               `
})

let purchasedItems = JSON.parse(localStorage.getItem('catTreat')) || [];
function addToCart(item) {
    let existingItem = purchasedItems.find(item => item.id === item.id);
    if (existingItem) {
        existingItem.quantity++;
    } else {
        item.quantity = 1;
        purchasedItems.push(item);
    }
    localStorage.setItem('catTreats', JSON.stringify(purchasedItems));
}
document.querySelectorAll(".purchase").forEach(button => {
    button.addEventListener("click", () => {
        let itemId = button.dataset.itemId;
        let itemToAdd = items.find(item => item.id === parseInt(itemId));
        if (itemToAdd) {
            addToCart(itemToAdd);
        }
    });
});

// function addToCart(id){
//     let [item] = items.filter(Object=> Object.id === +id) 
//     catTreats.push(item)
//     localStorage.setItem('catFood',JSON.stringify(items))
// }

// let purchasedButs =  document.querySelectorAll('.purchase')
// purchasedButs.forEach(button => {
//     button.addEventListener('click',(event) =>{
//         addToCart(event.target.value);
//     })
// });


// function CreateItem(id, name, catergory, image, description,quantity,price) {
//     this.id = id
//     this.name = name
//     this.catergory = catergory
//     this.image = image
//     this.description = description
//     this.quantity = quantity
//     this.price = price
// }

// let item7 = new CreateItem(7,'Cactus Scratching Post','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/Cactus%20Post.jpg',
//     'A fun cactus themed scratching post to keep your cats entertained',1,350)

// let item8 = new CreateItem(8,'Large Scratching Post','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/Scratching%20post.jpg',
//     'A large scratching post that keeps your cats active.',1,450)

// let item9 = new CreateItem(9,'Cat Bed','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/Car%20Bed.jpg',
//     'A soft and comfy cat bed.',1,400)

// let item10 = new CreateItem(10,'Large Cat Bed','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/Car%20Bed2.jpg',
//     'Larger and more a comfortable bed for your cats.',1,450)

// let item11 = new CreateItem(11,'Cat litter','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/litter%20Box.jpg',
//     'A much needed item for when having cats.',1,200)

// let item12 = new CreateItem(12,'Bird Toy','pet accessories',
//     'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/Ball%20bag.jpg',
//     'Fun Bouncy balls to keep your cat active and exercising.',1,40)



//     let catAC = [item7,item8,item9,item10,item11,item12]

//     localStorage.setItem('catAccess',JSON.stringify(catAC))
    
//     let cat = document.querySelector('.catAccess')
    
//     let catBuy = []
//     catAC.forEach(catAccess =>{
//         cat.innerHTML += `
//                                   <div class="card" style="width: 18rem;">
//                                     <img src="${catAccess.image}" class="card-img-top" alt="...">
//                                      <div class="card-body">
//                                         <h5 class="card-title">${catAccess.name}</h5>
//                                         <p class="card-text">${catAccess.catergory}</p>
//                                         <p class="card-text">${catAccess.description}</p>
//                                         <p class="card-text">R${catAccess.price}</p>
//                                         <button class='purchases' value='${catAccess.id}'>Add To Cart</button>
//                                     </div>
//                                  </div>
//                                `
// })

// function addToCart(id){
//     let [catAccess] = catAC.filter(Object=> Object.id === +id) 
//     console.log(catAC);
//     catBuy.push(catAccess)
//     localStorage.setItem('catBuy',JSON.stringify(catBuy))
// }


// let catButs =  document.querySelectorAll('.purchases')
// catButs.forEach(button => {
//     button.addEventListener('click',(event) =>{
//         addToCart(event.target.value);
//     })
// });
