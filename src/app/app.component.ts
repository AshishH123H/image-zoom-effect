import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  onMouseMove(event: MouseEvent, target: EventTarget | null) {
    if (target instanceof HTMLImageElement) {
      const imageElement = target; 
  
      const rect = imageElement.getBoundingClientRect();
      const { width, height } = rect;
  
      const offsetX = event.clientX - rect.left;
      const offsetY = event.clientY - rect.top;
  
      const xPercent = (offsetX / width) * 100;
      const yPercent = (offsetY / height) * 100;
  
      console.log('Zoom X:', xPercent, 'Zoom Y:', yPercent);
  
      const scale = 2;
      imageElement.style.transformOrigin = `${xPercent}% ${yPercent}%`;
      imageElement.style.transform = `scale(${scale})`;
    }
  }
  
  onMouseLeave(target: EventTarget | null) {
    if (target instanceof HTMLImageElement) {
      const imageElement = target;
      console.log('Mouse left the image:', imageElement.src);
      imageElement.style.transform = 'scale(1)';
    }
  } 	
  
}
