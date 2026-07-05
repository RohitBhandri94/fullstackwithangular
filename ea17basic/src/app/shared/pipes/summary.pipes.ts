import { Pipe,PipeTransform } from '@angular/core';


@Pipe({
    name :'summayPipe'
})


export class SummaryPipe implements PipeTransform{
  transform( value : string , args? : any){
    if(!value){return};
    const cutVal = args? args : 100;
    return value.substr(0,cutVal)+'...'
  }
}