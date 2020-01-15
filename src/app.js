import routing from './configs/app.routing';
import { AppComponent } from './app.component';

angular
    .module('app.module', [
    ])

    .config(routing)
    .component('appComponent', AppComponent);

document.addEventListener('DOMContentLoaded', () => angular.bootstrap(document, ['app.module']));