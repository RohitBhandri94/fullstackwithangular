import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  title = 'ea17basic';

  myPost = {
      name : 'my title',
      description : 'my desc',
      isLiked :false,
  }

  myPostTwo = {
    name : 'Rohit Bhanadari',
    description : 'my desc',
    isLikedTwo :false,
}

  cardArr = [
    {
      title:'card-one',
      desription : 'ONE : Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum earum recusandae .',
      postDate : new Date(2022,1,23,14,45,55)
    },
    {
      title:'card-two',
      desription : 'Two : Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum earum recusandae .',
      postDate : new Date(2022,1,22,4,15,23)
    },
    {
      title:'card-three',
      desription : 'Three : Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam voluptatum earum recusandae .',
      postDate : new Date(2022,8,2,5,25,11)
    },
  ]
  

  catchEventFromChild(eve : any){
    console.log('Event Cathed ==>',eve)
    this.myPost.isLiked = !this.myPost.isLiked
  }
  
  catchEventFromChildTwo(eve : any){
    console.log('Event Cathed ==>',eve)
    this.myPostTwo.isLikedTwo = !this.myPostTwo.isLikedTwo
  }



}
