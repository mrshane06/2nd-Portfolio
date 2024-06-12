function CreateItem(id, name, catergory, image, description,quantity,price) {
    this.id = id
    this.name = name
    this.catergory = catergory
    this.image = image
    this.description = description
}

let item1 = new CreateItem(1,'Yummy Treats For your pets','pet food',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Images/Hampter.jpg',
    'Both yummy and nutritious foods for your furry little family members.')

let item2 = new CreateItem(2,'Fun toys for pets','pet toys',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Images/Animals%20playing.jpg',
    'Fun Toys to keep your pets active and healthy.')

let item3 = new CreateItem(3,'Beds and accessories for your little ones','pet accessories',
    'https://mrshane06.github.io/2nd-Portfolio-images/Pet%20Accessories/Car/Car%20Bed.jpg',
    'Cute beds ands accessories for your fur babies.')

let items = [item1,item2,item3]

localStorage.setItem('home',JSON.stringify(items))

let container = document.querySelector('.const')

items.forEach(item =>{
    container.innerHTML += `
                              <div class="card" style="width: 18rem;">
                                <img src="${item.image}" class="card-img-top" alt="...">
                                 <div class="card-body">
                                    <h5 class="card-title">${item.name}</h5>
                                    <p class="card-text">${item.catergory}</p>
                                    <p class="card-text">${item.description}</p>
                                    <a href="#" class="btn btn-primary">View More</a>
                                </div>
                             </div>
                           `
})