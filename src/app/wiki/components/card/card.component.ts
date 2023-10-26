import { Component, Input } from '@angular/core';

@Component({
  selector: 'card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

    @Input()
    public id: string = '';

    @Input()
    public name: string = '';

    @Input()
    public image: string = '';

}
