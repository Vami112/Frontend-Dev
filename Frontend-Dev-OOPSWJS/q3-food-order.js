const menu = { pizza: 200, burger: 100, pasta: 150 };

function calculateBill(orderItems) {
  try {
    const prices = orderItems.map(item => {
      if (!menu[item]) throw new Error(`Invalid item: ${item}`);
      return menu[item];
    });

    return prices.reduce((total, p) => total + p, 0);
  } catch (err) {
    console.log("Error:", err.message);
  }
}

console.log("Bill:", calculateBill(["pizza", "burger"]));
calculateBill(["pasta", "momos"]); // invalid
