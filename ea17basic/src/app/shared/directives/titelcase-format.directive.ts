import { Directive,ElementRef, HostListener } from "@angular/core";

@Directive({
    selector : '[titlcaseFormat]',
})

 export class TitleCaseFromatDirective{
    constructor( private eleRef : ElementRef ){} // DEPENDANCY INJECTION

   @HostListener('blur')onBlur(){
    
    console.log('input blur envent triggered',this.eleRef.nativeElement.value);
    const titleCase : string = this.eleRef.nativeElement.value
    this.eleRef.nativeElement.value = titleCase.split(' ')
    .map((word) => word[0].toUpperCase() + word.slice(1).toLowerCase())
    .join(' ');
    
    // console.log('input blur envent triggered',this.eleRef.nativeElement.value);
    // const titleCase : string = this.eleRef.nativeElement.value
    // this.eleRef.nativeElement.value = titleCase.toLowerCase().replace(/(^|\s)\S/g, L => L.toUpperCase());

  
}
 }