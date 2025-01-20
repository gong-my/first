let t = "Hello Thank you good luck to you";

//1.charat을 이용하여 16번째 인덱스에 저장된 데이터를 불러와라.
console.log(t.charAt("16")); 
//2. indecOf를 이용하여 제일먼저 발견한 you의 인덱스 값을 확인하라.
console.log(t.indexOf("you")); 
//3. 인덱스 16 이후 부터 제일 먼저 발견된 you의 인덱스 값은?
console.log(t.indexOf("you",16)); 
//4. 오른쪽 방향부터 제일 먼저 발견된 you의 인덱스 값은?
console.log(t.lastIndexOf("you")); 
//5. 인덱스 25번 부터 왼쪽 방향으로 제일먼저 발견된 you인덱스 값은?
console.log(t.lastIndexOf("you",25)); 
//6. 왼쪽부터 luck와 일치하는 문자를 찾아 반환
console.log(t.indexOf("luck"));
//7. search를 이용해 you의 인덱스 확인
console.log(t.search("you"));
//8. 문자열 인덱스 21부터 4글자를 가져오라.
console.log(t.substr(21,4));
//9. 6부터 12이전까지 문자를 가져오라.
console.log(t.substring(6,12));
//10. you를 me로 첫번째 것만 치환하라.
console.log(t.replace("you","me"));
//11. you를 me로 모두 치환하라
console.log(t.replaceAll("you", "me"));
//12. 문자열의 총 개수는?
console.log(t.length);
//13. 모두 대문자로 바꿔라.
console.log(t.toUpperCase());
//14. 모두 소문자로 바꿔라.
console.log(t.toLowerCase());
//15. 공백을 기준으로 문자를 분리한 후 배열 0번과 4번을 출력하라.
let arr = t.split(" ");
console.log(arr[0], arr[4]);
for(let i =0; i < arr.length; i++){
    console.log(arr[1].replace("you","me"));
}
//16. A의 아스키 코드값을 출력하라.
const a ="A";
const tt = a.charCodeAt(0);
console.log(tt);

//17. 아스키코드 65의 문자를 출력하라.
console.log(String.fromCharCode(65));




