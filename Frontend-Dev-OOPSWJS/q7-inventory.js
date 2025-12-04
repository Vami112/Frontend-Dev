const products = [
  { id: 1, name: "TV", category: "Electronics", price: 30000, stock: 3 },
  { id: 2, name: "Shirt", category: "Clothing", price: 1500, stock: 10 },
  { id: 3, name: "Laptop", category: "Electronics", price: 60000, stock: 1 },
  { id: 4, name: "Shoes", category: "Footwear", price: 2000, stock: 2 }
];

function getLowStockProducts() {
  return products.filter(p => p.stock < 3);
}

function sortProductsByPrice() {
  return [...products].sort((a, b) => a.price - b.price);
}

function calculateTotalInventoryValue() {
  return products.reduce((sum, p) => sum + p.price * p.stock, 0);
}

function groupByCategory() {
  return products.reduce((group, p) => {
    (group[p.category] = group[p.category] || []).push(p);
    return group;
  }, {});
}

console.log(getLowStockProducts());
console.log(sortProductsByPrice());
console.log(calculateTotalInventoryValue());
console.log(groupByCategory());
