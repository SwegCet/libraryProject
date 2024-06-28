const myLibrary = []; //Empty Library Array


// This is the constructor
function Book(name, author, pages, read) {
    this.name = name;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

//This function loops through the array and displays each book on their own card
function addBookToLibrary() {
    //Declare variables from html elements
    const title = document.querySelector('.bookTitleInput').value;
    const author = document.querySelector('.bookAuthorInput').value;
    const pages = document.querySelector('.bookPagesInput').value;
    const check = document.querySelector('.bookReadInput').checked;
    //Check if the inputs were filled
    if (title && author && pages) {
        //If everything is filled, populate the array
        newBook = new Book(name, author, pages, read);
        myLibrary.push(newBook);
        displayBook();
        //Clear form for user
        bookForm.reset()
    }
    else {
        alert('Please fill in boxes')
    }
    //Need a Display function to display the new book
    function displayBook() {
        //Loops through the array to display each book
        myLibrary.forEach((newBook, index) => {

        });

        //Last thing to do is appendChild into card
    }
}
