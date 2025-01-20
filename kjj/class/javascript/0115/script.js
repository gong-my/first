const currentTime = new Date();
const year = currentTime.getFullYear();
const month = currentTime.getMonth() + 1; 
const day = currentTime.getDate();
const hour = currentTime.getHours();
const minute = currentTime.getMinutes();
const period = hour >= 12 ? '오후' : '오전';




console.log(`지금은 ${year}년 ${month}월 ${day}일 ${period} ${hour}시 ${minute}분 입니다.`);

function calculateArea(a, b, c) {
    const s = (a + b + c) / 2;
    return Math.sqrt(s * (s - a) * (s - b) * (s - c));
}

const area = calculateArea(5, 6, 7);
console.log(`삼각형의 면적은 ${area.toFixed(2)}입니다.`);






function isLeapYear(year) {
    if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
        return true;
    }
    return false;
}

const year = parseInt(prompt("연도를 입력하세요: "));
if (isLeapYear(year)) {
    alert(`${year}년은 윤년입니다.`);
} else {
    alert(`${year}년은 윤년이 아닙니다.`);
}

for (let year = 2014; year <= 2050; year++){

}