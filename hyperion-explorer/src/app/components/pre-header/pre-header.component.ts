import { Component, OnInit } from '@angular/core';
import {ChainService} from '../../services/chain.service';

@Component({
  selector: 'app-pre-header',
  templateUrl: './pre-header.component.html',
  styleUrls: ['./pre-header.component.css']
})
export class PreHeaderComponent {

  constructor(public chainData: ChainService) { }

}
