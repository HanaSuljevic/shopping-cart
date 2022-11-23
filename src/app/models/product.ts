export class Product {
    id: number; 
    name: string; 
    description: string; 
    price: number; 
    imageUrl: string;

    constructor(id: number, name: string, description = '', price = 0, imageUrl = 'https://images.pexels.com/photos/5664491/pexels-photo-5664491.jpeg?cs=srgb&dl=pexels-byron-sullivan-5664491.jpg&fm=jpg'){
        this.id = id
        this.name = name
        this.description = description, 
        this.price = price, 
        this.imageUrl = imageUrl
    }
}
