import { Component } from '@angular/core';

@Component({
    selector: 'app-root',
    template: `
        <nav>
            <a routerLink="/" routerLinkActive="active" [routerLinkActiveOptions]="{ exact: true }">
                Home
            </a>
        </nav>
        <router-outlet></router-outlet>
    `,
    styles: [`
        nav {
            background: #dd0031;
            padding: 12px 24px;
            display: flex;
            gap: 16px;
        }
        nav a {
            color: #fff;
            text-decoration: none;
            font-weight: 600;
            padding: 6px 12px;
            border-radius: 6px;
        }
        nav a.active {
            background: rgba(255,255,255,0.2);
        }
    `],
})
export class AppComponent {
    title = 'Angular Hands-On';
}
