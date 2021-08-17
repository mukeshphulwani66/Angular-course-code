import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]'
})

export class HighlightDirective {
  
  constructor(private el:ElementRef) {
 
   }

   @HostBinding('style.backgroundColor') bgColor:any;
   @HostListener('mouseenter') 
   onEnter(){
     this.bgColor = "blue"
   }
   @HostListener('mouseleave') 
   onOut(){
     this.bgColor = "transparent"
   }

   ngOnInit(){
    //this.el.nativeElement.style.backgroundColor = "pink";
   //   this.bgColor = "blueviolet"
   }

}
