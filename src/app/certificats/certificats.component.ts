import { Component, OnInit } from '@angular/core';

interface CertificatModel {
  title: string;
  link: string;
}

@Component({
  selector: 'app-certificats',
  templateUrl: './certificats.component.html',
  styleUrls: ['./certificats.component.scss']
})
export class CertificatsComponent implements OnInit {

 certificats: CertificatModel[] = [
   {
    title: 'Découvrez le fonctionnement des algorithmes',
    link: '/assets/certificats/6971047918.pdf',
   },
   {
     title: 'Comprendre le Web',
     link: '/assets/certificats/2407236288.pdf',
   },
   {
     title: 'Débutez l\'analyse logicielle avec UML',
     link: '/assets/certificats/1809931317.pdf',
   },
   {
     title: 'Apprenez à créer votre site web avec HTML5 et CSS3',
     link: '/assets/certificats/6583164203.pdf',
   },
   {
     title: 'Créez un site moderne et professionnel avec WordPress 5',
     link: '/assets/certificats/9637565722.pdf',
   },
   {
     title: 'Prenez en main Bootstrap',
     link: '/assets/certificats/1924652717.pdf',
   },
   {
     title: 'Gérez un projet digital avec une méthodologie en cascade',
     link: '/assets/certificats/9760984175.pdf',
   },
   {
     title: 'Gérez votre projet informatique facilement',
     link: '/assets/certificats/2827242371.pdf',
   },
   {
     title: 'Réalisez le cahier des charges d\'un projet digital',
     link: '/assets/certificats/8344297497.pdf',
   },
   {
     title: 'Modélisez et implémentez une base de données relationnelle avec UML',
     link: '/assets/certificats/4324462419.pdf',
   },
   {
     title: 'Écrivez du JavaScript pour le web',
     link: '/assets/certificats/1502250182.pdf',
   },
   {
     title: 'Apprenez à coder avec JavaScript',
     link: '/assets/certificats/3983497292.pdf',
   },
   {
     title: 'Simplifiez vos développements JavaScript avec jQuery',
     link: '/assets/certificats/2785753200.pdf',
   },
   {
     title: 'Utilisez Git et GitHub pour vos projets de développement',
     link: '/assets/certificats/8871425839.pdf',
   },
   {
     title: 'Testez l\'interface de votre site',
     link: '/assets/certificats/3026226274.pdf',
   },
 ];


  constructor() { }

  ngOnInit(): void {
  }

}
