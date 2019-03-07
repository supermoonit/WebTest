sayHello();
//자바 스크립트는 선언이 위에있어도 실행이 됨
function sayHello(){
    console.log("Hello world")
}

console.log("---------------------------------------")

function getGreeting(){
    return "Hello world";
}

console.log(getGreeting());
console.log("---------------------------------------")
var message = getGreeting();
console.log(message);
console.log("---------------------------------------")

getGreeting();                  //함수호출
var f = getGreeting;            //힘수참조(reference)
console.log(f());
console.log("---------------------------------------")

var o = {}                      //초기화
o.f = getGreeting;
console.log(o.f());
console.log("---------------------------------------")

var arr = [1,2,3];
arr[1] = getGreeting;
for ( var item of arr ){
    console.log(typeof item);
}
console.log(arr[1]());
console.log("---------------------------------------")

function average(a, b){
    console.log(`a=${a} \t b=${b}`);
    return (a+b)/2;
}

console.log(average(5,10));
console.log("---------------------------------------")

var a=5, b=10;
console.log(average(a,b));
console.log("---------------------------------------")

average(5);
average();
console.log("---------------------------------------")

//함수내의 x과 함수 외의 x는 메모리영역이 다름
function func(x){
    console.log(`func내부 : ${x}`);
    x = 5;
    console.log(`func내부 : ${x}(할당 후)`);
}

var x = 3 ;
console.log(`func를 호출하기 전: x = ${x}`);
func(x);
console.log(`func를 호출한 후: x = ${x}`);
console.log("---------------------------------------")

//객체는 참조를 복사하기 때문게 값이 바뀜
function func2(o){
    console.log(o);
    o.message = `func2 안에서 수정함 (이전 값 : ${o.message})`
    console.log(o);
}

var o2 = {message : "초기 값"}

console.log(`func2를 호출하기 전 : "${o2.message}"`);
func2(o2);
console.log(`func2를 호출한 후 : "${o2.message}"`);
console.log("---------------------------------------")

function func3(o) {
    o.message = `func3에서 수정함`;
    o = {message:"새로운 객체"};
    console.log(`func3 내부 : o.message = "${o.message}"(할당후)`);
}

var o3 = {message:"초기값"};
console.log(`func3를 호출하기 전 : o.message = "${o3.message}"`);
func3(o3);
console.log(`func3를 호출한 후 : o.message = "${o3.message}"`);
console.log("---------------------------------------")

function func4(o) {
    o = {message:"새로운 객체"};
    return 0;
}

var o4 = {message:"초기값"};
console.log(`func4를 호출하기 전 : o.message = "${o4.message}"`);
o4 = func4(o4);
console.log(`func4를 호출한 후 : o.message = "${o4.message}"`);
console.log("---------------------------------------")


function getSentence({subject, verb, object}){
    return `${subject} ${verb} ${object}`;
}

var o5 = {subject:"I", verb:"love", object:"you"};
console.log(getSentence(o5));
console.log("---------------------------------------")

function getSentenceArray([subject, verb, object]){
    return `${subject} ${verb} ${object}`;
}

var arr2 = ["I","love","you"];
console.log(getSentenceArray(arr2));
console.log("---------------------------------------")

function addPrefix(prefix, ...words){
    var prefixWords = [];
    for ( var i = 0; i < words.lenth; ++i){
        prefixWords[i] = prefix + words[i];
    }
    return prefixWords;
}

function f3(a, b = "default", c = 3){
    return `${a} - ${b} - ${c}`;
}
console.log(f3(5,6,7));
console.log(f3(5,6));
console.log(f3(5));
console.log(f3());
console.log("---------------------------------------")

//메소드 표현법 bark
var o5 = {
    name: "Hong",
    bark: function() {return "Woof!";}
}
console.log(o5.name + " " + o5.bark());

var o6 = {
    name: "Kim",
    bark() {return "Woof!";}
}
console.log(o6.name + " " + o6.bark());
console.log("---------------------------------------")

