
import { Component, importProvidersFrom } from "@angular/core";

@Component({
    selector: "app-child-two",
    templateUrl:'./child-two.component .html',
    styleUrls:['./child-two.component .css']
})

export class ChildTwoComponent{
    fName:string="Rohit";
    lName:string="Bhandari";
    age:number=25;
    imgScra:string="https://img.jagranjosh.com/imported/images/E/GK/sachin-records.png";
    combineNoOfCols :number=2;
    isIndian:boolean = true;
    stdArr:string[]=['Pawan','Rushikesh','Aditya','Megha','Nilehs']
    showBtn=true;
    fourEvent='';
    eventCacherFive ='asdf'

    getFullName(): string{
        return this.fName + ' ' + this.lName
    }

    clickedMe(){
        this.showBtn= ! this.showBtn
    }

    eventCacherOne(catched:any){
        console.log('first event occured! =>',catched.value)
    }
        
    eventCacherTwo(eve: any){
        if(eve.keyCode===13){
            console.log('second event occured! =>',eve)
            console.log('second event occured! =>',eve.target.value)

        }
    }   
    eventCacherThree(eve:any){
        console.log('third event occured! =>',eve);
        console.log('third event occured! =>',eve.target.value);
    }   

    btnClicke(){
        console.log('button is cliked by user')
    }

    eventCacherFour(eve:any){
        this.fourEvent=eve.target.value;
    }

 
}