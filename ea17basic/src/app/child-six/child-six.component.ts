import {Component} from '@angular/core'

@Component({
    selector :'app-child-six',
    templateUrl :`./child-six.component.html`,
    styleUrls :['./child-six.component.css']
})


export class ChildSixComponent{
     studentInfoArray = [
        {
            firstName : "Tony",
            lastName : "Stark",
            email :"tony@starindus.com",
            contact : "9807654321"
        },
        {
            firstName : "Bruce",
            lastName : "Wayne",
            email :"bruce@wayneindus.com",
            contact : "9807654321"
        },
        {
            firstName : "Gangadhar",
            lastName : "Shastri",
            email :"gangadhar@shastri.com",
            contact : "9807654321"
        }
     ]
    }