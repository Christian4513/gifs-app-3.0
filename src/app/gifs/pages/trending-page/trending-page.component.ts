import { Component, ElementRef, inject, viewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';

@Component({
  selector: 'app-trending-page',
  // imports: [GifListComponent],
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export class TrendingPageComponent {
   gifService = inject( GifsService );

   scrollDivRef = viewChild<ElementRef<HTMLDivElement>>('groupDiv');

   onScroll( event: Event){
    const scrollDiv = this.scrollDivRef()?.nativeElement;
    if(!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    console.log({scrollDiv, clientHeight, scrollHeight});

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    console.log({isAtBottom})
    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
   }


}
