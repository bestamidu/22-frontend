let number = [ 2 ,5,7 ,4 ,1 , 8 , 6];
let start = Number(prompt(" moi ban nhap so"));
let check = false;
for(let i =0 ; i <= number.length -1 ; i++){
    if( number[i] == start){
        console.log("Bingo");
       check = true;
        break;
    }
   if(!check) {
    console.log("Chúc bạn may mắn lần sau");
   }
}
      
