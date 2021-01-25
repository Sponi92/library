let wholeLibrary=(function(){
	let library=[];
storedLibrary=localStorage.getItem("storageLibrary");
storedLibrary = JSON.parse(storedLibrary);
const button=document.getElementById("newbook");
const title=document.getElementById("title");
const author=document.getElementById("author");
const pages=document.getElementById("pages");
const bookButton=document.getElementById("newBook");
const button1=document.getElementById("yes");
const button2=document.getElementById("no");
const submitButton=document.getElementById("submit");
const closeButton=document.getElementById("close");

// constructor to create Books
function book(title, author, pages, status) {
		this.title = title;
		this.author = author;
		this.pages = pages;
		this.status = status;
		this.info = function info(library) { return (library.title + " by " + library.author + ", " + library.pages + " pages, " + library.status)};
	}

//check if there are books stored locally and add them to the library
(function () {
	if (storedLibrary === null || storedLibrary[0] === null) {
		return;
	}
	else {
		for (let i = 0; i < storedLibrary.length; i++) {
			newBook =
				new book(storedLibrary[i].title, storedLibrary[i].author, storedLibrary[i].pages, storedLibrary[i].status);
			addBookToLibrary(newBook);
			displayBook(library);
		}
	}
})();

bookButton.addEventListener("click", openForm);

//display the book you entered via submitbutton
submitButton.addEventListener("click", function() {
	getBook();
	if (bookTitle==="" || bookAuthor==="" || bookPages ===""){
		clear();
		alert("There's something missing!")
		return;
		}
	else {
		newBook= new book(bookTitle, bookAuthor, bookPages,readStatus);
	addBookToLibrary(newBook);
	displayBook(library);
	clear();
	closeForm();
	}
});
//get the book out of the user inputs
function getBook(){
	bookTitle=title.value;
	bookAuthor=author.value;
	bookPages=pages.value;
	if (button1.checked){
		readStatus=button1.value;
	}
	else {
		readStatus=button2.value;
		
	}
}

closeButton.addEventListener("click", closeForm);

function closeForm() {
	document.getElementById("myForm").style.display = "none";
}

function addBookToLibrary(book){
	library.push(book);
}
//display the books on the page
function displayBook(books) {
	document.getElementById("div1").innerHTML="";
	for (let i=0; i<books.length; i++){
		newElement=document.createElement("div");
		newElement.textContent=	library[i].info(library[i])
		newElement.setAttribute("data-index",i);
		newElement.classList.add("books");
		newButton= document.createElement("BUTTON");
		newButton.textContent="Delete";
		newButton.setAttribute("data-index",i);
		newButton.classList.add("delete");
		newButton.addEventListener("click", deleteBook);
		newStatus= document.createElement("BUTTON");
		newStatus.textContent="Change Status";
		newStatus.setAttribute("data-index",i);
		newStatus.classList.add("change");
		newStatus.addEventListener("click", changeStatus);
		document.getElementById("div1").appendChild(newElement);
		document.querySelector('[data-index="' + i + '"]').appendChild(newButton);
	document.querySelector('[data-index="' + i + '"]').appendChild(newStatus);
									
}
// displayLength.statSetter;
		}
		
function openForm() {
	document.getElementById("myForm").style.display = "block";
}



//clear the form
function clear(){	
	title.value="";
	author.value="";
	pages.value="";
	button1.checked="true";
}
//delete a book from the library
function deleteBook(event){
	let x;
	if (typeof event==="number") {
		x=event;
	}
	else{
	x=event.target.getAttribute("data-index");
	}
	library.splice(x,1);
	displayBook(library);
}
//change the read status of a book
function changeStatus(event) {
	let x=event.target.getAttribute("data-index");
	
	if (library[x].status==="read"){
		library[x].status="not read";
		}
	else {
		library[x].status="read"
		}
	displayBook(library);
	}
	
//save the files to local storage before the website closes
window.onbeforeunload = function(){
	localStorage.setItem('storageLibrary', JSON.stringify(library));
}
return {
	deleteBook: deleteBook,
	library: library.length,
}
})();