import { Component } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.scss']
})
export class INICIOComponent {
  changeImage(imageName: string) {
        const displayedImage = document.getElementById('displayed-image') as HTMLImageElement;
        displayedImage.src = 'assets/' + imageName;
    }
  

}


