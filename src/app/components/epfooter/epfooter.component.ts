import { Component, OnInit } from '@angular/core';

@Component({
	selector: 'epfooter',
	templateUrl: './epfooter.component.html',
	styleUrls:['./epfooter.component.css']
})
export class EpFooterComponent implements OnInit {
	
	title:string;
	description:string;
	angularText:string;
	angularImg:string;
	firebaseText:string;
	firebaseImg:string;
	googleFontText:string;
	googleFontImg:string;
	githubText:string;
	githubImg:string;
	rights:string;

	constructor() {}

	ngOnInit() {
		this.title = 'Technologies and tools used on this site';
		this.description = `Sometimes when visited a site I wonder 
							what tools and technologies they use to 
							created it and that's why I'm adding this 
							section in case you have the same questions. 
							I started learning Angular 2 a few weeks ago 
							and the best way to understand it is 
							creating something. 
							With the hosting I decided to look for something 
							free, reliable and easy to setup so I ended using Firebase.`;
		this.angularText = 'Made with Angular 2';
		this.angularImg = '../assets/images/angular.png';
		this.firebaseText = 'Hosted on Google Firebase';
		this.firebaseImg = '../assets/images/firebaseLogo.png';
		this.googleFontText = 'This site uses Google Fonts';
		this.googleFontImg = '../assets/images/googleFonts.svg';
		this.githubText = 'Repository on Github';
		this.githubImg = '../assets/images/githubLogo.png';
	}
}