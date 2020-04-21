import { ActivatedRoute, Router } from '@angular/router';
import { TematicasService } from 'src/app/services/tematicas.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tematica-detail',
  templateUrl: './tematica-detail.component.html',
  styleUrls: ['./tematica-detail.component.scss']
})
export class TematicaDetailComponent implements OnInit {

   public tematica;
  constructor(public tematicasService:TematicasService, public route:ActivatedRoute, private router:Router) { }

  ngOnInit(): void {
    const id= this.route.snapshot.params.id;
    this.tematicasService.getOne(id)
    .subscribe(res=>{this.tematica=res})
  }

  mostrarDetalleProducto(productId:number){
    this.router.navigate(['product', productId])
    }
}
