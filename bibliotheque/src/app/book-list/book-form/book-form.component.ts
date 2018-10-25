import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { BooksService } from '../../services/books.service'
import { Router } from '@angular/router';
import { Book } from '../../models/Book.model';
import * as firebase from 'firebase';

@Component({
  selector: 'app-book-form',
  templateUrl: './book-form.component.html',
  styleUrls: ['./book-form.component.scss']
})
export class BookFormComponent implements OnInit {

  bookForm: FormGroup;
  fileIsUploading = false;
  fileUrl : string;
  fileUploaded = false;

  constructor(private formBuilder: FormBuilder,
  			  private booksService: BooksService,
  			  private routes : Router) { }

  ngOnInit() {
    this.initForm();
  }

  initForm(){
  	this.bookForm = this.formBuilder.group({
  		title: ['', Validators.required],
  		author: ['', Validators.required]
  	});
  }

  onSaveBook(){
  	const title = this.bookForm.get('title').value;
  	const author = this.bookForm.get('author').value;
  	const newBook = new Book(title,author);
    if(this.fileUrl && this.fileUrl !== ''){
      newBook.photo = this.fileUrl;
    }
  	this.booksService.createNewBook(newBook);
  	this.routes.navigate(['/books']);
  }

  onUploadFile(file: File){
    this.fileIsUploading = true;
    this.booksService.uploadFile(file).then(
      (url : string) => {
        const ref = firebase.storage().ref(url);
        ref.getDownloadURL().then(
          (fullURL : string) => {
            this.fileUrl = fullURL;
            this.fileIsUploading = false;
            this.fileUploaded = true;
        });
      }
    );
  }

  detectFiles(event){
    this.onUploadFile(event.target.files[0]);
  }
}
