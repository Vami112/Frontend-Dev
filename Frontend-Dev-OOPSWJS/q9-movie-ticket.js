class MovieTicket {
  constructor(movieName, seatNo, price) {
    this.movieName = movieName;
    this.seatNo = seatNo;
    this.price = price;
  }
}

MovieTicket.prototype.printTicket = function () {
  return `Movie: ${this.movieName}, Seat: ${this.seatNo}`;
};

class OnlineTicket extends MovieTicket {
  constructor(movieName, seatNo, price, fee) {
    super(movieName, seatNo, price);
    this.fee = fee;
  }

  getTotalAmount() {
    return this.price + this.fee;
  }
}

const t1 = new OnlineTicket("Avatar", "A10", 300, 50);
console.log(t1.printTicket());
console.log("Total:", t1.getTotalAmount());
