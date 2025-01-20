let greenArr = ["교대", "방배", "강남"];
let yellowArr = ["미금","정자","수서"];
//greenArr의 2번 인덱스 부터 1개의 데이터를 삭제 한 후 서초, 역삼을 삽입하자.
greenArr.splice(2, 1, "서초","역삼");

console.log(result);
//yellowArr의 마지막 인덱스의 데이터를 뽑아서 data1에 저장하자.
let data1 = yellowArr.pop();
//yellowArr의 가장 앞의 인덱스를 뽑아서 data2에 저장하자.
let data2 = yellowArr.shift();
//data1, data2, yellowArr를 출력하자.
console.log(data1);
console.log(date2);
console.log(yellowArr);

//data2를 yellowArr의 마지막 인덱스에 넣어보자.
yellowArr.push(date2);
//data1을 yellowArr의 가장 앞에 넣어보자.
yellowArr.unshift(data1);

console.log(yelloWArr);