import { Injectable } from '@angular/core';

//declare let alertify: any;
import * as alertifyJs from 'alertifyjs';

@Injectable({
  providedIn: 'root'
})
export class AlertifyService {

  constructor() { }

  confirm(message: string, okCallback: () => any) {
    alertifyJs.confirm(message, function(e) {
      if (e)
        okCallback();
      else
      {}
    });
  }

  success(message: string) { alertifyJs.success(message); }
  error(message: string) { alertifyJs.error(message); }
  warning(message: string) { alertifyJs.warning(message); }
  message(message: string) { alertifyJs.message(message); }

}
