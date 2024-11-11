iteratingArray();
function iteratingArray(){
    const priceHouse=450000; //prompt("Insert the cost of the house");
    const moneyRequest=200000;//prompt("Insert the amount of money you request");
    const payYears=10//prompt("Insert the years in which you will pay the loan");
    const interests=0.015;
    const payMonths=parseInt(payYears)*12;
    const monthlyPayment=[];
    const monthlywithoutInterest=moneyRequest/payMonths;
    let leftToPay=moneyRequest;
    for(let i=0; i<payMonths;i++){
        let interestApplied=Math.floor(leftToPay*interests);
        monthlyPayment.push(interestApplied+monthlywithoutInterest);
        leftToPay-=monthlywithoutInterest;
    }
    let total=0;
    for(let i=0;i<monthlyPayment.length;i++){
        total+=monthlyPayment[i];
    }
    const totalPrice=Math.floor((monthlyPayment)*payMonths);
    console.log("You will pay the loan of " + total + "after interests will be paid in "+ payMonths+ " payments with a monthly payment of "+ monthlyPayment[0]);
}