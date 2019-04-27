import { Component, OnInit, Input } from '@angular/core';
import { Cat } from 'src/app/models/cat';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent implements OnInit {

  constructor() { }
  @Input() cat: Cat;

  ngOnInit() {
  }

}
