import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibraryService } from '../service/LibraryService';

@Component({
  selector: 'app-review-dialog-content',
  templateUrl: './review-dialog-content.component.html',
  styleUrls: ['./review-dialog-content.component.css']
})
export class ReviewDialogContentComponent {
  review: any = {
    id: 0,
    bookId: this.data.bookId,
    rating: 0,
    comment: '',
    createdAt: new Date().toISOString()
  };

  constructor(
    public dialogRef: MatDialogRef<ReviewDialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private libaryService:LibraryService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.libaryService.addReview(this.review).subscribe(
      (response) => {
        // Announce that a book has been created

        setTimeout(() => {
          this.dialogRef.close();
        }, 1000); // Adjust the delay as needed
      },
      (error) => {
        // Handle error logic here
        console.error('Error creating book:', error);
      }
    );
  }
}
