import { Component, OnInit } from '@angular/core';

interface CardModel {
  title: string;
  subTitle: string;
  link: string;
  image: string;
  imageAlt: string;
  description: string[];
  technologie: string;
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
      description: ['Blog accès sur le domaine de la cuisine.'],
      technologie: 'html5'
    },
    {
      title: 'Chalet et Caviar',
      subTitle: 'Intégrez un thème Wordpress pour un client',
      link: 'https://projet2.myriamcounilh.fr/',
      image: '/assets/images/projet2.webp',
      imageAlt: 'projet WordPress',
      description: ['Créer un site pour promouvoir la vente et la location des chalets.'],
      technologie: 'wordpress'
    },
    {
      title: 'Les Films de Plein Air',
      subTitle: 'Analysez les besoins de votre client pour son festival de films',
      link: 'https://projet3.myriamcounilh.fr/',
      image: '/assets/images/projet3.webp',
      imageAlt: 'Films de plein air',
      description: ['Objectif projeter des films d’auteur qui se déroule du 5 au 8 août de 18h à minuit au parc Monceau à Paris.'],
      technologie: 'html5'
    },
    {
      title: 'Générateur de citations !',
      subTitle: 'Imaginez un générateur de citations',
      link: 'https://projet5.myriamcounilh.fr/',
      image: '/assets/images/projet5.webp',
      imageAlt: 'Générateur de citations !',
      description: ['Construire un générateur de citations, elles seront construites aléatoirement en assemblant des morceaux de phrases.'],
      technologie: 'javascript'
    },
    {
      title: 'Jeu de plateau en JS',
      subTitle: 'Créez un jeu de plateau tour par tour en JS',
      link: 'https://projet6.myriamcounilh.fr/',
      image: '/assets/images/projet6.webp',
      imageAlt: 'jeu de plateau',
      description: ['Créer un jeu en ligne en JavaScript\, où deux joueurs s\'affrontent.'],
      technologie: 'javascript'
    },
    {
      title: 'Site d\'avis de restaurants',
      subTitle: 'Lancez votre propre site d\'avis de restaurants',
      link: 'https://projet7.myriamcounilh.fr/',
      image: '/assets/images/projet7.webp',
      imageAlt: 'avis de restaurants',
      description: ['Créer un service simple et utile qui permet d\'avoir des avis sur des restaurants autour de soi'],
      technologie: 'javascript'
    },
    {
      title: 'To-do list',
      subTitle: 'Reprenez et améliorez un projet existant',
      link: 'https://projet8.myriamcounilh.fr/',
      image: '/assets/images/projet8.webp',
      imageAlt: 'To-do list',
      description: ['Reprendre un projet existant\, corriger des bugs\, ajouter des tests\, et optimiser sa performance'],
      technologie: 'javascript'
    }
  ];
  constructor() { }

  ngOnInit(): void {
  }

}