var o7 = {
    name: "Park",
    speak() {return `My name is ${this.name}`;}
}
console.log(o7.speak());

var speak = o7.speak;

console.log(speak == o7.speak);
console.log(speak());
console.log("---------------------------------------")

//this 사용오류 해결(중첩함수)
var o8 = {
    name: 'Julie',
    greetBackwards: function(){
        const self = this;
        function getReverseName(){
            var nameBackwards = '';
            for(var i = self.name.length - 1; i>=0; --i){
            nameBackwards += self.name[i];
        }
        return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
    }
};
console.log(o8.greetBackwards());
console.log("---------------------------------------")

//익명함수
var f11 = function() {return "Hello!!!";}
//람다식 표현
var f11_r = () => "Hello!!!";
console.log(f11_r());

var f12 = function(name) {return `Hello ${name}`;}
var f12_r = name => `Hello ${name}`;
console.log(f11_r("Hong"));

const f13 = function(a, b) {return a+b;}
const f13_r = (a,b) => a + b;
console.log(f13_r(5,10));
console.log("---------------------------------------")

//중첩함수였던 08예 을 람다함수인 09예 로 바꿈
//09는 this가능
//익명함수는 함수인자전달, 리턴 가능! 익명함수는 함수를 변수에 담는다.
var o9 = {
    name: 'Julie',
    greetBackwards: function(){
        const getReverseName = () =>{
            var nameBackwards = '';
            for(var i = this.name.length - 1; i>=0; --i){
            nameBackwards += this.name[i];
        }
        return nameBackwards;
    }
    return `${getReverseName()} si eman ym, olleH`;
    }
};
console.log(o9.greetBackwards());
console.log("---------------------------------------")

//위와 대조되게 this의 결과가 나옴.
//WHY: 일반적으로 this를 사용하기위해 객체.--
//함수가 객체에 포함된게 아니지만 call을 사용하면 this로 사용할 객체를 전달한다.
var bruce = {name: "Bruce"};
var madeline = {name: "Madeline"};

function greet(){
    return `Hello, I'm ${this.name}`;
}

console.log(greet());
console.log(greet.call(bruce));
console.log(greet.call(madeline));
console.log("---------------------------------------")

//call/apply는 this의 객체를 임의로 사용가능
//객체의 메소드가 아니어도 일반함수에서도 객체사용이 가능하게됨 (메소드 처럼사용)
function update(birthYear, occupation){
    this.birthYear = birthYear;
    this.occpation = occupation;
}
update.call(bruce, 1949, 'singer');
console.log(bruce);
update.call(madeline, 1942, 'actress');
console.log(madeline);

update.apply(bruce, [1955, 'actor']);
console.log(bruce);
update.apply(madeline, [1918, 'writer']);
console.log(madeline);
console.log("---------------------------------------")
var xx;
function fs(xx){
    return xx + 3;
}
console.log(fs(5));
console.log(xx);

console.log("---------------------------------------")
function fs1(){
    console.log('one');
}
function fs2(){
    console.log('two');
}
fs1();
fs2();
fs1();
console.log("---------------------------------------")
//var는 선언 전에 쓸수있음 (가시성이 명확하지 않음)
//let, const는 선언전에 쓸수없음
const xxx = 3;
function fs3(){
    console.log(xxx);
    console.log(yyy);
}
{
    var yyy=5;
    fs3();
}
console.log("---------------------------------------")

let globalFunc;
{
    let blockVar = 'a';
    globalFunc = function(){
        console.log(blockVar);
    }
}
console.log(typeof globalFunc);
globalFunc();
console.log("---------------------------------------")

//?
let fs4;
{
    let o = {note: 'Safe'};
    fs4 = function() {return o;}
}
console.log(typeof fs4);
console.log(fs4());
let oRef = fs4();
console.log(typeof oRef);
oRef.note = "Not so safe after all";
console.log(oRef);
console.log("---------------------------------------")
