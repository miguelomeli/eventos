import { Component, OnInit } from '@angular/core';
import { Lightbox } from 'ngx-lightbox';


@Component({
  selector: 'app-galeria',
  templateUrl: './galeria.component.html',
  styleUrls: ['./galeria.component.css']
})

export class GaleriaComponent implements OnInit {
  imgs = [
    'assets/img/galeria/img/01.jpg', 'assets/img/galeria/img/02.jpg', 'assets/img/galeria/img/03.jpg', 'assets/img/galeria/img/04.jpg',
    'assets/img/galeria/img/05.jpg', 'assets/img/galeria/img/06.jpg', 'assets/img/galeria/img/07.jpg', 'assets/img/galeria/img/08.jpg',
    'assets/img/galeria/img/09.jpg'
  ];
  thumbs = [
    'assets/img/galeria/thumb/T01.jpg', 'assets/img/galeria/thumb/T02.jpg', 'assets/img/galeria/thumb/T03.jpg',
    'assets/img/galeria/thumb/T04.jpg', 'assets/img/galeria/thumb/T05.jpg', 'assets/img/galeria/thumb/T07.jpg',
    'assets/img/galeria/thumb/T08.jpg', 'assets/img/galeria/thumb/T09.jpg'
  ];
  album: Array<{ src: string, caption: string, thumb: string }> = [];

  constructor(private lighbox: Lightbox) {
    for (let i = 0; i < 9; i++) {
      const src = this.imgs[i];
      const caption = 'Eventos Independencia';
      const thumb = this.thumbs[i];
      const album = {
        src: src,
        caption: caption,
        thumb: thumb
      };

      this.album.push(album);
    }
    console.log(this.album);
  }

  ngOnInit() {
  }

  open(index) {
    console.log(this.album[index]);
    // open lightbox
    this.lighbox.open(this.album, index);
  }

  close() {
    // close lightbox programmatically
    this.lighbox.close();
  }

}
