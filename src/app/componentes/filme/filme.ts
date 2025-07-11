import { Component } from '@angular/core';

@Component({
  selector: 'app-filme',
  imports: [],
  templateUrl: './filme.html',
  styleUrl: './filme.css'
})
export class Filme {

  alternarFavorito(){
    this.filme1.favorito = !this.filme1.favorito

  }

  filme1 = {
    nome:"À Procura da Felicidade",
    imagem: "/aProcuradafelecidade.jfif",
    sinopse: "Um pai solo batalha contra a pobreza para criar o filho.",
    favorito: false

  }

  // filme2 = {
  //   nome:"Batman: O Cavaleiro das Trevas",
  //   imagem: "/batmanOCavaleiroDasTrevas.jfif",
  //   sinopse: "O Coringa surge para desafiar Batman e mergulhar Gotham no caos."
  // }

  // filme3 = {
  //   nome:"De Olhos Bem Fechados",
  //   imagem: "/deOlhosBemFechados.webp",
  //   sinopse: "A fantasia de Alice leva o marido Bill a um perigoso culto sexual secreto."
  // }

}
