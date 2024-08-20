// paso 1 types para context

import {  createContext, useReducer } from 'react';
import { ActivityActions, activityReducer, ActivityState, initialState } from '../reducers/activityReducer';

type CaloriesContexprops={
  state:ActivityState;
  dispatch:React.Dispatch<ActivityActions>
}
 type CaloriesProviderProps={
  children:React.ReactNode
}
 //paso 2 crear el context
 export const CaloriesContext=createContext<CaloriesContexprops>({} as CaloriesContexprops);

  //paso 3 crear el provider
  export const CaloriesProvider=({children}:CaloriesProviderProps)=>{

    const  [state,dispatch]=useReducer(activityReducer,initialState);
    
    return (
   <CaloriesContext.Provider value={{state,dispatch}} >
    {children}
   </CaloriesContext.Provider>

    )

  }