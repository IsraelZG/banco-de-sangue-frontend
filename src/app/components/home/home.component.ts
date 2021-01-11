import { Component, OnInit } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  candidatosPorEstado = [];
  imcPorIdade = [];
  obesosPorSexo = [];
  idadePorTipoSanguineo = [];
  doadoresPorReceptor = [];
  loaded = false;

  constructor(private service: DataService) { }

  ngOnInit(): void {
    console.log('lista iniciou')
    this.service.visualizar().subscribe(data => {
      console.log(data);
      this.candidatosPorEstado = data['candidatosPorEstado'];
      this.imcPorIdade = data['imcPorIdade'];
      this.obesosPorSexo = data['obesosPorSexo'];
      this.idadePorTipoSanguineo = data['idadePorTipoSanguineo'];
      this.doadoresPorReceptor = data['doadoresPorReceptor'];
      this.loaded = true;
    });
  }

}
