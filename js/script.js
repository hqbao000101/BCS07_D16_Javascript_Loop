// ! EX1: Tìm số nguyên dương nhỏ nhất sao cho: 1 + 2 + 3 +...+ n > 10000 
function ex1() {
  var sum = 0;
  var result = 0;
  for (var i = 1; sum <= 10000; i++) {
    sum += i;
    result = i;
  }
  document.querySelector(".ex1 .result span:nth-child(2)").innerHTML = result;
}

// ! EX2: Viết chương trình nhập vào 2 số x, n tính tổng S(n) = x + x^2 + x^3 +...+ x^n (Sử dụng vòng lặp và hàm) 
// ! EX3: Nhập vào n. Tính giai thừa 1 * 2 *...* n 
// ! EX4: Hãy viết chương trình khi click vào button sẽ in ra 10 thẻ div. Nếu div vào vị trí chẵn thì bg màu đỏ, lẻ thì bg màu xanh dương 
// ! EX5: Viết chương trình có một ô input, một button. Khi click vào button thì in ra các số nguyên tố từ 1 tới giá trị của ô input 