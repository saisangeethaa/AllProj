import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.scss']
})
export class AddProductComponent implements OnInit {

    prodFrm = new FormGroup({
      prodNm:new FormControl('',[Validators.required]),
      prodPrice:new FormControl('',[Validators.required]),
      prodQuan:new FormControl('',[Validators.required]),
      ctgy:new FormControl('',[Validators.required]),
      discount:new FormControl()
    });
      prodCategories:any = [

        'vegetables',
        'daires',
        'groceries',
      ]

  constructor() { }

  ngOnInit(): void { 
  }

addProduct(){

  console.log(this.prodFrm.value)
}


}
