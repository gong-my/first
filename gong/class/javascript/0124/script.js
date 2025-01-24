const today = new Date();
const cmas = new Date(today.getFullYear(), 11, 25);

if (today.getMonth() == 11 && today.getDate() > 25) {
  console.log("크리스마스는 이미 지났어요");
}
console.log(
  "크리스마스까지" +
    Math.ceil((cmas.getTime() - today.getTime()) / (1000 * 60 * 60 * 24)) +
    "남았습니다"
);

function cTOf(celsius) {
  let cTOfahr = (celsius * 9) / 5 + 32;
  console.log(celsius + "는 화씨로는" + cTOfahr + "입니다")
}
cTOf(0);
