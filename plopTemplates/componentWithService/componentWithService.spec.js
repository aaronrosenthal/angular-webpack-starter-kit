import {{ camelCase name }}Module from './{{ camelCase name }}'

describe('Component: {{ camelCase name}}', () => {
    let $rootScope, $location, $state, $componentController, controller, mock{{ properCase serviceName }};

    beforeEach(angular.mock.module({{ camelCase name}}Module));

    beforeEach(inject((_$rootScope_, _$location_, _$state_, _$componentController_) => {
        $rootScope = _$rootScope_;
        $location = _$location_;
        $state = _$state_;
        $componentController = _$componentController_;
    }));

    describe('Module', () => {
        // top-level specs: i.e., routes, injection, naming
        it('default component should be {{ camelCase name }}', () => {
            $location.url('/{{ camelCase name }}');
            $rootScope.$digest();
            expect($state.current.component).toBe('{{ camelCase name }}');
        });
    });

    describe('Controller', () => {
        //controller specs
        beforeEach(function () {
            mock{{ properCase serviceName }} = jasmine.createSpyObj('{{ properCase serviceName }}', ['get']);

            controller = $componentController('{{ camelCase name }}', {
                $scope: $rootScope.$new(),
                {{ properCase serviceName }}: mock{{ properCase serviceName }}
            });
        });

        it('has a name property', () => {
            expect(controller.name).toBeDefined();
        });

        it('calls a service', () => {
            expect(mock{{ properCase serviceName }}.get).toHaveBeenCalled();
        });
    });
});