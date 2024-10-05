let books=[];
function addBook(){
    const bookName=document.getElementById("bookName").value;
    const bookAuthor=document.getElementById("authorName").value;
    const bookDescription=document.getElementById("bookDescription").value;
    const bookPages=document.getElementById("bookPages");
    if(bookName && bookAuthor && bookDescription && !isNaN(bookPages)){
        const book={
            name: bookName,
            author: bookAuthor,
            description:bookDescription,
            pages:bookPages
            };
            books.push(book);
            showBooks();
            clearInputs();
    } else{
        alert("Please fill all the fields correctly");
    }
}
function showBooks(){
    const booksDiv=books.map((book,index)=>
        `<h1>Book number: ${index + 1}</h1>
        <p><strong>Book name :</strong>${book.name}</p>
        <p><strong>Book author: </strong>${book.author}</p>
        <p><strong>Book description: </strong>${book.description}</p>
        <p><strong>No. of pages</strong>${book.pages}</p>`
    );
    document.getElementById("books-list").innerHTML=booksDiv.join('');
}
function clearInputs(){
    document.getElementById("bookName").value='';
    document.getElementById("authorName").value='';
    document.getElementById("bookDescription").value='';
    document.getElementById("pageNumber").value='';
}