import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibraryService } from '../service/LibraryService';

@Component({
  selector: 'app-view-review-dialog-content',
  templateUrl: './view-review-dialog-content.component.html',
  styleUrls: ['./view-review-dialog-content.component.css']
})
export class ViewReviewDialogComponent {
  reviews: any; // Initialize review data here

  constructor(
    public dialogRef: MatDialogRef<ViewReviewDialogComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    libaryService: LibraryService
  ) {


    libaryService.getReview(this.data.bookId).subscribe(
      (response) => {
        // Announce that a book has been created
        this.reviews = response; // Assign review data from the dialog data

      },
      (error) => {
        // Handle error logic here
        console.error('Error creating book:', error);
      }
    );
  }


  closeDialog(): void {
    this.dialogRef.close();
  }
}
