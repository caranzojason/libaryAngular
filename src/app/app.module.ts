import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { LibraryService } from 'src/app/service/LibraryService';
import { HttpClientModule } from '@angular/common/http';
import { MatDialogModule } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ReviewDialogContentComponent } from './dialog-content/review-dialog-content.component';
import { FormsModule } from '@angular/forms';
import {ViewReviewDialogComponent} from './dialog-content/view-review-dialog-content.component';

@NgModule({
  declarations: [
    AppComponent,
    DialogContentComponent,
    ReviewDialogContentComponent,
    ViewReviewDialogComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    MatDialogModule,
    FormsModule
  ],
  providers: [LibraryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
