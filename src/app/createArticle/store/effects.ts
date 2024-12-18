import { inject } from '@angular/core';
import { createEffect, Actions, ofType } from '@ngrx/effects';
import { switchMap, of, map, catchError, tap } from 'rxjs';
import { ArticleInterface } from 'src/app/shared/types/article.interface';
import { Router } from '@angular/router';
import { CreateArticleService } from '../services/createArticle.service';
import { createArticleActions } from './actions';
import { BackendErrorsInterface } from 'src/app/shared/types/backendErrors.interface';

export const createArticleEffect = createEffect(
  (
    actions$ = inject(Actions),
    createArticleService = inject(CreateArticleService)
  ) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticle),
      switchMap(({ request }) => {
        return createArticleService.createArticle(request).pipe(
          map((article: ArticleInterface) => {
            return createArticleActions.createArticleSuccess({ article });
          }),
          catchError((errors: BackendErrorsInterface) => {
            return of(createArticleActions.createArticleFailure({ errors }));
          })
        );
      })
    );
  },
  { functional: true }
);

export const redirectAfterCreateEffect = createEffect(
  (actions$ = inject(Actions), router = inject(Router)) => {
    return actions$.pipe(
      ofType(createArticleActions.createArticleSuccess),
      tap(({ article }) => router.navigate(['/articles', article.slug]))
    );
  },
  {
    functional: true,
    dispatch: false,
  }
);
