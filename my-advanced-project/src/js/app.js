import { apiService } from './services/api';
import { createHeader } from './components/header';
import { initThemeSwitcher } from './modules/theme.js';
import { registerSW } from './utils/pwa';
import { lazyLoadImages } from './utils/performance';

class App {
    constructor() {
        this.init();
    }
    
    async init() {
        createHeader();
        initThemeSwitcher();
        if ('serviceWorker' in navigator) {
            registerSW();
        }
        lazyLoadImages();
        try {
            const data = await apiService.fetchData();
            this.render(data);
        } catch (error) {
            console.error(error);
        }
    }
    
    render(data) {
        const fragment = document.createDocumentFragment();
        data.forEach(item => {
            const element = this.createCard(item);
            fragment.appendChild(element);
        });
        const content = document.getElementById('content') || document.body;
        content.appendChild(fragment);
    }
    
    createCard(item) {
        const card = document.createElement('div');
        card.className = 'card';
        card.innerHTML = `<h3>${item.title}</h3><p>${item.description}</p>`;
        return card;
    }
}

document.addEventListener('DOMContentLoaded', () => new App());
