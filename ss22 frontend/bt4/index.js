let number=prompt("Moi ban nhap day so ");
let check = true;
for (let i = 0 ; i< number.length ; i++){
    if( number[i] < '0' || number[i] > '9'){
        check = false;
        break;
    }
}
if(check){
    let arrNew = number.split("");
    let max = arrNew[0];
    for( let i = 1 ; i < arrNew.length ; i++){
        if(arrNew[i] > arrNew[0]){
            max = arrNew[i];
        }
    }
    console.log(` so lon nhat trong day la ${max}`);
}else {
    console.log(" day so nay khong dung dinh dang");
}