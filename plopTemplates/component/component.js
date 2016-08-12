import angular from 'angular';
import uiRouter from 'angular-ui-router';
import {{ camelCase name }}Component from './{{ camelCase name }}.component';

let {{ camelCase name }}Module = angular.module('{{ camelCase name }}', [
    uiRouter
]).config(($stateProvider, $urlRouterProvider) => { 'ngInject';
    $stateProvider
        .state('{{ camelCase name }}', {
            url: '/{{ camelCase name }}',
            component: '{{ camelCase name }}'
        });
}).component('{{ camelCase name }}', {{ camelCase name }}Component).name;

export default {{ camelCase name }}Module;