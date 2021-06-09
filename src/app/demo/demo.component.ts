import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title = 'platzi-store';

  items = ['mauricio', 'julian', 'mayra', 'monica'];

  fruits = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  power = 10;

  constructor() { }

  ngOnInit(): void {
  }

  addItem() {
    this.items.push('new Item');
  }
  
  deleteItem(index: number) {
    this.items.splice(index, 1);
  }
  
  addArray() {
    this.fruits.push('🍒');
  }
  deleteArray(index: number) {
    this.fruits.splice(index, 1);
  }
}
