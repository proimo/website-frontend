import { Component, HostListener } from '@angular/core';

@Component({
    selector: 'app-offer-section',
    templateUrl: './offer-section.component.html',
    styleUrls: ['./offer-section.component.scss']
})
export class OfferSectionComponent {
    length = 10;
    sections = [
        {
            name: 'Apartamente noi',
            image: 'assets/icons/new-apartments.png',
            color: '#FFC87E',
            offers: [
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
            ]
        },
        {
            name: 'Case noi',
            image: 'assets/icons/new-homes.png',
            color: '#FFADAD',
            offers: [
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
            ]
        },
        {
            name: 'Top terenuri',
            image: 'assets/icons/new-terrains.png',
            color: '#A0B5FF',
            offers: [
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
            ]
        },
        {
            name: 'Top spaţii comerciale',
            image: 'assets/icons/new-spaces.png',
            color: '#83BDA5',
            offers: [
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
                {
                    title: 'Spatiu comercial Gyros',
                    price: '450.000 lei / lună',
                    rooms: 2,
                    toilets: 2,
                    area: '160m',
                    image: 'assets/images/real-estate.png'
                },
            ]
        }
    ];

    constructor() {
        if (window.innerWidth > 766 && window.innerWidth < 1200) {
            this.length = 3;
        } else {
            this.length = 10;
        }
    }

    @HostListener('window:resize', ['$event'])
    onResize(event) {
        if (event.target.innerWidth > 766 && event.target.innerWidth < 1200) {
            console.log(event.target.innerWidth);
            this.length = 3;
        } else {
            this.length = 10;
        }
    }
}
