import { Component } from "@angular/core";

@Component({
    selector:'app-child-eleven',
    templateUrl:'./child-eleven.component.html',
    styleUrls:['./child-eleven.component.css']
})

 export class ChildElevenComponent{
 
    fName : string = "Rohit";
    lName : string = "Bhandari";
    imgSrc: string = "https://pbs.twimg.com/profile_images/1301199561713541120/7dPeX1gK_400x400.png";
    
    combineOfCols : number = 2;

    isindian :boolean = true;

    stdArr = ["Pawan","Rushikesh","Aditya","Megha","Nilesh"];
    showBtn = true;
    ShowRed = false;
    isStrikeThrough = true;
    

    getFullName() : string {
        return this.fName + ' ' +this.lName
    }

    graphicCard = {
        name : "GeoForce RIX  4090 ",
        dissVersion : 3,
        boostClock : 2.5255478,
        unitsSold : 5678996545,
        price : 162150,
        releaseDate : new Date(2022,9,12,14,56,44),
        description :"Lorem ipsum dolor sit amet, consectetur adipisicing elit. Labore quod suscipit, quis voluptatum earum repellat perferendis sequi eligendi id numquam iusto voluptates voluptatem tempore maiores explicabo animi non cum debitis unde atque et voluptatibus quidem molestiae impedit! Dolores, quidem deserunt sequi incidunt exercitationem ullam obcaecati voluptatem. Eaque rerum assumenda perferendis, incidunt sunt praesentium provident facere veniam cumque excepturi, cupiditate modi labore in impedit delectus non magni sit? At magnam alias nam fugiat aliquid, quam mollitia ducimus a tenetur minima, vel expedita? Illo quae, dolor mollitia labore corrupti quod error laboriosam aspernatur nesciunt veniam quas aliquid cum corporis fuga sed nihil?"
    };


}