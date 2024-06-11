
import { ActivityT } from '../types';

export type ActivityActions=
{type:'save-activity',payload:{newActivity:ActivityT}}

type ActivityState={
  activities:ActivityT[]
}

export const initialState:ActivityState =  { 
  activities:[]


 }

 export const activityReducer = (state:ActivityState=initialState,action:ActivityActions) => { 

  if (action.type==="save-activity") {
    //maneja la logica para actualizar
   return {
    ...state,
    activities:[...state.activities,action.payload.newActivity]
   }
    
  }
return state;

  }