const user = {
    name: "Aman",
    showName: () => {
        console.log(this.name); 
    }
};

user.showName(); // undefined

// const userFixed = {
//     name: "Aman",
//     showName: function () {   // normal function
//         console.log(this.name);
//     }
// };

// userFixed.showName(); // ✔ Aman

