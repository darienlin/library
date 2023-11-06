const myLibrary = [];

function Book(title, author, pages, read) {
    this.title=title
    this.author=author
    this.pages=pages
    this.read=read

    this.getTitle=function(){
        return title
    }

    this.getAuthor=function(){
        return author
    }

    this.getPages=function(){
        return pages
    }

    this.getRead=function(){
        return read
    }
}

function addBookToLibrary(book) {
  myLibrary.push(book)
}

const form = document.getElementById('bookForm');

function closeForm(){
    form.classList.remove('open')
    form.classList.add('close')
}

function openForm(){
    form.classList.remove("close")
    form.classList.add('open')
}

document.getElementById("submitBtn").addEventListener("click", function(event){
    event.preventDefault()
    let title1=document.getElementById("title").value
    let author1=document.getElementById("author").value
    let pages1=document.getElementById("pages").value
    let read1=document.getElementById("read").checked
    console.log()

    let toAdd = new Book (title1, author1, pages1, read1)
    addBookToLibrary(toAdd)
    addBookToWeb()
    var allInputs = document.querySelectorAll('input');
    allInputs.forEach(singleInput => singleInput.value = '');
    document.getElementById("read").checked = false;
    closeForm()
});

const bookList = document.getElementById('contentBody')

function addBookToWeb(){
    bookList.textContent='' 
    myLibrary.forEach(book => {
        let title = document.createElement('li')
        title.classList.add('book')
        title.textContent=book.title
        bookList.appendChild(title)

        let author = document.createElement('li')
        author.classList.add('book')
        author.textContent=book.author
        bookList.appendChild(author)

        let pages = document.createElement('li')
        pages.classList.add('book')
        pages.textContent=book.pages
        bookList.appendChild(pages)
        

        //read buttons
        let readContainer = document.createElement('li')
        readContainer.classList.add('center')

        let read = document.createElement('button')
        read.classList.add('readButton')
        read.addEventListener('click',()=>{
            readNotread(book, read)
        })

        //delete button
        let deleteButton = document.createElement('button')
        deleteButton.textContent='Delete'
        deleteButton.classList.add('readButton')
        deleteButton.addEventListener('click',()=>{
            removeBook(book)
        })

        if(book.read)
            read.textContent='I read!'
        else
            read.textContent='I did not read'

        bookList.appendChild(readContainer)
        readContainer.appendChild(read)
        readContainer.appendChild(deleteButton)
    });
}

function removeBook(book){
    let index = myLibrary.indexOf(book)
    myLibrary.splice(index,1)
    addBookToWeb()
}

function readNotread(book, read){
    if(book.read){
        read.textContent='I did not read'
        book.read=false
    }
    else{
        read.textContent='I read!'
        book.read=true
    }
}