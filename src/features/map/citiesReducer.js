

const LOADING='loading'
const ERROR='error'
const LOADED_CITIES='cities/loaded'
const CREATE_CITIES='cities/create'
const DELETE_CITIES='cities/delete'
const UPDATE_CITIES='cities/update'
const SET_CURRENT_CITY='CURRENT_CITY'



function loadingAction(data){
   return{
      type:LOADING,
      payload:data
   }
}


function errorAction(data){
   return{
      type:ERROR,
      payload:data
   }
}


function loadedCityAction(data){
   return{
      type:LOADED_CITIES,
      payload:data
   }
}


function createCityAction(data){


   return{
      type:CREATE_CITIES,
      payload:data
   }
}


function deleteCityAction(data){
   return{
      type:DELETE_CITIES,
      payload:data
   }
}

function updateCityAction(data){
   return{
      type:UPDATE_CITIES,
      payload:data
   }
}

function setCurrentCityAction(data){
   return{
      type:SET_CURRENT_CITY,
      payload:data
   }
}









function reducer(state, action) {
   let newCities = ''

   switch (action.type) {
      case LOADED_CITIES:
         return { ...state, cities: action.payload }

         

      case CREATE_CITIES:
         return { ...state, cities: [...state.cities, action.payload], currentCity:action.payload}

      case DELETE_CITIES:
         newCities = state.cities.filter(city => city.id !== action.payload)
         return { ...state, cities: newCities, currentCity: [] }

      case UPDATE_CITIES:
         newCities = state.cities.map(city => {
            if (city.id == action.payload.id) {
               return { ...action.payload.newCity, id: action.payload.id }
            } else {
               return city
            }
         })

         return { ...state, cities: newCities , currentCity: { ...action.payload.newCity, id: action.payload.id }}

      case LOADING:
         return { ...state, loading: action.payload }
      case ERROR:
         return { ...state, error: action.payload }
      case SET_CURRENT_CITY:
         return { ...state, currentCity: action.payload }

      default:
         throw new Error('unknown action type !')
   }
}




export {reducer,LOADING,ERROR,LOADED_CITIES,CREATE_CITIES,DELETE_CITIES,UPDATE_CITIES,SET_CURRENT_CITY, loadingAction, errorAction,loadedCityAction ,createCityAction,setCurrentCityAction, deleteCityAction, updateCityAction}
