import { createStore } from 'easy-peasy';
import { todoStore } from './todo.store';

export const easyPeasyStore = createStore({
    ...todoStore
});