let arr1= ["사당", "교대", "방배", "강남"];
let arr2 = [ "신사", "압구정", "옥수"];

let result = arr1.join("->");
console.log(result);

result = arr1.slice(1,3); //1번 인덱스를 자르고 3번까지 출력 그래서 1번은 안나오고 2번이랑 3번만 출력
console.log(result);

arr1.sort();
console.log(arr1);

arr1.reverse();
console.log(arr2);
