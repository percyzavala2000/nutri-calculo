import { useMemo } from "react";
import { ActivityT } from "../types";
import { CalorieDispley } from './CalorieDispley';

type CalorieTrackerProp = {
  activities: ActivityT[];
};
export const CalorieTracker = ({ activities }: CalorieTrackerProp) => {
  //contadores
  const caloriesConsumed = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 1 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const caloriesBurned = useMemo(
    () =>
      activities.reduce(
        (total, activity) =>
          activity.category === 2 ? total + activity.calories : total,
        0
      ),
    [activities]
  );
  const netCalories=useMemo(() => caloriesConsumed-caloriesBurned, [activities]);
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
