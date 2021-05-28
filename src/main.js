import { createApp } from 'vue'
import App from './App.vue'
import PrimeVue from 'primevue/config';
import Dialog from 'primevue/dialog';
import Button from 'primevue/button';
import TabView from 'primevue/tabview';
import TabPanel from 'primevue/tabpanel';

import 'primevue/resources/themes/saga-blue/theme.css'
import 'primevue/resources/primevue.min.css'
import 'primeicons/primeicons.css'


const app = createApp(App);
app.use(PrimeVue)
app.component('Dialog',Dialog)
app.component('Button',Button)
app.component('TabView',TabView)
app.component('TabPanel',TabPanel)
app.mount('#app')
