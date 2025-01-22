/* 2번문제
let pd = 1;
for(let i = 1; i <= 10; i++){
    pd*=i;
}
console.log("1부터 10까지의 곱은 : " + pd);
*/
/*3번문제
console.log("1부터 50까지의 수 중 3의 배수 :");

for(let i=1; i<=50; 1++){
    if(i % 3 == 0) console.log(i);
}
   
let str ="변수";


console.log(`변수와 ${str} 스트링을 같이 쓰는 법`);
 4번문제
함수 -1 
function addfun(a,b){
    return a * b;
}
console.log(addfun(9,149));

let count =0;

myFunc(); //1.실행될까?

function myFunc(){
        count++;
        console.log("hello" + count);
}

myFunc(); //2. 둘 다 실행된다 위에놓든 아래에 놓든 - 함수의 호이스팅

let tv = new Object();
tv. color = "흰색";
tv. price = "5백만원";
tv. size = "100인치";
tv. info - function(){
        console.log("tv 색상 : "+ this.color);
        console.log("tv 크기 : "+ this.size);
}
tv.info();
 */
const date= new Date(2002, 4, 31);
const daysofweek = ['일','월','화','수','목','금','토'];
const dayofweek = daysofweek[date.getDay()];
console.log(`${date.getFullYear()}년 ${date.getMonth() + 1}월 ${date.getDate()}일(${dayofweek})날 월드컵이 개최되었습니다.`);

