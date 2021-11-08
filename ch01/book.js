"use strict";
function showBook(book) {
    console.log(book.author + " wrote " + book.title);
    if (book.isRead !== undefined) {
        console.log(" I have " + (book.isRead ? "read" : "not read") + " this book");
    }
}
function setPages(book, pages) {
    book.pages = pages;
}
function readBook(book) {
    book.isRead = true;
}
