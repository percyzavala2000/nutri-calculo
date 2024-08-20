import { useContext } from "react";
import { CaloriesContext } from "../context/CaloriesContext";

// 1 paso crear el hook
export const useCalories = () => {
  // paso 2 llamar al context
  const context = useContext(CaloriesContext);

  // paso 3 validar si el context esta definido
  if (!context) {
    throw new Error(
      "useCalories debe estar dentro del provider CaloriesProvider"
    );
  }
  // paso 4 retornar el context
  return context;
};
