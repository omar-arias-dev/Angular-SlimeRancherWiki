import { Component } from '@angular/core';

import { WikiService } from '../../service/wiki.service';
import { Slime } from '../../interfaces/slime.interface';

@Component({
  selector: 'slimes-page',
  templateUrl: './slimes-page.component.html',
  styleUrls: ['./slimes-page.component.css']
})
export class SlimesPageComponent {

    public slimes: Slime[] = [];

    public slimesByTerm: Slime[] = [];

    constructor(private wikiService: WikiService) {  }


    public getAllSlimes(search: boolean): void {
        if (!search || this.slimes.length > 0) return;
        this.wikiService.retrieveAllSlimes()
            .subscribe(response => {
                this.slimes = response.slimes;
            });
    }

    public getSlimesById(term: string): void {
        if (this.slimes.length === 0) return;
        this.slimesByTerm = this.slimes.filter(slime => slime.id.includes(term));
    }
}
