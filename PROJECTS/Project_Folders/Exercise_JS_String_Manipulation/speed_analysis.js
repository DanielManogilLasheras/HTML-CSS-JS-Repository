let testText="The quick brown fox jumps over the lazy dog.";
let startTime, endTime;
function startTest(){
    //Setting the test text
    document.getElementById("inputText").value=testText;
    //Reset results and timer
    document.getElementById("output").innerHTML="";
    startTime=new Date().getTime(); 
    //Change button test and funcionality
    var button=document.getElementById("btn");
    button.innerHTML="End Test";
    button.onclick=endTest;
}
function endTest(){
    endTime=new Date().getTime();
    //Disable user Input
    document.getElementById("userInput").readOnly=true;
    //Calculate time elapsed and words per minute (WPM)
    var timeElapsed=(endTime-startTime)/1000;
    var userTypedText=document.getElementById("userInput").value
    //Splitting the text using regex to count the words properly
    var typedWords=userTypedText.split(/\s+/).filter(
        function(word){
            return word !== "";}).length;
            var wpm=0;//default
            if (timeElapsed !==0 && !isNaN(typedWords)){
                wpm=Math.round((typedWords/timeElapsed)*60);
            }
            //Displaying results
            var outputDiv=document.getElementById("output");
            outputDiv.innerHTML=
            "<h2>Displaying the results:</h2>" + 
            "<p>Words typed: " + typedWords + "</p>" + 
            "<p>Time elapsed: " + timeElapsed + "</p>" + 
            "<p>Words per Minute: " + wpm + "</p>";

            //Reseting the button
            var button=document.getElementById("btn");
            button.innerHTML="Start test";
            button.onclick=startTest;
 }