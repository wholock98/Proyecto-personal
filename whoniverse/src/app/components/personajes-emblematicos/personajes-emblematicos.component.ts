import { Component } from '@angular/core';

@Component({
  selector: 'app-personajes-emblematicos',
  templateUrl: './personajes-emblematicos.component.html',
  styleUrls: ['./personajes-emblematicos.component.scss']
})
export class PersonajesEmblematicosComponent {
  changeImage(imageName: string) {
    const displayedImage = document.getElementById('displayed-image') as HTMLImageElement;
    displayedImage.src = 'assets/' + imageName;
  }
}
