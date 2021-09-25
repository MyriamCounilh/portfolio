import { Component, OnInit } from '@angular/core';
import { Project } from '../../model/project'
import {Sort} from '@angular/material/sort';

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  projects: Project[] = [
    {
      id: 'COOKPRESS',
      title: 'Cookpress',
      subTitle: 'Site de Cuisine',
      link: 'https://www.cookpress.fr/',
      image: '/assets/images/cookpress.webp',
      imageAlt: 'Site de cuisine',
      descriptions: ['Blog accès sur le domaine de la cuisine.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap', 'Angular 7', 'TypeScript', 'REST', 'Java 8', 'Serverless Quarkus', 'MicroProfile', 'MariaDb'],
      badge: 3,
      projectNumber: 0,
    },
    {
      id: 'CHALET_CAVIAR',
      title: 'Chalet et Caviar',
      subTitle: 'Intégrez un thème Wordpress pour un client',
      link: 'https://projet2.myriamcounilh.fr/',
      image: '/assets/images/projet2.webp',
      imageAlt: 'projet WordPress',
      descriptions: ['Créer un site pour promouvoir la vente et la location des chalets.'],
      technologies: ['Wordpress'],
      badge: 0,
      projectNumber: 1,
    },
    {
      id: 'FILMS_PLEIN_AIR',
      title: 'Les Films de Plein Air',
      subTitle: 'Analysez les besoins de votre client pour son festival de films',
      link: 'https://projet3.myriamcounilh.fr/',
      image: '/assets/images/projet3.webp',
      imageAlt: 'Films de plein air',
      descriptions: ['Objectif projeter des films d’auteur qui se déroule du 5 au 8 août de 18h à minuit au parc Monceau à Paris.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap', 'Angular 8', 'TypeScript'],
      badge: 6,
      projectNumber: 2,
    },
    {
      id: 'GENERATEUR_CITATIONS',
      title: 'Générateur de citations !',
      subTitle: 'Imaginez un générateur de citations',
      link: 'https://projet5.myriamcounilh.fr/',
      image: '/assets/images/projet5.webp',
      imageAlt: 'Générateur de citations !',
      descriptions: ['Construire un générateur de citations, elles seront construites aléatoirement en assemblant des morceaux de phrases.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap','Javascript', 'Jquery'],
      badge: 0,
      projectNumber: 3,
    },
    {
      id: 'JEU_PLATEAU',
      title: 'Jeu de plateau en JS',
      subTitle: 'Créez un jeu de plateau tour par tour en JS',
      link: 'https://projet6.myriamcounilh.fr/',
      image: '/assets/images/projet6.webp',
      imageAlt: 'jeu de plateau',
      descriptions: ['Créer un jeu en ligne en JavaScript, où deux joueurs s\'affrontent.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap','Javascript', 'Jquery'],
      badge: 10,
      projectNumber: 4,
    },
    {
      id: 'AVIS_RESTAURANTS',
      title: 'Site d\'avis de restaurants',
      subTitle: 'Lancez votre propre site d\'avis de restaurants',
      link: 'https://projet7.myriamcounilh.fr/',
      image: '/assets/images/projet7.webp',
      imageAlt: 'avis de restaurants',
      descriptions: ['Créer un service simple et utile qui permet d\'avoir des avis sur des restaurants autour de soi'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap', 'VueJs', 'VueX', 'REST', 'Google API', 'SessionStorage'],
      badge: 1,
      projectNumber: 5,
    },
    {
      id: 'TODO_LIST',
      title: 'To-do list',
      subTitle: 'Reprenez et améliorez un projet existant',
      link: 'https://projet8.myriamcounilh.fr/',
      image: '/assets/images/projet8.webp',
      imageAlt: 'To-do list',
      descriptions: ['Reprendre un projet existant, corriger des bugs, ajouter des tests, et optimiser sa performance'],
      technologies: ['Javascript', 'Jasmine'],
      badge: 0,
      projectNumber: 6,
    },
    {
      id: 'MYRIAM_COUNILH',
      title: 'Myriam Counilh',
      subTitle: 'CV et Porfolio',
      link: 'https://www.myriamcounilh.fr',
      image: '/assets/images/myriamCounilh.webp',
      imageAlt: 'Myriam Counilh',
      descriptions: ['Je suis développeuse d\'application frontend junior. Je suis rigoureuse et méthodique.'],
      technologies: ['Html 5', 'Css 3', 'Material', 'Angular 10', 'TypeScript'],
      badge: 9,
      projectNumber: 7,
    },
    {
      id: 'COOKPRESS_NEW',
      title: 'Refont Cookpress',
      subTitle: 'Cookpress avec nouvelle stack',
      link: 'https://test.cookpress.fr/',
      image: '/assets/images/refontCookpress.webp',
      imageAlt: 'Refont Cookpress',
      descriptions: ['Site en cours, je suis en train de le réécrire avec des nouvelles stacks'],
      technologies: ['Html 5', 'Css 3', 'Material', 'Angular 10', 'TypeScript'],
      badge: 4,
      projectNumber: 8,
    },
  ];

  sortedData: Project[];

  constructor() { 
     this.sortData();
}

sortData() {
   this.sortedData = this.projects.slice().sort((a, b) => {
      return a.projectNumber > b.projectNumber ? -1 : 1;
   });
}


  ngOnInit(): void {
  }

}
