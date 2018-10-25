import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { PostListComponent } from './post-list/post-list.component';
import { PostNewComponent } from './post-new/post-new.component';
import { HeaderComponent } from './header/header.component';
import { PostsService } from './services/posts.service';

const appRoutes: Routes = [ 
  { path:'posts', component: PostListComponent },
  { path:'new', component: PostNewComponent },
  { path:'', redirectTo: '/posts', pathMatch: 'full'},
  { path:'**', redirectTo: '/posts' }
]

@NgModule({
  declarations: [
    AppComponent,
    PostListComponent,
    PostNewComponent,
    HeaderComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(appRoutes),
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [
    PostsService
  ],
  bootstrap: [AppComponent]
})

export class AppModule { }