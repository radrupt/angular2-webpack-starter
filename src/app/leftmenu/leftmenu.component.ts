import {
  Component,
  OnInit
} from '@angular/core';

import { MenudataService } from './menudata';
import { MyToggleDirective } from './mytoggle';
import { MyHighLightDirective } from './myhighlight';

@Component({
  selector: 'leftmenu',
  
  providers: [
    MenudataService
  ],
  
  styleUrls: [ './leftmenu.component.css' ],
  
  templateUrl: './leftmenu.component.html'
})
export class LeftmenuComponent implements OnInit {
  
  public menus:any[] = new Array();
  
  public menuStatus: boolean = true;

  constructor(
    public menudata: MenudataService
  ) {}

  public ngOnInit() {
    this.menudata.getData().subscribe(menus => {return this.menus = menus});
  }
}