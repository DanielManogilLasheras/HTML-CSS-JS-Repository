iteratingArray();
function iteratingArray(){
    let array=[];
    for(let i=0;i<20;i++){
        array.push(Math.floor(Math.random() * 20));
    }
    console.log('operation');
    array.forEach(element => {
        if(element % 2 === 0) console.log(element);
    });
    console.log('operation');
    array.forEach(element => {
        console.log(element);
    });
    console.log('operation');
    console.log(Math.max(...array));
    console.log('operation');
    console.log(Math.min(...array));
    console.log('operation');
    let result=0;
    array.forEach(element => {
        result+=element;
    });
    console.log(result/array.length);
}