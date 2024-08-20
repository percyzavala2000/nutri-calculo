import { useMemo } from "react";
import { CalorieDispley } from './CalorieDispley';
import { useCalories } from '../hooks/useCalories';


export const CalorieTracker = () => {
  const {state}=useCalories();
  //contadores
  const caloriesConsumed = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [state.activities]
  );
  const caloriesBurned = useMemo(
    () =>
      state.activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [state.activities]
  );
  const netCalories=useMemo(() => caloriesConsumed-caloriesBurned, [state.activities]);
  return (
    <>
      <h2 className="text-center text-4xl font-black text-white">
        Resumen de Calorias
      </h2>
      <div className="flex flex-col items-center md:flex-row md:justify-between gap-5 mt-10">
         <CalorieDispley calories={caloriesConsumed} text="Consumidas"/>
         <CalorieDispley calories={caloriesBurned} text="Ejercicios"/>
         <CalorieDispley calories={netCalories} text="Diferencia"/>
        
      </div>
    </>
  );
};
