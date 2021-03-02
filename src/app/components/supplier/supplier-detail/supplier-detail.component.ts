import { isNull } from '@angular/compiler/src/output/output_ast';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Product } from 'src/app/models/product.model';
import { Supplier } from 'src/app/models/supplier.model';
import { CartService } from 'src/app/services/cart.service';
import { SupplierService } from 'src/app/services/supplier.service';

@Component({
  selector: 'app-supplier-detail',
  templateUrl: './supplier-detail.component.html',
  styleUrls: ['./supplier-detail.component.scss']
})
export class SupplierDetailComponent implements OnInit {

  supplier : Supplier;
  answer : any;
  number : number;

  constructor(private service : SupplierService, private cartService : CartService, private activatedRoute : ActivatedRoute, private router : Router) { }

  ngOnInit(): void {

    let id = this.activatedRoute.snapshot.params['id'];

    this.service.getByID(id).subscribe(
      supplier => {this.supplier = supplier}
    )

  }

  buy(productToBuy : Product){
    this.answer = prompt("Combien d'exemplaires?");
    if (isNaN(this.answer) || this.answer===null) {
      alert("Tu te fiches de moi? C'est pas un nombre, ça...");
    } else {
      this.number = parseInt(this.answer);
      if (this.number < 1){
        alert("Il me faut au moins un exemplaire...");
      } else {
        this.cartService.add(productToBuy, this.number);
        console.log(this.cartService.showCart());
      }
    }
  }

}
