let a = 221; //변수 선언할 땐 let을 사용
let b = a - 5;
const c = 5;    //상수 선언
let what = "nicolas";

//배열선언
const daysOfWeek = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];
//오브젝트 선언, 파이썬의 딕셔너리
const seyoinfo = {
    name:"Seyo",
    age:33,
    gender:"Male",
    isHandome:true,
    favMovies: ["Along the gods", "Oldboy"], //오브젝트 안에 배열삽입도 가능
    favFood: [                                 //오브젝트안에 오브젝트도 삽입 가능
        {
            name:"Kimchi", 
            fatty: false
        }, 
    {
        name: "burger", 
        fatty: true
    }
]
}

function sayHello(name, age){
    console.log('Hello', name);
     //예전 + 문법대신 ``와 ${}로 중간에 변수를 넣음
    return console.log(`Hello ${name} you are ${age} years old`)  
}
sayHello("seyeong", 25);
console.log(daysOfWeek[2]);
console.log(seyoinfo.gender);
seyoinfo.gender = "Female"  //const로 선언했어도 안에 값은 변경할 수 있다.
console.log(seyoinfo.favFood[0]);

const greetSeyeong = sayHello("seyeong", 14)
console.log(greetSeyeong);

//클래스
const calculator = {
    plus: function(a, b){
        return a + b;
    }
}
const plus = calculator.plus(5,5);
console.log(plus);