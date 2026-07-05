import { Component } from '@angular/core';



@Component({
    selector :'app-child-twelve',
    templateUrl : './child-twelve.component.html',
    styleUrls : ['./child-twelve.component.css']
})


export class ChildTwelveComponent{
   
    inputDataFromFour = '';
    inputDataFromFive = 'asdf'

    eventCatcherOne(catched:any){
        console.log('first event occured! =>',catched.value)
    }
    eventCatcherTwo(eve : any){
        if(eve.keyCode === 13 ){
            console.log('second event occured! =>', eve);
            console.log('second event occured! =>', eve.target.value);
        }
    }
    eventCatcherThree(eve : any){
        console.log('second event occured! =>', eve);
        console.log('second event occured! =>', eve.target.value);
    }
    btnClicked(){
        console.log('btn clicked!!!')
    }
    eventCatcherFour(eve : any){
        this.inputDataFromFour = eve.target.value;
    }
}
