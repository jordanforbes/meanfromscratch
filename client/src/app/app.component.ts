import { Component } from '@angular/core';
import {ItemService} from './services/item.service';

@Component({
	moduleId: module.id,
  selector: 'my-app',
  templateUrl: 'app.component.html',
  providers:[ItemService]
})
export class AppComponent  {  }
