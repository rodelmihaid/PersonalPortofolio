import { Component, ElementRef, HostListener } from '@angular/core';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent {
  name: string = '<Dimulete Rodel Mihai/>';
  isSmallScreen: boolean = false;
  constructor(private el: ElementRef) {}

  // @HostListener('window:resize', ['$event'])
  // onResize(event: Event): void {
  //   this.checkScreenSize();
  // }

  checkScreenSize(): void {
    if (window.innerWidth <= 759) this.isSmallScreen = true;
  }
  nr: number = window.innerWidth;
  scrollToRoadComponent() {
    const roadComponent = this.el.nativeElement.querySelector('.road');
    if (roadComponent) {
      roadComponent.scrollIntoView({ behavior: 'smooth' }); // Derulare lină
    }
  }
  scrollUp() {
    const up = this.el.nativeElement.querySelector('.up');
    if (up) {
      up.scrollIntoView({ behavior: 'smooth' }); // Derulare lină
    }
  }
  scrollContacts() {
    const up = this.el.nativeElement.querySelector('.contacts');
    if (up) {
      up.scrollIntoView({ behavior: 'smooth' }); // Derulare lină
    }
  }
  ngOnInit(): void {
    this.checkScreenSize();
  }
}
