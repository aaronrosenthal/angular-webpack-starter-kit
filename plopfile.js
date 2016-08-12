module.exports = (plop) => {
    const isNotEmptyFor = (name) => {
        return (value) => {
            if ((/.+/).test(value)) { return true; }
            return name + ' is required';
        }
    }

    plop.addPrompt('directory', require('inquirer-directory'));

    plop.setGenerator('service', {
        description: 'Create a new service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your service name?',
                validate: isNotEmptyFor('name')
            }
        ],
        actions: [
            {
                type: 'add',
                path: './src/app/common/{{properCase name}}//{{properCase name}}.js',
                templateFile: './plopTemplates/service/service.js'
            },
            {
                type: 'add',
                path: './src/app/common/{{properCase name}}//{{properCase name}}.service.js',
                templateFile: './plopTemplates/service/service.service.js'
            }
        ]
    });

    plop.setGenerator('component', {
        description: 'Create a new component',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
                validate: isNotEmptyFor('name')
            }
        ],
        actions: [
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.js',
                templateFile: './plopTemplates/component/component.js'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.component.js',
                templateFile: './plopTemplates/component/component.component.js'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.html',
                templateFile: './plopTemplates/component/component.html'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.controller.js',
                templateFile: './plopTemplates/component/component.controller.js'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.spec.js',
                templateFile: './plopTemplates/component/component.spec.js'
            }
        ]
    });

    plop.setGenerator('componentWithService', {
        description: 'Create a new component with an injected service',
        prompts: [
            {
                type: 'input',
                name: 'name',
                message: 'What is your component name?',
                validate: isNotEmptyFor('name')
            },
            {
                type: 'input',
                name: 'serviceName',
                message: 'What is your service name?',
                validate: isNotEmptyFor('serviceName')
            }
        ],
        actions: [
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.js',
                templateFile: './plopTemplates/component/component.js'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.component.js',
                templateFile: './plopTemplates/component/component.component.js'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.html',
                templateFile: './plopTemplates/component/component.html'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.controller.js',
                templateFile: './plopTemplates/componentWithService/componentWithService.controller.js'
            },
            {
                type: 'add',
                path: './src/app/components/{{camelCase name}}//{{camelCase name}}.spec.js',
                templateFile: './plopTemplates/componentWithService/componentWithService.spec.js'
            }
        ]
    });
};