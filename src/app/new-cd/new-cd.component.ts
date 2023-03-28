import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder } from '@angular/forms';
import { map, Observable } from 'rxjs';
import { CD } from 'src/app/models/cd';

@Component({
  selector: 'app-new-cd',
  templateUrl: './new-cd.component.html',
  styleUrls: ['./new-cd.component.scss']
})
export class NewCDComponent {
  formulaire!: FormGroup;
  currentCD$!: Observable<CD>;

  constructor(private formBuilder: FormBuilder){}

  ngOnInit():void{
    this.formulaire = this.formBuilder.group({
      title: [null],
      author: [null],
      price: [null],
      thumbnail: [null],
      releaseDate: [null],
      quantity: [null]
    });

    this.currentCD$ = this.formulaire.valueChanges.pipe(map(formValue => (
      {
        id: 0,
        title: formValue.title,
        author: formValue.author,
        thumbnail: formValue.thumbnail,
        releaseDate: formValue.releaseDate,
        quantity: formValue.quantity,
        price: formValue.price
      }
    )));
  }


  addCD(){
    console.log(this.formulaire.value);
  }
}

