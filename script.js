function showAddNewBookMsg(){
        document.getElementById("addBookMsg").style.opacity = 1;
        document.getElementById("addBookMsg").style.marginLeft = 0;
        document.getElementById("body").style.backgroundColor = "#908e9f";
        document.getElementById("addBook_menu").style.cssText ="border-radius: 3px;background: linear-gradient(145deg, #8b8999, #a5a3b6);box-shadow:  3px 3px 6px #8f8d9e,-3px -3px 6px #a5a3b6;";
    }
function hideAddNewBook(){
    document.getElementById("addBookMsg").style.opacity = 0;
    document.getElementById("addBookMsg").style.marginLeft = "100%";
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("addBook_menu").style.cssText ="border-radius: 3px;background: linear-gradient(145deg, #ffffff, #e6e6e6);box-shadow:  3px 3px 6px #ededed,-3px -3px 6px #ffffff;";
}

var x = document.getElementById("addBook_menu");
x.addEventListener("click", showAddNewBookMsg);


var y = document.getElementById("exit_btn");
y.addEventListener("click", hideAddNewBook);

var z = document.getElementById("addBook_Btn");  
z.addEventListener("click", addBookToLibrary);



let library = [];

function book (title, author, pages, readStatus, id){
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.readStatus = readStatus;
    this.id = id;
}

function addBookToLibrary(){
     var inputTitle, inputAuthor, inputpages, inputReadStatus;


     book.title = document.getElementById("title").value;
     book.author = document.getElementById("author").value;
     book.pages = document.getElementById("pages").value;
     book.readStatus = document.getElementById("readStatus").value;
     book.id = library.length + 1;
     let i = book.id - 1;


     library.push([book.title, book.author, book.pages, book.readStatus, book.id] );

   
         //create the div elements for the book
        let object = document.createElement("div");


        const newTitle = document.createElement("h2");
        const newAuthor = document.createElement("h3");
        const newPages = document.createElement("p");
        const newStatus = document.createElement("button");
        const newDelete = document.createElement("button");

        const insertTitle = document.createTextNode (library[i][0]);
        const insertAuthor = document.createTextNode (library[i][1]);
        const insertPages = document.createTextNode (library[i][2]);
        const insertStatus = document.createTextNode (library[i][3]);
        const insertDelete = document.createTextNode("DELETE");

        object.setAttribute('id', i, 'value', i);
        newTitle.setAttribute('id', 'BO_Title');
        newAuthor.setAttribute('id', 'BO_Author');
        newPages.setAttribute('id', 'BO_Pages');
        newStatus.setAttribute('id', 'BO_Status');
        newDelete.setAttribute('id', 'BO_Delete')

        newTitle.appendChild(insertTitle);
        newAuthor.appendChild(insertAuthor);
        newPages.appendChild(insertPages);
        newStatus.appendChild(insertStatus);
        newDelete.appendChild(insertDelete);
        
        object.appendChild(newTitle);
        object.appendChild(newAuthor);
        object.appendChild(newPages);
        object.appendChild(newStatus);
        object.appendChild(newDelete);

        const bookContainer = document.getElementById("bookContainer");

        bookContainer.appendChild(object);

     inputTitle = document.getElementById("title").value ="";
     inputAuthor = document.getElementById("author").value ="";
     inputpages = document.getElementById("pages").value ="";
     inputReadStatus = document.getElementById("readStatus").value ="";

}

if(library.length != null){

let bookObjectDelete = document.getElementById('BD_Delete');

bookObjectDelete.addEventListener('click', function(event){
    console.log(event.target.parentNode.id);


}
