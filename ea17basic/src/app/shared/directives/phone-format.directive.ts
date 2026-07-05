import { Directive,ElementRef,HostListener } from "@angular/core";


@Directive({
    selector:'[phonesFormat]'
})

export class PhoneFormatDirective{
     constructor( private eleRef : ElementRef){}

      @HostListener('blur') onBlur(){
        const eleval = this.eleRef.nativeElement.value;
        this.eleRef.nativeElement.value = '(' + eleval.substr(0,3) + ')'+eleval.substr(3,3) + '-' + eleval.substr(6)
     }
    
}