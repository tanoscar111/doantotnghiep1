var a = "hello";
var b = "word";
console.log(a + " " + b);
//number đặt tên theo kiểu viết hoa tất cả
var C = 5;
var D = 6;
console.log(C + D);
//boolean đặt tên theo kiểu thêm tiền tố phía trước  vd :is, are ,has
var istrue = true;
var isfalse = false;
console.log(istrue && isfalse);
console.log(null && undefined);
// variable trong js :biến trong js đặt tên phải chữ cái đầu tiên viết thường sau thì phải viết hoa
var a = "a";
console.log(a);
a = "aa";
console.log(a);
const Const = "b";
//const là khai báo biến không thể thay đổi được
let c = "c";
// let là khai báo biến có thể thay đổi được
c = "cc";
console.log(c);
let e = "e",
  f = "f";
console.log(e);
console.log(f);
for (let i = 0; i < 10; i++) {
  console.log(i);
}
//forloops
// for in trong javascrip là lấy từng phần tử trong một array
const friendZone = {
  name: "h1",
  name: "h2",
  name: "h3",
};
for (friendName in friendZone) {
  //lấy từng key ra
  console.log(friendName);
}
const faces = "🤠🙃😎";
for (face of faces) {
  // lấy từng thuộc tính bên trong của nó ra
  console.log(face);
}
let i = 0;
while (i < 5) {
  console.log("i====" + i);
  i++;
}
let g = 0,
  sum = 0;
do {
  sum += g;
  g++;
} while (g < 5);
console.log(sum);
//ternary: dạng if else ? :
console.log(7 % 2 === 0 ? "7 is old" : "7 is even");
let isTrue = true;
console.log(isTrue ? "dung" : "sai");
//switch case
const fruit = "bananna";
switch (fruit) {
  case "apple":
    console.log("black");
    break;
  case "bananna":
    console.log("yellow");
    break;
  default:
    console.log("red");
}
//exception try catch
function logger() {
  console.log("hello word");
}
try {
  logger();
} catch (e) {
  console.log("lỗi toàn bộ");
}
function log_ger() {
  console.log("chạy trong case");
}
try {
  logger1();
} catch (e) {
  console.log("looix r nha");
}
//array methoth
const newArray = ["one", "two", "fourd"];
console.log(newArray);
newArray.push(1);
newArray.push(2);
console.log(" new Array :" + newArray);
newArray[12] = 3;
console.log("new array:" + newArray);
const fruit1 = ["apple", "banana"];
const number = [1, 2, 3, 4];
let sum1 = 0;
console.log(fruit1.length); //đêm chuổi
console.log(fruit1[0]);
console.log(fruit1[fruit1.length - 1]); // truy cập đến mãng đó r mới lấy giá trị đó ra
number.forEach(function (item, sum1) {
  //vòng lặp  để thực thi các hàm trong vòng lặp item:đại diện cho từng phần tử trong vòng lặp sum 1 là để thực thi lệnh của vòng lặp đó
  sum1 += " " + item;
  console.log(sum);
});
//thêm phần tử vào đầu mảng
newArray.unshift("array1");
console.log(newArray);
//xóa phần tử ở đầu mảng
newArray.shift();
console.log(newArray);
//tìm phần tử bất kì r xóa nó đi
let findArray = newArray.indexOf("one");
console.log(findArray);
newArray.splice(findArray, 1); //findArray là vị trí muốn xóa , 3 là số phần tử muốn xóa tiếp theo
console.log(newArray);
// cách khai báo khác của object
const felixTheCat = {};
felixTheCat["name"] = "hehe";
felixTheCat["SO"] = 5;
console.log(felixTheCat);
//arrowfuntion :rút gọn funtion
let arrowfuntion1 = newArray.map((arrowfuntion) => arrowfuntion.length);
console.log(arrowfuntion1);
//arrowfuntion=> đại diện cho 1 funtion
felixTheCat["sayhi"] = () => console.log("meomeo");
felixTheCat.sayhi();
//() đại diện cho 1 funtion
//=>: return
// set  tập hợp các giá trị không bị trùng lặp
const s = new Set();

s.add("red");
s.add("blue");
s.add("yelow");
s.add("black");
console.log(s);
// gias trị duy nhất nếu thêm giá trị giống vậy thì set chỉ nhận 1 cái thôi
console.log(s.has("red")); // kiểm tra thử có phần tử đó không
console.log(s.size);
let setIter = s.values();
console.log(setIter.next().value);
s.forEach((value) => console.log(value));
// foreach  là  vòng lặp
//funtion trong js
const functionjs = (string) => string.toUpperCase() + "!!";
//string trong ngoặc là biến trong funtion , => return trả về giá trị viết hoa
console.log(functionjs("helloword"));

