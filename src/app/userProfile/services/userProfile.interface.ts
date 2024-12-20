import { HttpClient } from '@angular/common/http';
import { inject, Injectable } from '@angular/core';
import { GetUserProfileResponseInterface } from '../types/getUserProfileResponse.interface';
import { UserProfileInterface } from '../types/userProfile.interface';
import { environment } from 'src/environments/environment.development';
import { map, Observable } from 'rxjs';

@Injectable()
export class UserProfileService {
  http = inject(HttpClient);

  getUserProfile(slug: string): Observable<UserProfileInterface> {
    const url = `${environment.apiUrl}/profiles/${slug}`;
    return this.http
      .get<GetUserProfileResponseInterface>(url)
      .pipe(map((res) => res.profile));
  }
}
