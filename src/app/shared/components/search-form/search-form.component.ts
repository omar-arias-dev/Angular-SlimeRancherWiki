import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'shared-search-form',
  templateUrl: './search-form.component.html',
  styleUrls: ['./search-form.component.css']
})
export class SearchFormComponent {

    @Output()
    public onSearch: EventEmitter<boolean> = new EventEmitter<boolean>();

    @Output()
    public onSearchTerm: EventEmitter<string> = new EventEmitter<string>();

    public searchTerm: string = '';


    public emitOnSearch(): void {
        this.onSearch.emit(true);
    }

    public emitOnSearchTerm(): void {
        this.onSearchTerm.emit(this.searchTerm);
    }
}
