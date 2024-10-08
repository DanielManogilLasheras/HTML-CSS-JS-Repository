var xhr=new XMLHttpRequest();
var url='./health.json';
/*We need to prepare a GET request to the specified URL, which is the url saved 
in asynchronous mode.
-GET: Specifies the HTTP method used for the request.
-URL: Represents the URL from where you will fetch the data.
-True: Indicates if the request i asynchronous (true) or asynchronous(false).
*/
xhr.open('GET',url,true);
//Informing the XMLHttpRequest object that the expected response from the server should be in JSON format
xhr.responseType='json';
//Defining what should happen whe the data is successfully loaded
xhr.onload=function(){
    //Getting the articles array.
    var articles=xhr.response.articles;
    var articlesDiv=document.getElementById('articles');
//Construction of iteration of health data to fetch on the front page using loops.
articles.forEach(function(article){
    var articleDiv=document.createElement('div');
    articleDiv.classList.add('article');

    var title=document.createElement('h2');
    title.textContent=article.title;
    
    var description=document.createElement('p');
    description.textContent=article.description;

    var waysHeader=document.createElement('h3');
    waysHeader.textContent='Ways to Achieve';

    var waysList=document.createElement('ul');
    article.ways_to_achieve.forEach(function(way){
        var listItem=document.createElement('li');
        listItem.textContent=way;
        waysList.appendChild(listItem);
    });
    var benefitsHeader=document.createElement('h3');
    benefitsHeader.textContent='Benefits';

    var benefitsList=document.createElement('ul');
    article.benefits.forEach(function(benefit){
    var listItem=document.createElement('li');
    listItem.textContent=benefit;
    benefitsList.appendChild(listItem);
    });
    articleDiv.appendChild(title);
    articleDiv.appendChild(description);
    articleDiv.appendChild(waysHeader);
    articleDiv.appendChild(waysList);
    articleDiv.appendChild(benefitsHeader);
    articleDiv.appendChild(benefitsList);
    articlesDiv.appendChild(articleDiv);
});
};
//Sending the XMLHttpRequest to fetch the data from the specified URL and include the give code at the end of the JS FIle
xhr.send();