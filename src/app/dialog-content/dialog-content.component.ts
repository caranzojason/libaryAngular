import { Component, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { LibraryService } from '../service/LibraryService';

@Component({
  selector: 'app-dialog-content',
  templateUrl: './dialog-content.component.html',
  styleUrls: ['./dialog-content.component.css']
})
export class DialogContentComponent {
  book: any = {
    id: 0,
    title: '',
    author: '',
    averageRating: 0,
    isCheckedOut: true
  };


  constructor(
    public dialogRef: MatDialogRef<DialogContentComponent>,
    @Inject(MAT_DIALOG_DATA) public data: any,
    private libaryService:LibraryService
  ) {}

  closeDialog(): void {
    this.dialogRef.close();
  }

  onSubmit(): void {
    this.libaryService.createBook(this.book).subscribe(
      (response) => {
        // Announce that a book has been created
        this.libaryService.announceBookCreated(this.book);

        setTimeout(() => {
          this.dialogRef.close(this.book);
        }, 1000); // Adjust the delay as needed
      },
      (error) => {
        // Handle error logic here
        console.error('Error creating book:', error);
      }
    );
  }
}
