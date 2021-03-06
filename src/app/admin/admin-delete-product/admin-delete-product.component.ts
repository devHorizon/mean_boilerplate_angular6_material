import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material';
import { ProductsService } from '../../services/products/products.service';

@Component({
  selector: 'app-admin-delete-product',
  templateUrl: './admin-delete-product.component.html',
  styleUrls: ['./admin-delete-product.component.scss']
})
export class AdminDeleteProductComponent implements OnInit {

  constructor(
    public matDialogRef: MatDialogRef<AdminDeleteProductComponent>,
    private productsService: ProductsService
  ) { }

  ngOnInit() {
  }

  onDelete(){
    this.matDialogRef.close(true);
  }

  onCancel(){
    this.matDialogRef.close(false);
  }

}
