iteratingArray();
function iteratingArray(){
    let array=[1,2,3,4,5,6,7,8,9,10];
    let result=0;
    for(let i=0;i<array.length;i++){
        result+=array[i];
    }
    result=result/array.length;
    console.log(result);
}