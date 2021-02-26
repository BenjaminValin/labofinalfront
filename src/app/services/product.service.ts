import { HttpClient, HttpRequest } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable, Subject } from 'rxjs';
import { Product } from '../models/product.model';

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private BASE_URL = 'http://localhost:8080/products'

  private searchingSubject = new Subject<boolean>();
  private searchValueSubject = new Subject<String>();

  searchingSubscriber$ = this.searchingSubject.asObservable();
  searchValueSubscriber$ = this.searchValueSubject.asObservable();
  
  emitSearching(searching : boolean){
    this.searchingSubject.next(searching);
  }

  emitSearchValue(searchValue : String){
    this.searchValueSubject.next(searchValue);
  }

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<Product[]> {
    return this.httpClient.get<Product[]>(this.BASE_URL);
  }

  getByID(id): Observable<Product> {
    return this.httpClient.get<Product>(this.BASE_URL + "/" + id);
  }

  delete(id) {
    this.httpClient.delete(this.BASE_URL + "/" + id).subscribe(
      data => console.log("success", data),
      error => console.error("couldn't delete because, error")
    );
  }

  insert(product: Product): Observable<Product> {
    return this.httpClient.post<Product>(this.BASE_URL, product);
  }

  update(id, product: Product): Observable<Product> {
    return this.httpClient.put<Product>(this.BASE_URL + "/" + id, product);
  }

  searchByName(productName : String){
    return this.httpClient.post<Product[]>(this.BASE_URL + "/searchByName", productName);
  }
}
