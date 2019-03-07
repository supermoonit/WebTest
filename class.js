let foo = new Object()

foo.name = 'foo';
foo.age = 30;
foo.gender = 'male';

console.log(typeof foo);
console.log(foo);
console.log("------------------------------");


let fool = {
    name: 'foo',
    age:30,
    gender:'male',
    print: function() {console.log(`${this.name}:${this.age}:${this.gender}`);}
};
console.log(typeof fool);
console.log(fool);
console.log(fool.print());
console.log(fool.toString());
console.log("-------------------------------");

//생성자 함수
let Person = function(name){
    this.name = name;
};

foo = new Person('foo');
console.log(foo.name);
console.log("------------------------------");

function Person2(name, age, gender, position){
    this.name = name;
    this.age = age;
    this.gender = gender;
}
console.log(typeof Person2);

let bar = new Person2('bar', 33, 'woman');
console.log(typeof bar);
console.dir(bar);
let baz = new Person2('baz', 25, 'woman');
console.log(typeof baz);
console.dir(baz);
console.log("------------------------------");

class Person3 {
    constructor(name, age, gender){
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
}
bar = new Person3('bar', 33, 'woman');
baz = new Person3('baz', 25, 'woman');
console.dir(bar);
console.dir(baz);
console.log("-----------------------------");

class Car{
    constructor(make, model){
        this.make = make;
        this.model = model;
        this._userGears = ['P', 'N', 'R','D'];
        this._userGear = this._userGears[0];
    }

get_userGear() {return this._userGear;}
set_userGear(gear){
    if (this._userGears.indexOf(gear)<0){
        console.log(`Error : Invaild gear ${value}`);
    }
    this._userGear = gear;
}
//interface 일반 method
shift(gear){
    this.set_userGear(gear);
    /*
    if (this._userGears.indexOf(gear)<0){
        console.log(`Error : Invaild gear ${gear}`);
    }
    this._userGear = gear;
    */
}
toString(str){
    return `|${this.make}|${this.model}|}`
}
}

let car1 = new Car("Tesla", "Model S");
let car2 = new Car("Mazda", "3i");

car1.shift('D');
car2.shift('R');

console.log(car1.get_userGear());
console.log(car2.get_userGear());
console.log("-----------------------------");
function create_object(o){
    function F() {}
    F.prototype = o;

    return new F;
}
person = {
    name: "zzoon",
    getName: function() {return this.name;},
    setName: function(arg) {this.name = arg;}
};
var student = create_object(person);
student.age = 28;
student.getAge = function() {return this.age};

console.log(student);
console.log(student.getName());
console.log(student.getAge());

student.setName("me");
student.toString = function() {return `|${this.name}|`};
console.log(student);
console.log(student.toString());
console.log("--------------------------------");

class Bus extends Car{
    constructor(make, model, personnel){
        super(make, model);
        this.personnel = personnel;
        console.log("Bus Create!!!");
    }
    toString() {
        let str = super.toString();
        str += `${this.personnel}|`;
        return str;
    }
}
let bus = new Bus("Hyundai", "Bus", 40);
console.log(bus);
console.log(bus.toString());
