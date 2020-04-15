
import { Component, OnInit } from '@angular/core';
import { TematicasService } from 'src/app/services/tematicas.service';


@Component({
  selector: 'app-tematicas',
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.scss']
})
export class TematicasComponent implements OnInit {

  constructor(
  public tematicasService:TematicasService){}

  ngOnInit(): void {
 this.tematicasService.getAll().subscribe(res=>this.tematicasService.setTematicas(res), error => console.log(error))



  }
}



