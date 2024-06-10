import { categoriesData } from "./data/categoriesData";

export const Form = () => {
  return (
    <form className="space-y-5 bg-white shadow p-10 rounded-lg">
      <div className="grid grid-cols-2 gap-3 ">
        <label htmlFor="category" className="font-bold">
          Categoria:{" "}
        </label>
        <select
          name=""
          id="category"
          className="border border-slate-300 p-2 rounded-lg w-full bg-white "
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
        <label htmlFor="activity" className="font-bold">
          Actividad:
        </label>
        <input
          type="text"
          id="activity"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="Ejem: Comida, Jugo de papaya,ensaladas, ejercicio,pesas, bicicleta"
        />
      </div>

      <div className="grid grid-cols-2 gap-3">
        <label htmlFor="calorias" className="font-bold">
          Actividad:
        </label>
        <input
          type="number"
          id="calorias"
          className=" border border-slate-300 p-2 rounded-lg"
          placeholder="calorias: Ejemplo 300 o 500"
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
