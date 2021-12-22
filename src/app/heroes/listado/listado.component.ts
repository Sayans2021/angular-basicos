import { ClassGetter } from "@angular/compiler/src/output/output_ast";
import { Component } from "@angular/core";

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html'
})
export class ListadoComponent {

  heroes: string[] = ['Spiderman', 'Ironman', 'Hulk', 'Thor', 'Capitán América'];
  heroeBorrado: string = '';

  borrarHeroe(){
    //console.log('borando...');
    //let ultimo = this.heroes.length;
    //this.heroes.splice(ultimo-1, 1);

    this.heroeBorrado = this.heroes.shift() || '';
    //console.log(heroeBorrado);
  }

}
