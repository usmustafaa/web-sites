import * as actionType from './actionType'

export function changeCategory(category){
    return{type:actionType.CHANGE_CATEGORY, payload:category}
}


export function getCategoriesSuccess(categories) {
    return { type: actionType.GET_CATEGORIES_SUCCESS, payload: categories };
}


export function getCategories(){
    return function(dispatch){
        let url ='http://siparis.terzi.online/api/getMustafa.php'

    
        return fetch(url)
        .then(response=>response.json())
        .then(data=>dispatch(getCategoriesSuccess(data.categories)))
        
    }
}