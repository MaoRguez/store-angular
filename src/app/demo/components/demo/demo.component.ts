import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demo',
  templateUrl: './demo.component.html',
  styleUrls: ['./demo.component.scss']
})
export class DemoComponent implements OnInit {

  title: string = 'platzi-store';

  items: string[] = ['mauricio', 'julian', 'mayra', 'monica'];

  fruits: string[] = ['🍎', '🍏', '🍇', '🍌', '🍑'];

  power: number = 10;

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
