import { Component, OnInit } from '@angular/core';
import { PagabelEntities } from 'src/app/models/pagabel-entities';
import { TheOneCharacter } from 'src/app/models/the-one-character';
import { TheOneServiceService } from 'src/app/servicies/the-one-service.service';

@Component({
  selector: 'app-the-one-list',
  templateUrl: './the-one-list.component.html',
  styleUrls: ['./the-one-list.component.css']
})
export class TheOneListComponent implements OnInit {
 

  constructor(private theOneServiceService: TheOneServiceService) { }

  ngOnInit() {   
  }

}
