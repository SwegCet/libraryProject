const myLibrary = []; //Empty Library Array

//This is a class
class Book {
    constructor(title, author, pages, read) {
        this.title = title;
        this.author = author;
        this.pages = pages;
        this.read = read;
    }
}

//This function loops through the array and displays each book on their own card
function addBookToLibrary() {
    //Declare variables from html elements
    const title = document.querySelector('.bookTitleInput').value;
    const author = document.querySelector('.bookAuthorInput').value;
    const pages = document.querySelector('.bookPagesInput').value;
    const read = document.querySelector('.bookReadInput').checked;
    //Check if the inputs were filled
    if (title && author && pages) {
        //If everything is filled, populate the array
        const newBook = new Book(title, author, pages, read);
        myLibrary.push(newBook);
        displayBook();
        //Clear form for user
        const bookForm = document.querySelector("#bookForm")
        bookForm.reset()
    }
    else {
        alert('Please fill in boxes')
    }
    //Need a Display function to display the new book
    function displayBook() {
        //Select the Display Div so that it displays the cards there
        const display = document.querySelector('.display');

        //Clear previous content
        display.innerHTML = '';

        //Loops through the array to display each book
        myLibrary.forEach((newBook, index) => {
            //Need to create new elements to display the userInput cards
            //Populate these "new" elements with the userInput (Objects)
            // Create Card
            const card = document.createElement("div");
            card.className = 'card';

            const titleDisplay = document.createElement("div");
            titleDisplay.className = 'title';
            titleDisplay.textContent = newBook.title;

            const authorDisplay = document.createElement("div");
            authorDisplay.className = 'author';
            authorDisplay.textContent = newBook.author;

            const pagesDisplay = document.createElement("div");
            pagesDisplay.className = 'pages';
            pagesDisplay.textContent = `${newBook.pages} Pages`;

            const readContainerDisplay = document.createElement("div");
            readContainerDisplay.className = 'read-container';

            const labelDisplay = document.createElement("label");
            labelDisplay.setAttribute('for', `read-${index}`)
            labelDisplay.textContent = "Read: ";

            const readDisplay = document.createElement("input")
            readDisplay.type = "checkbox";
            readDisplay.className = 'read';
            readDisplay.name = `read-${index}`;
            readDisplay.checked = newBook.read;

            //Create button to remove Book from Library
            const removeButton = document.createElement("button");
            removeButton.className = 'remove-button';
            removeButton.textContent = 'Remove Book';
            //Using addEventListner to pass the function
            removeButton.addEventListener('click', () => {
                //I think this is how I delete it
                removeButton.dataset.index = index;

                //Removing the book at the specific array
                const bookIndex = removeButton.dataset.index;
                myLibrary.splice(bookIndex, 1);

                //Call display book again to update List
                displayBook();
            });

            //Last thing to do is appendChild into card
            readContainerDisplay.appendChild(labelDisplay);
            readContainerDisplay.appendChild(readDisplay);

            card.appendChild(titleDisplay);
            card.appendChild(authorDisplay);
            card.appendChild(pagesDisplay);
            card.appendChild(readContainerDisplay);
            card.appendChild(removeButton);

            display.appendChild(card);
        });
    }
}