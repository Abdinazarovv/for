let saleries = {
    Ali: 160,
    Vali: 220,
    Anvar: 250
};

let sum = 0;
for (let key in saleries ) {
    sum += saleries[key];
}

console.log(sum);