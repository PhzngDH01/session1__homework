// Câu 1 : Trong Javascript, trường hợp khi bạn đặt tên biến thì sẽ bị thông báo SyntaxError  :
// Không được bắt đầu bằng số.
// Không được chứa những kí tự biệt, (khoảng trắng cũng tính là ký tự đặc biệt), ngoại trừ "_" và "$".
// Không được trùng với các từ khóa (keywords) của javascript.

//   3 ví dụ về việc đặt tên biến sai trong Javascript: 2001phong , !ok, mail, ...

// Câu 2 : Trong JavaScript, các kiểu dữ liệu khác nhau yêu cầu các cách kiểm tra kiểu dữ liệu khác nhau

// //Có thể dễ dàng kiểm tra các String, Number, Boolean và Function bằng cách sử dụng toán tử typeof
// Đối với null và undefined, bạn có thể sử dụng một phép so sánh đơn giản với toán tử bình đẳng nghiêm ngặt
// Mảng có thể được nhận dạng bằng cách sử dụng phương thức tĩnh Array.isArray
// Bạn có thể kiểm tra các đối tượng thuộc bất kỳ loại nào bằng cách so sánh chúng với giá trị wrapper của chúng
// Với trường hợp đặc biệt như isNaN và isFinite, chúng sẽ kiểm tra các giá trị số như NaN, Infinity và -Infinity

// Câu 3 :  Trong javascript có 7 kiểu dữ liệu cơ bản :
//   String
//   Number
//   Boolean
//   Null
//   Object
//   Undefined
//   Array

/////////  BÀI TẬP

// bài tập 2:

//2.a
let msg = "Rikkei is awesome";
console.log(msg);

// //2.b
let studentCount = 0;
console.log(studentCount);

// bài tập 3 :

//3.a
msg = "Coding is hard but super cool and fun";
console.log(msg);

//3.b
studentCount = 30;
console.log(studentCount);

//3.c
msg = "Coding is hard but super cool and fun";
// Thường toàn bộ
console.log(msg.toLowerCase());
// Hoa toàn bộ
console.log(msg.toUpperCase());

//3.d
let csgo = Number(prompt("Nhập giá trị n"));
console.log(`${csgo + studentCount}`);

// bài tập 4

alert("Chào bạn yêu quý");

// bài tập 5

let chaohoi = prompt("Bạn tên là gì ạ?");
alert(`Hello ${chaohoi}`);

// bài tập 6

let maka = prompt("FistName của bạn là gì?");
let meka = prompt("LastName của bạn là gì?");
alert(`Hi ${maka} ${meka}`);

// bài tập 7

let koko = Number(prompt("Bạn hãy nhập một cạnh hình vuông"));
alert(`Diện tích của hình vuông ${koko * koko}`);

// bài tập 8

let koke = Number(prompt("Bạn hãy nhập bán kính hình tròn "));
let dienTich = koke * 2 * Math.PI;
alert(`Diện tích của hình tròn:${dienTich}`);

// bài tập 9

let kaka = Number(prompt("Bạn hãy nhập Celsius"));
alert(`Nhiệt độ trong Fahrenheit là: ${kaka * (9 / 5) + 32}`);

// bài tập 10

let diencau = Number(
  prompt(
    "Nhập từ khóa để thành một câu hoàn chỉnh /n The quick ___ fox jumps over the ___ dog"
  )
);
