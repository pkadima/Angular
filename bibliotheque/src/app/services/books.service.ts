import { Injectable } from '@angular/core';
import { Book } from '../models/Book.model';
import { Subject } from 'rxjs/Subject';
import * as firebase from 'firebase';

@Injectable({
  providedIn: 'root'
})
export class BooksService {

  books: Book[] = [];
  booksSubject = new Subject<Book[]>();

  constructor() { }

  emitBook(){
  	this.booksSubject.next(this.books);
  }

  saveBooks(){
  	firebase.database().ref('/books').set(this.books);
  }

  getBooks(){
  	firebase.database().ref('/books')
  	  .on('value', (data)=>{
  	  	this.books = data.val() ? data.val() : [];
  	  	this.emitBook();
  	  });
  }

  getSingleBook(id: number){
  	return new Promise(
  	  (resolve, reject)=>{
  	  	firebase.database().ref('/books/'+id).once('value').then(
  	  	  (data)=>{
  	  	  	resolve(data.val());
  	  	  }, 
  	  	  (error)=>{
  	  	  	reject(error);
  	  	  }
  	  	);
  	  }
  	);
  }

  createNewBook(newBook: Book){
  	this.books.push(newBook);
  	this.saveBooks();
  	this.emitBook();
  }

  removeBook(book: Book){
    if(book.photo){
      const storageRef = firebase.storage().refFromURL(book.photo);
      storageRef.delete().then(
        () => {
          console.log('Photo supprimé');
        },
      ).catch(
        (error) => {
          console.log('Fichier non trouvé '+error);
        }
      );
    }
  	const bookIndexToRemove = this.books.findIndex(
  	  (bookEl) => {
  	  	if(bookEl === book){
  	  	  return true;
  	  	}
  	  }
  	);
  	this.books.splice(bookIndexToRemove, 1);
  	this.saveBooks();
  	this.emitBook();
  }

  uploadFile(file: File){

    return new Promise(
      (resolve, reject) => {
        const almostUniqueFileName = Date.now().toString();
        const filepath = 'images/'+almostUniqueFileName+file.name;

        const upload = firebase.storage().ref()
          .child(filepath)
          .put(file);

        upload.on(firebase.storage.TaskEvent.STATE_CHANGED,
          ()=> {
            console.log('Chargement...');
          },
          (error)=>{
            console.log('Erreur de chargement '+error);
            reject();
          }, 
          ()=>{
            resolve(filepath);
          }
        );
      }
    );
  }
}
