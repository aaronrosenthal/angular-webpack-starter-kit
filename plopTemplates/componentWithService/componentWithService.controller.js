class {{ properCase name }}Controller {
    constructor({{ properCase serviceName }}) { 'ngInject';
        this.name = '{{ camelCase name }}';

        {{ properCase serviceName }}.get();
    }
}

export default {{ properCase name }}Controller;