// ProductManager.js
// Product class with discount and formatted display; example usage included.

class Product {
  constructor(id, name, price, category) {
    this.id = id;
    this.name = name;
    this.price = price;
    this.category = category;
  }

  // apply a percent discount (e.g., 10 -> 10%)
  applyDiscount(percent) {
    if (typeof percent !== 'number' || percent < 0) return;
    this.price = +(this.price * (1 - percent / 100)).toFixed(2);
  }

  // formatted string
  details() {
    return `ID: ${this.id} | ${this.name} (${this.category}) - ₹${this.price}`;
  }
}

// create products and store in array
const products = [
  new Product(1, 'Smartphone X', 24999, 'Electronics'),
  new Product(2, 'Bluetooth Headset', 899, 'Electronics'),
  new Product(3, 'Office Chair', 5500, 'Furniture'),
  new Product(4, 'Coffee Maker', 3000, 'Home Appliances'),
  new Product(5, 'T-shirt', 799, 'Apparel')
];

// apply 10% discount to product id 3 as example
products[2].applyDiscount(10); // Office Chair price reduced

// display all products
console.log('All products:');
products.forEach(p => console.log(p.details()));

// filter products with price > 1000
const expensive = products.filter(p => p.price > 1000);
console.log('\nProducts with price > 1000:');
expensive.forEach(p => console.log(p.details()));
