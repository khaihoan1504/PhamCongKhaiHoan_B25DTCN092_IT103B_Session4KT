let n = 20;

if (n % 2 === 0) {
  console.log("Day la so chan");
} else {
  console.log("Day la so le");
}

if (n === 0) {
  console.log("Day la so 0");
} else if (n > 0) {
  console.log("Day la so duong");
} else {
  console.log("Day la so am");
}

if (n <= 0) {
  console.log("Gia tri n khong hop le de tao day so");
} else if (n > 0) {
  for (let i = 0; i < n; i++) {
    console.log(n - i);
  }
}
