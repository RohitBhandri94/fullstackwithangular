import { Component, EventEmitter, Input, Output } from "@angular/core";

 
@Component({
    selector :'app-card-two',
    templateUrl :'./card-two.component.html',
    styleUrls : ['./card-two.component.css']
})



export class CardTwoComponent{
   @Input('isLikedTwo') likeTwo : any;
   @Output('emitEvnetCustomTwo') emitEvnet = new EventEmitter();

  triggerLikeOrNotLikeTwo(){
    this.likeTwo = !this.likeTwo
  }

  objectTwo = {
    name : "Petya",
      age : 15
  }

  sendTriggerToParentTwo(){
    this.emitEvnet.emit(this.objectTwo)
  }

}