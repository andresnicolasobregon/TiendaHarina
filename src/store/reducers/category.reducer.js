import { CATEGORIES } from '../../constants/categories';


const { SELECT_CATEGORY } = categoryTypes;

const initialState = {
    categories: CATEGORIES,
    selectedCategory: null,
}

const categoryReducer = (state = initialState, action) => {
    return state
}

export default categoryReducer;