import { AfterViewInit, Component, ElementRef, inject, ViewChild } from '@angular/core';
import { GifsService } from '../../services/gifs.service';
import { ScrollStateService } from '../../../shared/services/scroll-state.service';

@Component({
  selector: 'app-trending-page',
  templateUrl: './trending-page.component.html',
  styleUrl: './trending-page.component.css'
})
export class TrendingPageComponent implements AfterViewInit{
   gifService = inject( GifsService );
   scrollStateService = inject(ScrollStateService);

   @ViewChild('groupDiv') scrollDivRef!: ElementRef<HTMLDivElement>;

   ngAfterViewInit(): void {
     const scrollDiv = this.scrollDivRef?.nativeElement;
     if(!scrollDiv) return

     scrollDiv.scrollTop = this.scrollStateService.trendigScrollState();
   }

   onScroll( event: Event){
    const scrollDiv = this.scrollDivRef?.nativeElement;
    if(!scrollDiv) return;
    const scrollTop = scrollDiv.scrollTop;
    const clientHeight = scrollDiv.clientHeight;
    const scrollHeight = scrollDiv.scrollHeight;
    console.log({scrollDiv, clientHeight, scrollHeight});

    const isAtBottom = scrollTop + clientHeight + 300 >= scrollHeight;
    this.scrollStateService.trendigScrollState.set(scrollTop);

    if (isAtBottom) {
      this.gifService.loadTrendingGifs();
    }
   }


}
