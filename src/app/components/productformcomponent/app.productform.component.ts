import { Component, OnInit } from "@angular/core";
import { FormGroup, FormControl, Validator, Validators } from "@angular/forms";
import { Product } from "../../models/app.product.model";
import { ProductLogic } from "../../models/app.product.logic";
import { Categories,Manufacturers } from "../../models/app.constants";
import { CustomValidator } from "./app.custom.validator";
import { HttpService } from "src/app/services/app.http.service";

@Component({
    selector: 'app-productform-component',
    templateUrl: './app.productform.view.html'
})
export class ProductFormComponent implements OnInit {
    product: Product;
    products: Array<Product>;
    private logic: ProductLogic;
    categories = Categories;
    manufacturers  =Manufacturers;
    columnHeaders: Array<string>;
    color: string;

    frmProduct: FormGroup;

    constructor(private httpService : HttpService){
        this.product = new Product();
        this.products = new Array<Product>();
        this.logic = new ProductLogic();
        this.columnHeaders = new Array<string>();
        this.color = '';

        this.frmProduct = new FormGroup({
            'ProductRowId' : new FormControl(this.product.ProductRowId,
                 Validators.compose([
                     Validators.required,
                     Validators.minLength(2),
                     Validators.maxLength(8),
                     Validators.pattern('[0-9]+'),                     
                 ])),
            'ProductId': new FormControl(this.product.ProductId,
                Validators.compose([
                    Validators.required
                ])),
            'ProductName': new FormControl(this.product.ProductName,
                Validators.compose([
                    Validators.required,
                    Validators.pattern('[A-Za-z]+'),
                    CustomValidator.checkIfStartsFromUppercase
                ])),
            'CategoryName': new FormControl(this.product.CategoryName,
                Validators.compose([
                    Validators.required
                ])),
            'Manufacturer': new FormControl(this.product.Manufacturer,
                Validators.compose([
                    Validators.required
                ])),
            'Description': new FormControl(this.product.Description,
                Validators.compose([
                    Validators.required
                ])),
            'BasePrice': new FormControl(this.product.BasePrice,
                Validators.compose([
                    Validators.required,
                    CustomValidator.checkIfIsPositiveInteger
                ]))
        });


    }

    ngOnInit(): void {
        this.columnHeaders = Object.keys(this.product);
        console.log(JSON.stringify(this.columnHeaders));
        this.httpService.getData().subscribe(
            (response) => {
                this.products = response;
            },
            (error) => {

            }
        );
    } 

    clear(): void {
        this.product = new Product();
        this.frmProduct.setValue(this.product);
    }

    save() {
        this.product = this.frmProduct.value;
        this.httpService.postData(this.product).subscribe(
            (response) => {
                this.product = response;
            },
            (error) => {

            }
        );
        this.httpService.getData().subscribe(
            (response) => {
                this.products = response;
            },
            (error) => {

            }
        );
    }

    getSelectedProduct(p:Product):void {
        this.frmProduct.setValue(p);
    }     
}