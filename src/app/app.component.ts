import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  siteData = [
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    },
    {
      title: 'Studs',
      placeholder: 'stone',
      imgSrc: '../AngularLearningWithDemo/assets/images/ear_rings/stone/image1.jpg',
      desc: 'This stud is made up by ......'
    }
  ];

  openWhatsapp() {
    window.open("https://api.whatsapp.com/send?phone=&lang=en", "_blank");
  }
}
