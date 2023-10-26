import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

import { WikiService } from '../../service/wiki.service';


import { switchMap } from 'rxjs';
import { SlimeDetails } from '../../interfaces/slimeDetails.interface';

@Component({
  selector: 'slime-details-page',
  templateUrl: './slime-details-page.component.html',
  styleUrls: ['./slime-details-page.component.css']
})
export class SlimeDetailsPageComponent implements OnInit {

    public slime?: SlimeDetails;


    constructor(
        private activatedRoute: ActivatedRoute,
        private router: Router,
        private wikiService: WikiService,
    ) {  }

    ngOnInit(): void {
        this.activatedRoute.params
            .pipe(
                switchMap(({ id }) => this.wikiService.retrieveSlimeById(id)),
            )
            .subscribe(( response ) => {
                if (!response) {
                    return this.router.navigateByUrl('');
                }
                return this.slime = response.slime;
            });
    }
}
