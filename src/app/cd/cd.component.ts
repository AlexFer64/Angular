import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { CD } from '../models/cd';
import { CdsService } from '../services/cds.service';

@Component({
  selector: 'app-cd',
  templateUrl: './cd.component.html',
  styleUrls: ['./cd.component.scss']
})
export class CdComponent implements OnInit {

 @Input() leCd!: CD;
 unCd!: CD;

  constructor(private cdservice:CdsService, private route:ActivatedRoute) { }

ngOnInit(): void {
  const idcd = this.route.snapshot.params['id'];
  if (idcd!==undefined) {
    this.unCd = this.cdservice.getCDById(+idcd);
  }
  else{
  this.unCd = this.leCd;
  }
}

 onAddCD(){
  this.leCd.quantity++;
 }
}
