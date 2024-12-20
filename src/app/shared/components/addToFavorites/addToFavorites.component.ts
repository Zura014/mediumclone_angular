import { NgClass } from '@angular/common';
import { Component, Input } from '@angular/core';
import { AddToFavoritesService } from './services/addToFavorites.service';
import { Store } from '@ngrx/store';
import { addToFavoritesActions } from './store/actions';

@Component({
  selector: 'mc-add-to-favorites',
  templateUrl: './addToFavorites.component.html',
  standalone: true,
  imports: [NgClass],
})
export class AddToFavoritesComponent {
  @Input() isFavorited: boolean = false;
  @Input() favoritesCount: number = 0;
  @Input() articleSlug: string = '';

  constructor(private store: Store) {}

  handleLike(): void {
    this.store.dispatch(
      addToFavoritesActions.addToFavorites({
        isFavorited: this.isFavorited,
        slug: this.articleSlug,
      })
    );
    if (this.isFavorited) {
      this.favoritesCount--;
    } else {
      this.favoritesCount++;
    }

    this.isFavorited = !this.isFavorited;
  }
}
