import { Component, OnInit } from '@angular/core';

import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'temp-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {

  adminLTELogo= assetUrl('/img/AdminLTELogo.png');
  user2 = assetUrl('/img/user2-160x160.jpg');

  constructor() { }

  ngOnInit() {
  }

}
