import { HttpClient} from '@angular/common/http';
import { Observable  } from 'rxjs';
import { map } from 'rxjs/operators'
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';

@Injectable()
export class LibraryService {

  public  apiRoot = 'https://localhost:7263/api/';
  private bookCreatedSubject = new Subject<any>();


  constructor(private _httpClient: HttpClient) {

  }


  getAllBooks(): Observable<any[]> {
    return this._httpClient.get<any[]>(this.apiRoot +'Book/GetAllBooks')
    .pipe(map((res: any[]) => res));
  }

  createBook(bookData: any): Observable<any> {
    return this._httpClient.post(`${this.apiRoot}Book/AddBook`, bookData).pipe(map((res: any) => res));
  }

  checkInBook(bookId: number): Observable<any> {
    return this._httpClient.put(`${this.apiRoot}Book/CheckOut?bookId=${bookId}`,null).pipe(map((res: any) => res));
  }

  returnBook(bookId: number): Observable<any> {
    return this._httpClient.put(`${this.apiRoot}Book/ReturnBook?bookId=${bookId}`,null).pipe(map((res: any) => res));
  }

  addReview(reviewData: any): Observable<any> {
    return this._httpClient.post(`${this.apiRoot}Review`, reviewData).pipe(map((res: any) => res));
  }

  getReview(bookId: number): Observable<any> {
    return this._httpClient.get<any[]>(`${this.apiRoot}Review?bookId=${bookId}`).pipe(map((res: any[]) => res));
  }

    // Function to announce that a book has been created
    announceBookCreated(book: any) {
      this.bookCreatedSubject.next(book);
    }

    // Observable to listen for book created events
    onBookCreated(): Observable<any> {
      return this.bookCreatedSubject.asObservable();
    }

}
