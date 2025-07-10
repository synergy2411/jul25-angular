import {
  Directive,
  ElementRef,
  HostListener,
  HostBinding,
  Input,
} from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() favColor = 'grey';

  @HostBinding('style.backgroundColor')
  bgColor!: string;

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgColor = this.favColor;
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgColor = 'transparent';
  }

  // constructor(private elRef: ElementRef) {
  //   this.elRef.nativeElement.style.backgroundColor = 'aqua';
  // }
}

// <div class="appHighlight"> </div>

// <div appHighlight> </div>
