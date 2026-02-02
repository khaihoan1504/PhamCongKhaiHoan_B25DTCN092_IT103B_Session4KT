let sum = 0;
for (let i = 1; i <= 50; i++) {
  if (i % 3 === 0) {
    console.log("fizz");
    sum += i;
  } else if (i % 5 === 0) {
    console.log("buzz");
  } else {
    console.log(i);
  }
}

console.log("Tong cua tat ca cac so da in ra chu fizz: ", sum);
