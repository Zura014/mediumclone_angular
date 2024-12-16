import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { articleActions } from '../../store/actions';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { combineLatest, filter, map } from 'rxjs';
import {
  selectarticleData,
  selectError,
  selectIsLoading,
} from '../../store/reducers';
import { CurrentUserInterface } from 'src/app/shared/types/currentUser.interface';
import { AsyncPipe, NgIf } from '@angular/common';
import { ErrorMessageComponent } from '../../../shared/components/errorMessage/errorMessage.component';
import { LoadingComponent } from 'src/app/shared/components/loading/loading.component';
import { TagListComponent } from '../../../shared/components/tagList/tagList.component';
import { selectCurrentUser } from 'src/app/auth/store/reducers';

@Component({
  selector: 'mc-article',
  templateUrl: './article.component.html',
  standalone: true,
  imports: [
    AsyncPipe,
    NgIf,
    RouterLink,
    ErrorMessageComponent,
    LoadingComponent,
    TagListComponent,
  ],
})
export class ArticleComponent implements OnInit {
  slug = this.route.snapshot.paramMap.get('slug') ?? '';

  isAuthor$ = combineLatest({
    article: this.store.select(selectarticleData),
    currentUser: this.store
      .select(selectCurrentUser)
      .pipe(
        filter(
          (currentUser): currentUser is CurrentUserInterface | null =>
            currentUser !== undefined
        )
      ),
  }).pipe(
    map(({ article, currentUser }) => {
      if (!article || !currentUser) return false;
      else return currentUser.username === article.author.username;
    })
  );

  data$ = combineLatest({
    isLoading: this.store.select(selectIsLoading),
    error: this.store.select(selectError),
    article: this.store.select(selectarticleData),
    isAuthor: this.isAuthor$,
  });

  constructor(private store: Store, private route: ActivatedRoute) {}
  ngOnInit(): void {
    this.store.dispatch(articleActions.getArticle({ slug: this.slug }));
  }
}
function selectcurrentUser(state: object): unknown {
  throw new Error('Function not implemented.');
}
