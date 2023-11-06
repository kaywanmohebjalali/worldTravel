import {loadedCityAction, loadingAction, errorAction,createCityAction,deleteCityAction, updateCityAction}from "../features/map/citiesReducer"
import {supabase} from './supabase'



async function getCities(dispatch){
   try {
      dispatch(loadingAction(true))
      let { data: cities, error } = await supabase
      .from('cities')
      .select('*')
       
     
      if(error) throw new Error('error get cities in database')
       dispatch(loadedCityAction(cities))
       dispatch(errorAction(false))
  
      return cities
           
   } catch (error) {
      dispatch(errorAction(error.message))
       
   }finally{
      dispatch(loadingAction(false))
   }
}


async function createCity(dispatch,newCity){
    try {
       dispatch(loadingAction(true))
       const { data, error } = await supabase
       .from('cities')
       .insert(newCity)
       .select()
        
       if(error) throw new Error('error create new city in database')
    
       dispatch(createCityAction(data[0]))
       dispatch(errorAction(false))


            
    } catch (error) {
       dispatch(errorAction(error.message))
        
    }finally{
       dispatch(loadingAction(false))
    }
}

async function deleteCity(dispatch,id){
 try {
    dispatch(loadingAction(true))
    const { error } = await supabase
    .from('cities')
    .delete()
    .eq('id', id)
    if(error) throw new Error('error delete  city in database')
   

      dispatch(deleteCityAction(id))
      dispatch(errorAction(false))

         
            
    } catch (error) {
       dispatch(errorAction(error.message))
        
    }finally{
       dispatch(loadingAction(false))
    }

}

    
async function updateCity(dispatch,newCity,id){
 try {
    dispatch(loadingAction(true))
    const { data, error } = await supabase
    .from('cities')
    .update(newCity)
    .eq('id', id)
    .select()
    if(error) throw new Error('error update  city in database')
     dispatch(updateCityAction({newCity:data[0],id:id}))
     dispatch(errorAction(false))

  
           
    } catch (error) {
       dispatch(errorAction(error.message))
        
    }finally{
       dispatch(loadingAction(false))
    }
}


export {getCities, createCity, deleteCity, updateCity}