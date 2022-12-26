// incremental ID for todos

let nextTodoID = 0;

// Action types
export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO = 'TOGGLE_TODO';
export const SET_VISIBILITY_FILTER = 'SET_VISIBILITY_FILTER';


/***
 * @param {string} text
 * @returns action ADD_TODO
 */

export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        payload: {
            id: nextTodoID ++,
            text,
        }
    }
}

/**
 * 
 * @param {number} id 
 * @returns action TOGLE_TODO
 */

export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        payload: {
            id
        }
    }
} 

/**
 * 
 * @param {text} filter 
 * @returns action SET_VISIBILITY_FILTER
 */
export const setVisibilityFilter = (filter) => {
    return {
        type:'SET_VISIBILITY_FILTER',
        payload: {
            filter
        }
    }
}

