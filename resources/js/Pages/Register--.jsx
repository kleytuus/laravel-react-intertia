function Register() {
  return (
    <>
      
        <div className="bg-Zinc-800 flex flex-col justify-center">
          <form className=" max-w-[400px] w-full mx-auto rounded-lg bg-neutral-300 p-2 my-2 px-8">
            <h2 className="text-1xl dark:text-black font-sans text-center">
              INGRESAR DATOS
            </h2>
            <div className="text-center ">
            <input type="text" placeholder="RUC" className="border-2 border-transparent  focus:outline-none w-full my-2"/>
            <input type="password" placeholder="Contraseña" className="border-2 border-transparent focus:outline-none w-full "/>
            <input type="text" placeholder="DNI" className="border-2 border-transparent focus:outline-none w-full my-2"/>
            <input type="text" placeholder="Nombre" className="border-2 border-transparent focus:outline-none w-full "/>
            <input type="text" placeholder="Apellido" className="border-2 border-transparent focus:outline-none w-full my-2"/>
            <input type="number" placeholder="Numero de celular" className="border-2 border-transparent focus:outline-none w-full my-my-2"/>
            <input type="email" placeholder="Email" className="border-2 border-transparent focus:outline-none w-full my-2"/>
            </div>
           

            <div class="flex space-x-2 justify-center">
              <button
                className="btn"
                type="button"
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                class="inline-block px-6 py-2.5 my-3 bg-orange-400 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-orange-500 hover:shadow-lg focus:bg-orange-500 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-yellow-800 active:shadow-lg transition duration-150 ease-in-out"
                
              >
                REGISTRAR
              </button>
            </div>
          </form>
        </div>
      
    </>
  );
}

export default Register;
