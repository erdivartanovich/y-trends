import { CategoryClass } from './category.class';

it('instantiated without crashing if constructor parameters supplied', () => {
    let data = {
        id: '',
        snippet: {
            title: ''
        }
    }
    new CategoryClass(data);
});

it('instantiated without crashing if constructor parameters is null', () => {
    new CategoryClass();
});