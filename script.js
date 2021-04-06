function showAddNewBookMsg(){
        document.getElementById("addBookMsg").style.opacity = 1;
        document.getElementById("addBookMsg").style.marginLeft = 0;
    }
function hideAddNewBook(){
    document.getElementById("addBookMsg").style.opacity = 0;
    document.getElementById("addBookMsg").style.marginLeft = "100%";
}

var x = document.getElementById("addBook_btn");
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
    document.getElementById("addBookMsg").style.backgroundColor = "orange";
}





