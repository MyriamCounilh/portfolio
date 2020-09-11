import { Component, OnInit } from '@angular/core';

interface CardModel {
  title: string;
  subTitle: string;
  link: string;
  image: string;
  imageAlt: string;
  descriptions: string[];
  technologies: string[];
}

@Component({
  selector: 'app-portfolio',
  templateUrl: './portfolio.component.html',
  styleUrls: ['./portfolio.component.scss']
})
export class PortfolioComponent implements OnInit {

  cards: CardModel[] = [
    {
      title: 'Cookpress',
      subTitle: 'Site de Cuisine',
      link: 'https://www.cookpress.fr/',
      image: '/assets/images/cookpress.webp',
      imageAlt: 'Site de cuisine',
      descriptions: ['Blog accès sur le domaine de la cuisine.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap', 'Angular 7', 'TypeScript', 'REST', 'Java 8', 'Serverless Quarkus', 'MicroProfile', 'MariaDb']
    },
    {
      title: 'Chalet et Caviar',
      subTitle: 'Intégrez un thème Wordpress pour un client',
      link: 'https://projet2.myriamcounilh.fr/',
      image: '/assets/images/projet2.webp',
      imageAlt: 'projet WordPress',
      descriptions: ['Créer un site pour promouvoir la vente et la location des chalets.'],
      technologies: ['Wordpress']
    },
    {
      title: 'Les Films de Plein Air',
      subTitle: 'Analysez les besoins de votre client pour son festival de films',
      link: 'https://projet3.myriamcounilh.fr/',
      image: '/assets/images/projet3.webp',
      imageAlt: 'Films de plein air',
      descriptions: ['Objectif projeter des films d’auteur qui se déroule du 5 au 8 août de 18h à minuit au parc Monceau à Paris.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap', 'Angular 8', 'TypeScript']
    },
    {
      title: 'Générateur de citations !',
      subTitle: 'Imaginez un générateur de citations',
      link: 'https://projet5.myriamcounilh.fr/',
      image: '/assets/images/projet5.webp',
      imageAlt: 'Générateur de citations !',
      descriptions: ['Construire un générateur de citations, elles seront construites aléatoirement en assemblant des morceaux de phrases.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap','Javascript', 'Jquery']
    },
    {
      title: 'Jeu de plateau en JS',
      subTitle: 'Créez un jeu de plateau tour par tour en JS',
      link: 'https://projet6.myriamcounilh.fr/',
      image: '/assets/images/projet6.webp',
      imageAlt: 'jeu de plateau',
      descriptions: ['Créer un jeu en ligne en JavaScript, où deux joueurs s\'affrontent.'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap','Javascript', 'Jquery']
    },
    {
      title: 'Site d\'avis de restaurants',
      subTitle: 'Lancez votre propre site d\'avis de restaurants',
      link: 'https://projet7.myriamcounilh.fr/',
      image: '/assets/images/projet7.webp',
      imageAlt: 'avis de restaurants',
      descriptions: ['Créer un service simple et utile qui permet d\'avoir des avis sur des restaurants autour de soi'],
      technologies: ['Html 5', 'Css 3', 'Bootstrap', 'VueJs', 'VueX', 'REST', 'Google API', 'SessionStorage']
    },
    {
      title: 'To-do list',
      subTitle: 'Reprenez et améliorez un projet existant',
      link: 'https://projet8.myriamcounilh.fr/',
      image: '/assets/images/projet8.webp',
      imageAlt: 'To-do list',
      descriptions: ['Reprendre un projet existant, corriger des bugs, ajouter des tests, et optimiser sa performance'],
      technologies: ['Javascript', 'Jasmine']
    },
    {
      title: 'Myriam Counilh',
      subTitle: 'CV et Porfolio',
      link: 'https://www.myriamcounilh.fr',
      image: '/assets/images/myriamCounilh.webp',
      imageAlt: 'Myriam Counilh',
      descriptions: ['Je suis développeuse d\'application frontend junior. Je suis rigoureuse et méthodique.'],
      technologies: ['Html 5', 'Css 3', 'Material', 'Angular 10', 'TypeScript']
    },
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
