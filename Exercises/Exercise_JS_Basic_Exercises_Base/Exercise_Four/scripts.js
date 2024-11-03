data();
function data(){
    let input=prompt("Input your birthdate with the following format 'MM/DD/YYYY:'");
    let birthday=new Date(input.split("/"));
    var today=new Date();
    let difference=today.getTime()-birthday.getTime();
    let differenceInDays=Math.round(difference/(1000*3600*24));
    console.log("The number of days between " +
        birthday.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+
        " and " +
        today.getDate()+"/"+today.getMonth()+"/"+today.getFullYear()+
        " is "+
        differenceInDays + " days."
     );
}