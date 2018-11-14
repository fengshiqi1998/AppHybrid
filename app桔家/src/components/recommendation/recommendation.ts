import { Component } from '@angular/core';

/**
 * Generated class for the RecommendationComponent component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'recommendation',
  templateUrl: 'recommendation.html'
})
export class RecommendationComponent {

  text: string;

  constructor() {
    console.log('Hello RecommendationComponent Component');
    this.text = 'Hello World';
  }
}
