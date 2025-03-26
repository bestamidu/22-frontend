let arr = [ 2,5,6,4,55,3,44,22,56,9];
let size = arr.length;
for(let i =0 ; i< size-1 ; i++ ){
    for(let j =0 ; j< size-1-i ; j++ ){
              if( arr[j] > arr[j+1]){
                let temp = arr[j];
                arr[j]= arr[j+1];
                arr[j+1] =temp;
              }
    }
}
let newNumber = parseInt(prompt("Nhập số cần thêm vào cuối mảng: "));
arr.push(newNumber);
console.log(` mang sau khi duoc sap xep la ${arr}`);