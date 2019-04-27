import { Component, OnInit } from '@angular/core';
import {ActivatedRoute} from '@angular/router'
import {CatService} from '../../services/cat.service'
import { Cat } from '../../models/cat';

@Component({
  selector: 'app-cat-details',
  templateUrl: './cat-details.component.html',
  styleUrls: ['./cat-details.component.css']
})
export class CatDetailsComponent implements OnInit {

  catId : string;
  cat : Cat;

  constructor(
    private activatedRoute: ActivatedRoute,
    private catService: CatService
  ) { 
    this.catId = activatedRoute.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.catId = this.activatedRoute.snapshot.paramMap.get('id');
    console.log('catId', this.catId);
    this.catService.getCatDetail(this.catId).subscribe(
      res => {
        this.cat = res;
      }, err => {
        console.error(err);
      }
    );
 
  }

}
