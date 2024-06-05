const array = [66, 175, 99, 250, 100];
let sum = 0;
for (let i = 0; i < array.length; i++){
    sum = array[i] + sum;
}
rezultat = sum / array.length;
console.log("Media aritmetica a numerelor este:", rezultat)


let arrayOther = [45, 23, 789, 239, true, "wantsome", 353, 89, "Front-End", 100,
    {
        nume: "Alex",
        varsta: 25
    },
    {
        nume: "Ion",
        varsta: 40
    }
];
arrayOther = arrayOther.map((element) => {
    if (typeof element === "number"){
        sum = sum + element;
    }
});
console.log(sum);

let fibonocci = [0, 1];
for (let i = 2; i < 20; i++){
    fibonocci[i] = fibonocci[i - 1] + fibonocci[i - 2];
}
console.log(fibonocci);