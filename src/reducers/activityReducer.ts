
import { ActivityT } from '../types';

export type ActivityActions=
{type:'save-activity',payload:{newActivity:ActivityT}} |
{type:'set-activeId',payload:{id:ActivityT['id']}} 

type ActivityState={
  activities:ActivityT[];
  activeId:ActivityT['id'];
}

export const initialState:ActivityState =  { 
  activities:[],
  activeId:''


 }

 export const activityReducer = (state:ActivityState=initialState,action:ActivityActions) => { 

  if (action.type==="save-activity") {
    //maneja la logica para actualizar
   return {
    ...state,
    activities:[...state.activities,action.payload.newActivity]
   }
    
  }
  if (action.type==='set-activeId') {
    return {
      ...state,
      activeId:action.payload.id
    }
    
  }
return state;

  }