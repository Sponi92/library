let library=[];

function book(title, author, pages, status){
	this.title=title;
	this.author=author;
	this.pages=pages;
	this.status=status;
	this.info =function(){
	return title+" by "+author+", "+pages+", "+status;
	}
}
function addBookToLibrary(x){
	library.push(x);
}
book.prototype = Object.create(addBookToLibrary.prototype)

const theHobbit= new book("The Hobbit", "J.R.R. Tolkien", "295 pages", "read");
addBookToLibrary(theHobbit);

const lotr1= new book("Lord of the Rings 1", "J.R.R. Tolkien", "323 pages", "read");
addBookToLibrary(lotr1);

const lotr2= new book("Lord of the Rings 2", "J.R.R. Tolkien", "370 pages", "read");
addBookToLibrary(lotr2);

const lotr3= new book("Lord of the Rings 3", "J.R.R. Tolkien", "401 pages", "read");
addBookToLibrary(lotr3);

