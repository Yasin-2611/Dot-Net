import { Component } from '@angular/core';

@Component({
    selector: 'app-home',
    template: `
        <div class="home-container">
            <h1>{{ title }}</h1>
            <p>Welcome to the Angular Hands-on Exercise!</p>

            <div class="greeting-section">
                <label for="nameInput">Enter your name:</label>
                <input
                    id="nameInput"
                    type="text"
                    [(ngModel)]="userName"
                    placeholder="Your name"
                />
                <p *ngIf="userName">Hello, <strong>{{ userName }}</strong>! 👋</p>
            </div>

            <div class="features">
                <h2>Angular Concepts Demonstrated</h2>
                <ul>
                    <li *ngFor="let feature of features; let i = index"
                        [ngClass]="{ highlight: i % 2 === 0 }">
                        {{ i + 1 }}. {{ feature }}
                    </li>
                </ul>
            </div>

            <div class="counter-section">
                <h3>Counter: {{ count }}</h3>
                <button (click)="decrement()">−</button>
                <button (click)="reset()">Reset</button>
                <button (click)="increment()">+</button>
            </div>
        </div>
    `,
    styles: [`
        .home-container {
            max-width: 600px;
            margin: 0 auto;
            padding: 24px;
        }
        h1 {
            color: #dd0031;
            text-align: center;
        }
        .greeting-section {
            margin: 20px 0;
            padding: 16px;
            background: #f8f9fa;
            border-radius: 8px;
        }
        .greeting-section input {
            padding: 8px 12px;
            border: 2px solid #e0e0e0;
            border-radius: 6px;
            font-size: 14px;
            margin-left: 8px;
        }
        .features ul {
            list-style: none;
            padding: 0;
        }
        .features li {
            padding: 8px 12px;
            margin: 4px 0;
            border-radius: 6px;
            background: #fafafa;
        }
        .features li.highlight {
            background: #fff0f0;
            font-weight: 600;
        }
        .counter-section {
            text-align: center;
            margin-top: 20px;
        }
        .counter-section button {
            padding: 8px 20px;
            margin: 0 4px;
            border: none;
            border-radius: 6px;
            background: #dd0031;
            color: #fff;
            font-weight: 600;
            cursor: pointer;
        }
    `],
})
export class HomeComponent {
    title = 'Angular Hands-On Exercise';
    userName = '';
    count = 0;

    features = [
        'Components & Templates',
        'Data Binding (Interpolation, Property, Event, Two-way)',
        'Structural Directives (*ngIf, *ngFor)',
        'Attribute Directives ([ngClass], [ngStyle])',
        'Services & Dependency Injection',
        'Routing & Navigation',
        'Lifecycle Hooks',
    ];

    increment(): void {
        this.count++;
    }

    decrement(): void {
        this.count--;
    }

    reset(): void {
        this.count = 0;
    }
}
