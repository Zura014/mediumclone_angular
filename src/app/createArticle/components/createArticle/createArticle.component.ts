import { Component } from '@angular/core';
import { ArticleFormValuesInterface } from 'src/app/shared/components/articleForm/types/articleFormValues.interface';
import { ArticleFormComponent } from '../../../shared/components/articleForm/articleForm.component';
import { Store } from '@ngrx/store';
import { combineLatest } from 'rxjs';
import {
  selectIsSubmitting,
  selectValidationErrors,
} from '../../store/reducers';
import { ArticleRequestInterface } from 'src/app/shared/types/articleRequest.interface';
import { createArticleActions } from '../../store/actions';
import { AsyncPipe, NgIf } from '@angular/common';

@Component({
  selector: 'mc-create-article',
  templateUrl: './createArticle.component.html',
  standalone: true,
  imports: [ArticleFormComponent, NgIf, AsyncPipe],
})
export class CreateArticleComponent {
  initialValues = {
    title: '',
    description: '',
    body: '',
    tagList: [],
  };

  data$ = combineLatest({
    isSubmitting: this.store.select(selectIsSubmitting),
    backendErrors: this.store.select(selectValidationErrors),
  });

  constructor(private store: Store) {}

  onSubmit(articleFormValues: ArticleFormValuesInterface): void {
    const request: ArticleRequestInterface = {
      article: articleFormValues,
    };
    this.store.dispatch(createArticleActions.createArticle({ request }));
  }
}
