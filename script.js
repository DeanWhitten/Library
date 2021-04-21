function showAddNewBookMsg(){
        document.getElementById("addBookMsg").style.opacity = 1;
        document.getElementById("addBookMsg").style.marginLeft = 0;
        document.getElementById("body").style.backgroundColor = "#908e9f";
        document.getElementById("addBook_menu").style.cssText = "border-radius: 3px;background: linear-gradient(145deg, #8b8999, #a5a3b6);box-shadow:  3px 3px 6px #8f8d9e,-3px -3px 6px #a5a3b6;";
}

function hideAddNewBook(){
    document.getElementById("addBookMsg").style.opacity = 0;
    document.getElementById("addBookMsg").style.marginLeft = "100%";
    document.getElementById("body").style.backgroundColor = "#ffffff";
    document.getElementById("addBook_menu").style.cssText = "border-radius: 3px;background: linear-gradient(145deg, #ffffff, #e6e6e6);box-shadow:  3px 3px 6px #ededed,-3px -3px 6px #ffffff;";
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

function render(){
    const display = document.getElementById('bookContainer');
    const books = document.querySelectorAll('.books');

    books.forEach(books => display.removeChild(books));

    for(let i = 0; i < library.length; i++){
        addBookToLibrary(library[i]);
    }
}

function addBookToLibrary(item){

     book.title = document.getElementById("title").value;
     book.author = document.getElementById("author").value;
     book.pages = document.getElementById("pages").value;
     book.readStatus = document.getElementById("readStatus").value;
     book.id = library.length + 1;
     let b = book.id - 1;

     library.push([book.title, book.author, book.pages, book.readStatus, book.id] );

         //create the div container for each book
        let object = document.createElement("div");

        // creates new elements for each section of a new book's info
        const newTitle = document.createElement("h2");
        const newAuthor = document.createElement("h3");
        const newPages = document.createElement("p");
        const newStatus = document.createElement("button");
        const newDelete = document.createElement("button");

        //Takes in User Data and inerts it into the DOM elements created above
        const insertTitle = document.createTextNode (library[b][0]);
        const insertAuthor = document.createTextNode (library[b][1]);
        const insertPages = document.createTextNode (library[b][2]);
        const insertStatus = document.createTextNode (library[b][3]);
        const insertDelete = document.createTextNode("DELETE");

        //Assigns IDs to the section of a new book object
        object.setAttribute('class', 'books', 'id', library.indexOf(item));
        newTitle.setAttribute('id', 'BO_Title');
        newAuthor.setAttribute('id', 'BO_Author');
        newPages.setAttribute('id', 'BO_Pages');
        newStatus.setAttribute('id', 'BO_Status');
        newDelete.setAttribute('id', 'BO_Delete')

        //Inserts the dataretrived from user into the elements created
        newTitle.appendChild(insertTitle);
        newAuthor.appendChild(insertAuthor);
        newPages.appendChild(insertPages);
        newStatus.appendChild(insertStatus);
        newDelete.appendChild(insertDelete);
        
        //Puts the new elements with the data connected into the book object
        object.appendChild(newTitle);
        object.appendChild(newAuthor);
        object.appendChild(newPages);
        object.appendChild(newStatus);
        object.appendChild(newDelete);

        const bookContainer = document.getElementById("bookContainer");
        
        //THe magic sause that actually puts the new book on the page 
        bookContainer.appendChild(object);

    // Resets the form to black inputs - TEMP felt smart might refactor later into a function ;w;
     //inputTitle = document.getElementById("title").value ="";
     //inputAuthor = document.getElementById("author").value ="";
     //inputpages = document.getElementById("pages").value ="";
     //inputReadStatus = document.getElementById("readStatus").value ="";



  

     //Deletes books
     newDelete.addEventListener('click', () => {
         library.splice(library.indexOf(item),1);
         render();
     });

}

