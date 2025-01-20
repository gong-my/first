let userInfo = new Array(1,"이박사", 35, "개발연구원", "김포");

let d = new Array();
d[0] = 30;
d[1] = "따르릉";
d[2] = true;



for(let i=0; i < userInfo.length; i++){
    console.log(userInfo[i]);
}
//향상된 for문
for(let user of userInfo) {
    console.log(user);
}