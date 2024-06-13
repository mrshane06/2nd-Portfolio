function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item1 = new CreateItem(1,'Hamster n Mouse Food','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Hampster%20Food/Hampter%20n%20mouse.jpg',
    'Fresh food for your tiny , little hamsters.',1,70)

let item2 = new CreateItem(2,'Hamster Food Bucket','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Hampster%20Food/hampter%20bucket.jpg',
    'A large bucket of nutritious hamster food',1,75)

let item3 = new CreateItem(3,'Hamster Grub','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Food/Hampster%20Food/hampter.jpg',
    'A fresh pack of hamster grub , ready for your small pets.',1,70)


    let items = [item1,item2,item3]

    localStorage.setItem('hamsterTreat',JSON.stringify(items))
    
    let hamsterTreats = document.querySelector('.hamsterFood')
    
    items.forEach(item =>{
        hamsterTreats.innerHTML += `
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


function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
    this.quantity = quantity
    this.price = price
}

let item4 = new CreateItem(4,'Hamster Bowl','pet accessories',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Hampter/Bowl.jpg',
    'A small bowl ready for your small pets to eat.',1,90)

let item5 = new CreateItem(5,'Large Hamster Cage','pet accessories',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Hampter/hampter%20cage.jpg',
    'A large Cage for your small pets to enjoy.',1,300)

let item6 = new CreateItem(6,'Hamster Cage','pet accessories',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Hampter/cagee.jpg',
    'An affordable and secure hamster cage.',1,170)


    let hamsterAccess = [item4,item5,item6]

    localStorage.setItem('hamsterAccess',JSON.stringify(items))
    
    let hamster = document.querySelector('.hamsterAccess')
    
    hamsterAccess.forEach(item =>{
        hamster.innerHTML += `
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