import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Http, RequestOptions } from '@angular/http';
import { AuthHttp, AuthConfig } from 'angular2-jwt';

export function authServiceHttpFactory (http: Http, options: RequestOptions) {
  return new AuthHttp(new AuthConfig, http, options);
}

@NgModule({
  imports: [
    CommonModule
  ],
  providers: [
    {
      provide: AuthHttp,
      useFactory: authServiceHttpFactory,
      deps: [Http, RequestOptions]
    }
  ],
  declarations: []
})
export class AuthModule { }
