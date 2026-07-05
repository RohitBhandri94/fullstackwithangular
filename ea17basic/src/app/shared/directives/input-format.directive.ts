import { Directive,ElementRef,HostListener } from "@angular/core";
  

@Directive({
    selector : '[inputFormat]'
})


export class InputFormatDirective{
    constructor( private elementRef : ElementRef){} //DEPENDANCY INJECTION

    @HostListener('keyup') onKeyUp(){
        console.log('keyUp event triggerd')
    }

    @HostListener('blur')onBlur(){
        
        console.log(' input Blur event triggerd',this.elementRef.nativeElement.value)
        const inputVal : string = this.elementRef.nativeElement.value;
        this.elementRef.nativeElement.value = inputVal.toUpperCase(); 
 } 
}


