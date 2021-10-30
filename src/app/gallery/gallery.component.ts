import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-gallery',
  templateUrl: './gallery.component.html',
  styleUrls: ['./gallery.component.css']
})
export class GalleryComponent implements OnInit {
  galleryImage = [
    { img: '/assets/gallery/portfolio-1.jpg', thumb:
    '/assets/gallery/portfolio-1.jpg', description: 'Image 1' },
    { img: '/assets/gallery/portfolio-2.jpg', thumb:
    '/assets/gallery/portfolio-2.jpg', description: 'Image 2' },
    { img: '/assets/gallery/portfolio-3.jpg', thumb:
    '/assets/gallery/portfolio-3.jpg', description: 'Image 3' },
    { img: '/assets/gallery/portfolio-4.jpg', thumb:
    '/assets/gallery/portfolio-4.jpg', description: 'Image 4' },
    { img: '/assets/gallery/portfolio-5.jpg', thumb:
    '/assets/gallery/portfolio-5.jpg', description: 'Image 5' },
    { img: '/assets/gallery/portfolio-6.jpg', thumb:
    '/assets/gallery/portfolio-6.jpg', description: 'Image 6' },
    { img: '/assets/gallery/portfolio-7.jpg', thumb:
    '/assets/gallery/portfolio-7.jpg', description: 'Image 7' },
    { img: '/assets/gallery/portfolio-8.jpg', thumb:
    '/assets/gallery/portfolio-8.jpg', description: 'Image 8' },
    { img: '/assets/gallery/portfolio-9.jpg', thumb:
    '/assets/gallery/portfolio-9.jpg', description: 'Image 9' }
    ];
  constructor() { }

  ngOnInit(): void {
  }

}
