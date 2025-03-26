let number=prompt("Moi ban nhap day so ");
if (/^\d+$/.test(number)) {
    let arrFirst ="";
    for (let i = number.length - 1; i >= 0; i--) {
        arrFirst += number[i];
    }
    console.log(`day so sau khi dc dao nguoc la ${arrFirst}`)

}else{
    console.log( `day so nay khong co ton tai`)
    }