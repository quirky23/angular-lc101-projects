import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'fav-photos',
  templateUrl: './fav-photos.component.html',
  styleUrls: ['./fav-photos.component.css']
})
export class FavPhotosComponent implements OnInit {
  photosTitle = 'Miscellaneous Corgis';
  image1 = 'https://i.pinimg.com/originals/87/46/f9/8746f9646c0f5436e5bd5804f6a51a31.jpg';
  image2 = 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_1612.jpg';
  image3 = 'https://images.dog.ceo/breeds/corgi-cardigan/n02113186_2994.jpg';

  constructor() { }

  ngOnInit() {
  }

}