import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';
import { Section } from 'src/app/core/model/Section';

@Component({
  selector: 'app-banner',
  templateUrl: './banner.component.html',
  styleUrls: ['./banner.component.scss']
})
export class BannerComponent{

  public isMobile: boolean = false;
  folders: Section[] = [
    {
      icon: 'folder',
      name: 'I Am a full-stack software developer from Buenos Aires, Argentina. I have 3 years of experience working in several technology companies. Mobile developer in progress. Here I will upload my projects and technologies that I learned and will learn.',
      updated: new Date('1/1/16'),
    },
    {
      icon: 'folder',
      name: 'Recipes',
      updated: new Date('1/17/16'),
    },
    {
      icon: 'folder',
      name: 'Work',
      updated: new Date('1/28/16'),
    },
    {
      icon: 'folder',
      name: 'Work',
      updated: new Date('1/28/16'),
    },
  ];

  constructor(breakpointObserver: BreakpointObserver) {
    breakpointObserver.observe([
      Breakpoints.Handset
    ]).subscribe(result => {
      this.isMobile = result.matches;
    });
  }

}
