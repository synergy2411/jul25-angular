import { Component } from '@angular/core';

@Component({
  selector: 'app-directive-example',
  templateUrl: './directive-example.component.html',
  styleUrl: './directive-example.component.css',
})
export class DirectiveExampleComponent {
  dynamicStyles = {
    'background-color': 'grey',
    color: '#fff',
    margin: '16px',
    padding: '12px',
  };

  dynamicClass = { 'my-border': true, 'my-feature': false };

  products = [
    {
      id: 'p001',
      title: 'iPhone 16',
      price: 1999,
      qty: 199,
      isAvailable: true,
    },
    {
      id: 'p002',
      title: 'Samsung Galaxy',
      price: 1459,
      qty: 100,
      isAvailable: true,
    },
    { id: 'p003', title: 'Motorola', price: 999, qty: 0, isAvailable: false },
  ];

  tab = 1;

  onStyleChange(color: string) {
    this.dynamicStyles['background-color'] = color;
  }

  onClassChange() {
    this.dynamicClass['my-border'] = !this.dynamicClass['my-border'];
    this.dynamicClass['my-feature'] = !this.dynamicClass['my-feature'];
  }
}
