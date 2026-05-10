function sum(x, y, z) {
    console.log(x + y + z);
}
sum(10, 20, 30);

function total() {
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    console.log(sum);
}

total(10, 20);
total(10, 20, 30, 40);
total(10, 20, 30, 40, 50);
