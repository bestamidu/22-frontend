let number = [];
let soLE = 0;
let soChan = 0;
for ( let i =0 ; i< 5 ; i++ ){
    number.push(Math.floor(Math.random() * 100) + 1);
    if(number[i] %  2 ===0 ){
        soChan += number[i];
    }else {
        soLE += number[i];
    }
}
console.log(`tong cac so chan la ${soChan}`);
console.log(`tong cac so le la ${soLE}`);


