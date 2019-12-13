import { Component, OnInit, Input, ElementRef, HostListener, TemplateRef } from '@angular/core';

@Component({
  selector: 'kyt-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.scss']
})
export class DropdownMenuComponent implements OnInit {
  open = false;
  @Input() toggleRef: TemplateRef<any>;
  @Input() contentRef: TemplateRef<any>;
  constructor(private eref: ElementRef) {}

  ngOnInit() {}
  @HostListener('click', ['$event'])
  toggleDropdown(event) {
    this.open = !this.open;
  }
  @HostListener('document:click', ['$event'])
  onClick(event) {
    if (!this.eref.nativeElement.contains(event.target)) {
      this.open = false;
    }
  }
}
