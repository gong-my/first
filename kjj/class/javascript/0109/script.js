const toDay = new Date();  //오늘
const thDate = new Date(2025, 5, 24 );  //25년 6월 24일 (수료일)

//수료일 까지 얼마나 며 칠 남았을까요?
/*
  1초 = 1000(msc)
  1분 = 1000 * 60
  1시간 = 1000 * 60 * 60
  1일 = 1000 * 60 * 60 *24
  1970년 부터 현재까지를 밀리초로 계산한 것 (유닉스 타임)
*/
let diffDate = thDate.getTime() - toDay.getTime();
let result = Math.ceil(diffDate / (60 * 1000 * 60 * 24));
console.log("졸업까지는 " + result + "일 남았습니다.");

/*
 본인 생일이 오늘부터 며칠 남았는지 계산해 보세요.
*/
const toDay = new Date(); 
const thDate = new Date(2025, 7, 17 );

let diffdate = thDate.getTime() - toDay.getTime();
let result = Math.ceil(diffdate/ (60 * 1000 * 60 * 24));
console.log("졸업까지는 " + result + "일 남았습니다.");