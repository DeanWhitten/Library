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


     inputTitle = document.getElementById("title").value;
     inputAuthor = document.getElementById("author").value;
     inputpages = document.getElementById("pages").value;
     inputReadStatus = document.getElementById("readStatus").value;

     console.log( inputTitle, inputAuthor, inputpages, inputReadStatus);

     inputTitle = document.getElementById("title").value ="";
     inputAuthor = document.getElementById("author").value ="";
     inputpages = document.getElementById("pages").value ="";
     inputReadStatus = document.getElementById("readStatus").value ="";

}





