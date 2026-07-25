# Angular Hands-On Exercise

## Scenario / Goal
Build a basic **Angular** application demonstrating core Angular concepts:
components, data binding, directives, services, and routing.

## Concept — Angular Framework

Angular is a **TypeScript-based** platform for building web applications. It
provides a component-based architecture with built-in support for:
- **Two-way data binding** (`[(ngModel)]`)
- **Dependency injection**
- **Routing** (`@angular/router`)
- **Reactive forms** and **template-driven forms**
- **HTTP client** for API calls

## Project Structure

```
Angular Hands-on/
├── src/
│   ├── app/
│   │   ├── components/
│   │   │   ├── home/
│   │   │   │   ├── home.component.ts
│   │   │   │   ├── home.component.html
│   │   │   │   └── home.component.css
│   │   │   ├── about/
│   │   │   │   ├── about.component.ts
│   │   │   │   ├── about.component.html
│   │   │   │   └── about.component.css
│   │   │   └── contact/
│   │   │       ├── contact.component.ts
│   │   │       ├── contact.component.html
│   │   │       └── contact.component.css
│   │   ├── services/
│   │   │   └── data.service.ts
│   │   ├── app.component.ts
│   │   ├── app.component.html
│   │   ├── app.component.css
│   │   ├── app.module.ts
│   │   └── app-routing.module.ts
│   ├── index.html
│   └── styles.css
├── angular.json
├── package.json
├── tsconfig.json
└── README.md
```

## Key Concepts Covered

### 1. Components
Angular apps are built from components — self-contained units with their own
template (HTML), styles (CSS), and logic (TypeScript).

```typescript
@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.css'],
})
export class HomeComponent {
    title = 'Welcome to Angular!';
}
```

### 2. Data Binding
```html
<!-- Interpolation -->
<h1>{{ title }}</h1>

<!-- Property binding -->
<img [src]="imageUrl" />

<!-- Event binding -->
<button (click)="onClick()">Click me</button>

<!-- Two-way binding -->
<input [(ngModel)]="name" />
```

### 3. Directives
```html
<!-- Structural directives -->
<div *ngIf="showContent">Visible when true</div>
<ul>
    <li *ngFor="let item of items; let i = index">
        {{ i + 1 }}. {{ item }}
    </li>
</ul>

<!-- Attribute directives -->
<p [ngClass]="{ active: isActive, highlight: isHighlighted }">Styled text</p>
<div [ngStyle]="{ 'color': textColor, 'font-size': fontSize + 'px' }">Dynamic styles</div>
```

### 4. Services & Dependency Injection
```typescript
@Injectable({ providedIn: 'root' })
export class DataService {
    private items: string[] = ['Angular', 'React', 'Vue'];

    getItems(): string[] {
        return this.items;
    }

    addItem(item: string): void {
        this.items.push(item);
    }
}

// Inject into component
constructor(private dataService: DataService) {
    this.items = this.dataService.getItems();
}
```

### 5. Routing
```typescript
const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'contact', component: ContactComponent },
    { path: '**', redirectTo: '' },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
```

```html
<!-- Navigation -->
<nav>
    <a routerLink="/" routerLinkActive="active">Home</a>
    <a routerLink="/about" routerLinkActive="active">About</a>
    <a routerLink="/contact" routerLinkActive="active">Contact</a>
</nav>
<router-outlet></router-outlet>
```

### 6. Lifecycle Hooks
```typescript
export class MyComponent implements OnInit, OnDestroy {
    ngOnInit(): void {
        console.log('Component initialised');
    }

    ngOnDestroy(): void {
        console.log('Component destroyed');
    }
}
```

## How to Run

```bash
# Prerequisites: Node.js 18+ and Angular CLI
npm install -g @angular/cli

# Create a new project (if starting fresh)
ng new angular-handson --routing --style=css
cd angular-handson

# Generate components
ng generate component components/home
ng generate component components/about
ng generate component components/contact

# Generate service
ng generate service services/data

# Serve locally
ng serve --open
```

The app will be available at `http://localhost:4200`.

## Expected Output

A single-page Angular application with:
- Navigation bar with Home, About, and Contact links.
- **Home page** displaying a welcome message with two-way data binding.
- **About page** rendering a list of items using `*ngFor`.
- **Contact page** with a form using template-driven or reactive forms.
- Data shared across components via an injected service.

## Key Takeaways
- Angular uses **TypeScript** and a **module-based** architecture.
- **Components** encapsulate template, styles, and logic.
- **Data binding** (interpolation, property, event, two-way) connects the template to the component class.
- **Services** centralise business logic and are provided via dependency injection.
- **Routing** maps URL paths to components for SPA navigation.
- **Directives** (`*ngIf`, `*ngFor`, `[ngClass]`) control DOM rendering and styling.
