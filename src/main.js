import { createApp } from 'vue'
import './style.css'
import Grid from './Grid.vue'
import { L10n } from '@syncfusion/ej2-base';

// Minimal registration for English (keeps built-in defaults, removes warning)
L10n.load({
  en: {
    grid: {},    // add other modules you use (pager, dropdowns, inputs) if desired
    pager: {},
  }
});

// If you prefer explicit English strings instead of defaults, use the full JSON:
// import enLocale from '@syncfusion/ej2-locale/src/en.json';
// L10n.load({ en: enLocale as any });

createApp(Grid).mount('#app')