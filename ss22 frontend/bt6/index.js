let number = [2, 5, 7, 4, 1, 8, 6, 2, 5, 7];
let count=0;
let nhapSo = Number(prompt("nhap so"));
for ( let i =0 ; i< number.length ; i++){
    if( number[i] == nhapSo){
       count++;
    }
}
if (count > 0) {
    alert(`Số ${number} xuất hiện ${count} lần trong mảng.`);
} else {
    alert(`Số ${number} không có trong mảng.`);
}
