import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders, HttpParams } from '@angular/common/http';
import { catchError, map, Observable, of, switchMap, throwError } from 'rxjs';
import { ProductItem } from '../../shared/models/productItem';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {
  private data : ProductItem[] = [
    {id: 1, name: "Guitar", price: 1000, img: "Guitar.jpg", desc: "Rock your friends with this electric guitar!"},
    {id: 2, name: "Piano", price: 5000, img: "Piano.jpg", desc: "A finely crafted piano designed for large concerts."},
    {id: 3, name: "Drums", price: 1200, img: "Drums.jpg", desc: "Be the rhythm with this gig-ready drumkit!"}
  ]

  public database! : any;
  public jsondata! : ProductItem[];

  constructor(private http : HttpClient) { this.database = this.getAllProductsFromJSON(); }

  getAllProductsFromService() {
    return of(this.data);
  }

  getProductFromService(id : number) {
    return of(this.data.find(p => p.id === id));
  }

  private getStandardOptions() : any {
    return {
      headers: new HttpHeaders({
        'Content-type': 'application/json',
      })
    };
  }

  getAllProductsFromJSON() : Observable<ProductItem[]> {
    let options = this.getStandardOptions();
    options.params = new HttpParams({
      fromObject: {
        format: 'json'
      }
    });
    return this.http.get<ProductItem[]>('../assets/data/products.json', options).pipe(map((result : any) => result), catchError(this.handleError));
  }

  private handleError(error: HttpErrorResponse) {
    if(error.status === 0) {
      console.error("There is an issue with the client or network:", error.error);
    } else {
      console.error("Server-side error: ", error.error);
    }
    return throwError(() => {new Error("Cannot retrieve wishes from the server. Please try again.")});
  }
}
