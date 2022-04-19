import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

const host = 'http://localhost:3000';

@Injectable()
export class HostInterceptor implements HttpInterceptor {
  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    const urlPath = new URL(req.url).pathname;
    const correctHostReq = req.clone({
      url: `${host}${urlPath}`,
    });
    return next.handle(correctHostReq);
  }

}