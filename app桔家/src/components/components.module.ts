import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IonicModule } from 'ionic-angular';
import { FurnitureComponent } from './furniture/furniture';
import { RecommendationComponent } from './recommendation/recommendation';
@NgModule({
	declarations: [FurnitureComponent,
    RecommendationComponent],
	imports: [BrowserModule,
		IonicModule.forRoot(RecommendationComponent)
	],
	exports: [FurnitureComponent,
    RecommendationComponent]
})
export class ComponentsModule {}
