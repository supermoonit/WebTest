//1. 1~10000사이의 3의배수와 5의배수 개수를 출력하는 프로그램
console.log("------------------------------------");
console.log();

var count_3 = 0;
var count_5 = 0;
for ( var i = 1; i <= 10000; i++ ) {
    if ( i % 3 == 0 ) {
        count_3++;
    } else if ( i % 5 == 0 ) {
        count_5++;
    }
}
console.log( `3의 배수와 5의 배수의 갯수 : ${count_3 + count_5}`);

console.log();
console.log("------------------------------------");
//2. 20개의 data를 배열에 저장한후 양수/음수, 양수일때 짝수/홀수 개수를 출력하는 프로그램(배열사용)
console.log("------------------------------------");
console.log();

var random_arr = [];
for ( var i = 0; i < 20; i++ ) {
    random_arr[i] = Math.floor( ( Math.random() * ( -200 ) ) ) + 100;
    if ( random_arr[i] >= 0 ) {
        if ( random_arr[i] % 2 == 0 ) {
            console.log( `${random_arr[i]}는 양수이며 짝수입니다.`);
        } else {
            console.log( `${random_arr[i]}는 양수이며 홀수입니다.`);
        }
    } else {
        console.log( `${random_arr[i]}는 음수입니다.`);
    }
}

console.log();
console.log("------------------------------------");
//3. 구구단을 출력하는 프로그램(2~9)
console.log("------------------------------------");
console.log();

var gugudan = [ 2, 3, 4, 5, 6, 7, 8, 9 ];
for ( var dan of gugudan ) {
    console.log( `  ${dan} 단` );
    for ( var i = 1; i <=9; i++) {
        console.log( `${dan} x ${i} = ${dan * i}` );
    }
    console.log();
}

console.log();
console.log("------------------------------------");
//4. 10명의 학생 성적을 출력하는 프로그램(object 사용)
//  hong    50  50  50  150 50.0    Fail
//  kim     90  90  90  270 90.0    Excellent
//  lee     70  70  70  210 70.0    Normal
console.log("------------------------------------");
console.log();

var student = [ { name: 'hong', kor: 50, eng: 50, math: 50 },
                { name: 'kim', kor: 90, eng: 90, math: 90 },
                { name: 'lee', kor: 70, eng: 70, math: 70 } ];
for ( var arr of student ) {
    var total = arr['kor'] + arr['eng'] + arr['math'];
    var avrg = total / ( Object.keys(arr).length - 1 );
    var eval = 0;
    var rank = 0;
    if ( avrg >= 90 ) {
        eval = "Excellent";
    } else if ( avrg >= 70 ) {
        eval = "Normal";
    } else if ( avrg <= 50 ) {
        eval = "Fail";
    }
    rank >

}
    console.log( `${arr['name']}\t${arr['kor']}\t${arr['eng']}\t${arr['math']}\t${total}\t${avrg.toFixed(1)}\t${eval}` );

console.log();
console.log("------------------------------------");
