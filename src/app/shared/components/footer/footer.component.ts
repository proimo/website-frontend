import { Component } from '@angular/core';
import { MenuItem, MenuItemTypes } from '../../models/menu-item';

@Component({
    selector: 'app-footer',
    templateUrl: './footer.component.html',
    styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
    buttonItem: MenuItem;
    menuItems: MenuItem[] = [
        {
            title: 'Oferte',
            link: '/oferte',
            type: MenuItemTypes.InternalLink
        },
        {
            title: 'Blog',
            link: 'https://google.com',
            type: MenuItemTypes.ExternalLink,
        },
        {
            title: 'Oferte',
            link: '/oferte',
            type: MenuItemTypes.InternalLink
        },
        {
            title: 'Blog',
            link: 'https://google.com',
            type: MenuItemTypes.ExternalLink,
        },
        {
            title: 'Oferte',
            link: '/oferte',
            type: MenuItemTypes.InternalLink
        },
        {
            title: 'Blog',
            link: 'https://google.com',
            type: MenuItemTypes.ExternalLink,
        },
        {
            title: 'Oferte',
            link: '/oferte',
            type: MenuItemTypes.InternalLink
        },
        {
            title: 'Servicii',
            children: [
                {
                    title: 'Servicii children 1',
                    link: 'https://google.com',
                    type: MenuItemTypes.ExternalLink,
                },
                {
                    title: 'Servicii children 2',
                    link: 'https://google.com',
                    type: MenuItemTypes.ExternalLink,
                }
            ]
        },
        {
            title: 'Vreau să vând',
            link: 'https://google.com',
            type: MenuItemTypes.Button,
        },
    ];

    constructor() {
        this.buttonItem = this.menuItems.find(item => item.type === MenuItemTypes.Button);
        this.menuItems = this.menuItems.filter(item => item.type !== MenuItemTypes.Button && !item.children);
    }
}
