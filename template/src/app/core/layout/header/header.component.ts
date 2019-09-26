import { Component, OnInit } from '@angular/core';

import { assetUrl } from 'src/single-spa/asset-url';

@Component({
  selector: 'temp-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  user1 = assetUrl('/img/user1-128x128.jpg');
  user3 = assetUrl('/img/user3-128x128.jpg');
  user8 = assetUrl('/img/user8-128x128.jpg');

  constructor() { }

  ngOnInit() {
  }

}
