iteratingArray();
function iteratingArray(){
    const ages = [19, 22, 19, 24, 20, 25, 26, 24, 25, 24];
    ages.sort((a,b) => a-b);
    console.log(ages[0]);
    console.log(ages[ages.length - 1]);
    let result=0;
    ages.forEach(element => {
        result+=element;
    });
    console.log(result/ages.length);
}