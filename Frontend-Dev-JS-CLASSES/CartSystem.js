// CartSystem.js
class Cart {
  constructor() {
    this.items = []; // {name, price, qty}
  }

  addItem(name, price, qty = 1) {
    this.items.push({ name, price: Number(price), qty: Number(qty) });
  }

  getTotal() {
    return this.items.reduce((sum, it) => sum + it.price * it.qty, 0);
  }

  // coupon format: SAVE20 or DISC10 (letters then 1-2 digits)
  static validateCoupon(coupon) {
    if (!coupon) return null;
    const re = /^(SAVE|DISC)(\d{1,2})$/i;
    const m = coupon.match(re);
    if (!m) return null;
    const percent = Number(m[2]);
    if (percent <= 0 || percent > 100) return null;
    return percent;
  }

  getFinalTotal(couponCode) {
    const total = this.getTotal();
    const percent = Cart.validateCoupon(couponCode);
    if (!percent) return { ok: false, total, message: 'Invalid coupon' };
    const discounted = +(total * (1 - percent / 100)).toFixed(2);
    return { ok: true, total, discounted, percent };
  }
}

// Example
const cart = new Cart();
cart.addItem('Shoes', 1999, 1);
cart.addItem('Bag', 799, 2);
cart.addItem('Socks', 199, 3);

console.log('Cart total:', cart.getTotal());

console.log(cart.getFinalTotal('SAVE10')); // 10% off
console.log(cart.getFinalTotal('DISC20')); // 20% off
console.log(cart.getFinalTotal('BAD50'));  // invalid
