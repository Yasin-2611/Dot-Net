import { Injectable } from '@angular/core';

@Injectable({
    providedIn: 'root',
})
export class DataService {
    private items: string[] = [
        'Angular',
        'React',
        'Vue',
        'Svelte',
        'Next.js',
    ];

    getItems(): string[] {
        return [...this.items];
    }

    addItem(item: string): void {
        if (item.trim()) {
            this.items.push(item.trim());
        }
    }

    removeItem(index: number): void {
        this.items.splice(index, 1);
    }

    getItemCount(): number {
        return this.items.length;
    }
}
