
import { ActivityT } from '../types';

export type ActivityActions=
{type:'save-activity',payload:{newActivity:ActivityT}} |
{type:'set-activeId',payload:{id:ActivityT['id']}} |
{type:'delete-activeId',payload:{id:ActivityT['id']}} |
{type:'restart-app'} 

export type ActivityState={
  activities:ActivityT[];
  activeId:ActivityT['id'];
}

const localStorageActivities=()=>{
  const activities=localStorage.getItem('activities');
  return activities? JSON.parse(activities):[];

}

export const initialState:ActivityState =  { 
  activities:localStorageActivities(),
  activeId:''


 }

 export const activityReducer = (state:ActivityState=initialState,action:ActivityActions) => { 

  if (action.type==="save-activity") {
    //maneja la logica para actualizar
    let updateActivities:ActivityT[]=[];

    if (state.activeId) {
      updateActivities=state.activities.map(activity=>activity.id===state.activeId? action.payload.newActivity:activity);
    } else {
      updateActivities=[...state.activities,action.payload.newActivity]
    }
   return {
    ...state,
    activities:updateActivities,
    activeId:""
   }
    
  }
  if (action.type==='set-activeId') {
    return {
      ...state,
      activeId:action.payload.id
    }
    
  }
  if (action.type==="delete-activeId") {

    return {
      ...state,
      activities:state.activities.filter(activity=>activity.id!==action.payload.id)
    }
    
  }
  if (action.type==='restart-app') {
    return{
      activities:[],
      activeId:""
    }
    
  }
return state;

  }