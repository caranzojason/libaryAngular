import { LibraryService } from './service/LibraryService';
import { Component } from '@angular/core';
import { Observable  } from 'rxjs';
import { MatDialog } from '@angular/material/dialog';
import { DialogContentComponent } from './dialog-content/dialog-content.component';
import { ReviewDialogContentComponent } from './dialog-content/review-dialog-content.component';
import { ViewReviewDialogComponent } from './dialog-content/view-review-dialog-content.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'library';
  public books!: Observable<any[]>;

  constructor(private _libraryService:LibraryService,private dialog: MatDialog )
  {
    this.books = this._libraryService.getAllBooks();
  }

  openDialog(): void {
    const dialogRef = this.dialog.open(DialogContentComponent, {
      width: '400px',
    });

    dialogRef.afterClosed().subscribe((result) => {
      this.books = this._libraryService.getAllBooks();
    });
  }

  checkInBook(bookId:number): void {
    this._libraryService.checkInBook(bookId).subscribe(
      (response) => {
        alert('succesfully checkout');
        console.log('Successfully Checkout:', response);
        this.books = this._libraryService.getAllBooks();
      },
      (error) => {
        alert(error.error);
        console.error('Error updating book:', error);
        // Handle error logic here
      }
    );
  }
  returnBook(bookId:number): void {

    this._libraryService.returnBook(bookId).subscribe(
      (response) => {
        alert('Successfully return');
        console.log('Book updated successfully:', response);
        this.books = this._libraryService.getAllBooks();
      },
      (error) => {
        alert(error.error);
        console.error('Error updating book:', error.error);
        // Handle error logic here
      }
    );
  }

  addReview(bookId:number): void {
    const dialogRef = this.dialog.open(ReviewDialogContentComponent, {
      width: '400px',
      data: { bookId: bookId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the submitted review data here
        console.log('Review submitted:', result);
        // You can send the review data to your service or perform other actions
      }
    });
  }

  viewReview(bookId:number): void {
    const dialogRef = this.dialog.open(ViewReviewDialogComponent, {
      width: '400px',
      data: { bookId: bookId },
    });

    dialogRef.afterClosed().subscribe((result) => {
      if (result) {
        // Handle the submitted review data here
        console.log('Review submitted:', result);
        // You can send the review data to your service or perform other actions
      }
    });
  }

}
