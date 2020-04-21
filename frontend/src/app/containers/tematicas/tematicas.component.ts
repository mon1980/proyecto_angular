import {Router } from '@angular/router';
import { Component, OnInit, Input} from '@angular/core';
import { TematicasService } from 'src/app/services/tematicas.service';



@Component({
  selector: 'app-tematicas',
  templateUrl: './tematicas.component.html',
  styleUrls: ['./tematicas.component.scss']
})
export class TematicasComponent implements OnInit {
  @Input() public product: any;
  @Input() public rate: number;
  @Input() public currency: string;

  constructor(
  public tematicasService:TematicasService, private router:Router){}

  ngOnInit(): void {

 this.tematicasService.getAll().subscribe(res=>this.tematicasService.setTematicas(res), error => console.log(error));
 
};

mostrarDetalleTematica(tematicaId:number){
this.router.navigate(['tematica', tematicaId])
}
}

