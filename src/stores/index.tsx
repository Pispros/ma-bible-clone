import { createStore } from 'easy-peasy';
import { noteStore } from './note.store';

export const easyPeasyStore = createStore({
    ...noteStore
});