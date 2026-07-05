import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
// import { ChildOneComponent } from './child-one/child-one.component ';
// import { ChildTwoComponent} from './child-two/child-two.component ';
// import { ChildThreeComponent } from './child-three/child-three.component';
// import { ChildFourComponent } from './child-four/child-four.component';
// import { ChildFiveComponent } from './child-five/child-five.component';
// import { ChildSixComponent } from './child-six/child-six.component';
// import { ChildFSevenComponent } from './child-seven/child-seven.component';
// import { ChildEightComponent } from './child-eight/child-eight.component';
// import { ChildNineComponent } from './child-nine/child-nine.component';
// import { ChildTenComponent } from './child-ten/child-ten.component';
// import { ChildElevenComponent } from './child-eleven/child-eleven.component';
// import { InputFormatDirective } from './shared/directives/input-format.directive';
// import { PhoneFormatDirective} from './shared/directives/phone-format.directive';
// import { SummaryPipe } from './shared/pipes/summary.pipes';
// import { ChildTwelveComponent } from './child-twelve/child-twelve.component';
// import { ChildThirteenComponent } from './child-thirteen/child-thirteen.component';
// import { TitleCaseFromatDirective} from './shared/directives/titelcase-format.directive'
// import { LikeComponent } from './like/like.component';
// import { CardComponent} from './card/card.component';
// import { CardTwoComponent} from './card-two/card-two.component';
// import { CardThreeComponent } from './card-three/card-three.component';
import { PropertyComponent } from './property-binding/property.component';



@NgModule({
  declarations: [
    AppComponent,
    // ChildOneComponent,
    // ChildTwoComponent,
    // ChildThreeComponent,
    // ChildFourComponent,
    // ChildFiveComponent,
    // ChildSixComponent,
    // ChildFSevenComponent,
    // ChildEightComponent,
    // ChildNineComponent,
    // ChildTenComponent,
    // ChildElevenComponent,
    // InputFormatDirective,
    // PhoneFormatDirective,
    // SummaryPipe,
    // ChildTwelveComponent,
    // ChildThirteenComponent,
    // TitleCaseFromatDirective,
    // LikeComponent,
    // CardComponent,
    // CardTwoComponent,
    // CardThreeComponent,
    PropertyComponent
  
   
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

