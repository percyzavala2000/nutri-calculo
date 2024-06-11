import { ChangeEvent, useState } from 'react';
import { categoriesData } from "./data/categoriesData";
import { ActivityT } from './types';

export const Form = () => {
  const [activity, setActivity] = useState<ActivityT>({
    category:1,
    name:"",
    calories:0
  })
   //creo una funcion 
  const handleChange = (e: ChangeEvent<HTMLSelectElement> | ChangeEvent<HTMLInputElement> ) => { 

    const isNumberField= ['category','calories'].includes(e.target.id);
   

    setActivity({...activity, [e.target.id]: isNumberField ? +e.target.value:e.target.value });

    console.log(activity);


   }
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-2 gap-3 ">
        <label htmlFor="category" className="font-bold">
          Categoria:{" "}
        </label>
        <select
          name=""
          id="category"
          value={activity.category}
          className="border border-slate-300 p-2 rounded-lg w-full bg-white "
          onChange={handleChange}
        >
          {
            /* Aqui es lo que iteramos nuestro categoriesData */
            categoriesData.map((category) => (
              <option key={category.id} value={category.id}>
                {category.name}
              </option>
            ))
          }
        </select>
      </div>
      <div className="grid grid-cols-2 gap-3">
        <label htmlFor="name" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="name"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ejem: Comida, Jugo de papaya,ensaladas, ejercicio,pesas, bicicleta"
          value={activity.name}
          onChange={handleChange}
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label htmlFor="calorias" className="font-bold">
          Calorias:
        </label>
        <input
          type="number"
          id="calories"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="calorias: Ejemplo 300 o 500"
          value={activity.calories}
          onChange={handleChange}
        />
      </div>
      <input
        type="submit"
        className="bg-gray-800 hover:bg-gray-900 w-full p-2 font-bold uppercase text-white"
        value="Guardar Comida o GuardaEjercicio"
      />
    </form>
  );
};
