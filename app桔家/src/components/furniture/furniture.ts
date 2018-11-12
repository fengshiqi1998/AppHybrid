import { Component } from '@angular/core';

/**
 * Generated class for the FurnitureComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'furniture',
  templateUrl: 'furniture.html'
})
export class FurnitureComponent {

  text: string;

  constructor() {
    console.log('Hello FurnitureComponent Component');
    this.text = 'Hello World';
  }

}