//Parameters
let multiply = (x, y) => x * y;
const val = multiply(3, 5);
console.log(val);
const tomany = multiply(2, 3, 12, "banana", () => "wtf");
console.log(tomany);
//IIFE
(function nameFuntion() {
  console.log("hello word");
})();
//scope
let popPurlarFruit23 = {}; // phải khai báo 1 mảng trước
popPurlarFruit23["hehe"] = () => console.log("hahaha");
popPurlarFruit23.hehe();
let popPurlarFruit2 = "bababab";
function nameFunstion1() {
  popPurlarFruit2 = "new change";
}
nameFunstion1();
console.log(popPurlarFruit2);
//scope trong js
function fuilocger() {
  if (true) {
    const es6 = "haha";
    let oldes6 = "hehe";
    var oldes61 = "hihi";
  }
  // console.log(es6);
  // console.log(oldes6);
  console.log(oldes61);
}
fuilocger();
//window trong js nó tác động trực tiếp đến win dow
window.myName = "Eric";
console.log(window.myName);
function nameFuntion4() {
  function evenDeepScore() {
    windowVar = "Im on the window";
  }
  evenDeepScore();
}
nameFuntion4();
console.log(window.windowVar);
//closures gộp các  funtion vào trong 1 funtion cha và có thể sử dụng biến toàn cục của lớp cha
function couter1() {
  let couter = 0;
  const plus = function () {
    couter++;
  };
  plus();
  return couter;
}
console.log(couter1());
//Context, this
//contenxt laf bieens dai dien cho funtion
// this laf daij dien cho funtion cuar no goi toi cac bien ba khai bao tu truoc
const noraTheCat = {
  name: "hihih",
  color: "black",
  whatMyName: function () {
    console.log(this.color);
  },
};
noraTheCat.whatMyName();
// hai funtion khác nhau có thể gọi đến nhau
function doTwice(func) {
  func();
}

const noraTheCat1 = {
  name: "Nora",
  color: "orange",
  whatsMyName: function () {
    console.log(this.name);
  },
};
//   doTwice(noraTheCat1.whatsMyName());// báo lỗi vì không thể truy cập vào funtion của nó
doTwice(noraTheCat1.whatsMyName.bind(noraTheCat1));
// bind : dùng để gọi đến thuộc tính của 1 funtion khác
//Prototypes and Inheritance
//prototypes
function Animal(name) {
  this.name = name;
} // funtion đại diện cho1 class chứa thuộc tính để kế thức thừa

Animal.prototype.greet = function () {};
//tại ra 1 lớp cha greet để kế thừa thuộc tính của lớp animal

function Cat(name, breed) {
  Animal.call(this, name);
  // animal gọi để lấy tên của lớp cha
}
//tạo ra 1 lớp cat để lấy lên  tên của lớp cha
Cat.prototype = Object.create(Animal.prototype);

const nora = new Cat("nora");

nora.greet();

function Man(name) {
  this.name = name;
  this.sty;
}
Man.prototype.getName = function () {
  console.log("hello các bạn" + this.name);
};

function dog(name) {
  Man.call(this, name); // hàm call để gọi đến funtion để lấy name ra
}

dog.prototype = Object.create(Man.prototype); // object.create là object sử dụng 1 đối tượng có sẳn để tạo ra đối tượng mới
const layName = new dog("hehehe"); // phải tạo ra đối tượng chưa tên là hehehehe
layName.getName();
//contructor , super

class Animal3 {
  constructor(name) {
    this.name = name;
  }
  pur() {
    return "this is pur"+this.name;
  }
}

class Cat1 extends Animal3 {
  constructor(name) {
    super(name);
   
  }
}
const cat3=new Cat1('hehe');
console.log(cat3.pur());
function Man1 (name) {
  this.name=name;

}
Man1.prototype.myMan1=function () {
  console.log("this is my main1" +this.name);
}
//muốn pig có các thuộc tính của Mân1
function pig(name) {
  Man1.call(this,name);
}
// tạo 1 đối tượng mới sử dụng lại đối tượng pig cũ
pig.prototype=Object.create(Man1.prototype)
const layName1=new pig("hêje");
layName1.myMan1();
class Man2{
  constructor(name){
    this.name=name;
  }
  purr(){
    return "this is adasda"+this.name;
  }
}
class Man3 extends Man2{
  constructor(name){
    super(name);
  }
}
const Man4 =new Man3("hhehe");
console.log(Man4.purr());
// //Promise trong javascrip
// // let  isDadyHappy=false;
// // let willLetNewToy =new Promise( function a(resolve,reject){
// //   if(isDadyHappy){
// //     resolve(toy);
// //   }else {
// //     reject("asdasdasd")
// //   }
// })
let timeOutLogger= new Promise(resolve => setTimeout(resolve,500));
timeOutLogger.then(()=> console.log("hello wword"));
timeOutLogger.catch("error")
