import { DOCUMENT } from '@angular/common';
import { AfterViewInit, Component, Inject } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements AfterViewInit {
  title = 'ssr';
  window: (Window & typeof globalThis) | null;
  constructor(@Inject(DOCUMENT) private document: Document) {
    this.window = this.document.defaultView;
  }
  ngAfterViewInit(): void {
    if (this.window != undefined) {

      this.window.addEventListener('DOMContentLoaded', event => {

        // Navbar shrink function
        function navbarShrink() {
          const navbarCollapsible = document.body.querySelector('#mainNav');
          if (!navbarCollapsible) {
            return;
          }
          if (window.scrollY === 0) {
            navbarCollapsible.classList.remove('navbar-shrink')
          } else {
            navbarCollapsible.classList.add('navbar-shrink')
          }

        };

        // Shrink the navbar 
        navbarShrink();

        // Shrink the navbar when page is scrolled
        document.addEventListener('scroll', navbarShrink);

        // Activate Bootstrap scrollspy on the main nav element
        const mainNav = document.body.querySelector('#mainNav');
        // if (mainNav) {
        //   new bootstrap.ScrollSpy(document.body, {
        //     target: '#mainNav',
        //     offset: 74,
        //   });
        // };

        // Collapse responsive navbar when toggler is visible
        const navbarToggler: any = document.body.querySelector('.navbar-toggler');
        const responsiveNavItems = [].slice.call(
          document.querySelectorAll('#navbarResponsive .nav-link')
        );
        responsiveNavItems.map(function (responsiveNavItem: any) {
          responsiveNavItem.addEventListener('click', () => {
            if (window.getComputedStyle(navbarToggler).display !== 'none') {
              navbarToggler.click();
            }
          });
        });

      });
    }
  }

  ngOnInit(): void {

  }
}
