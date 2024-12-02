import { CodeSpace } from "../componentes/codeSpace/CodeSpace";
import { DivArticle, DivContent, DivSection } from "../componentes/contenedores/contenedores";
import { Portada } from "../componentes/portada/portada";


export function FirstStepRedux() {
    return (
        <>
            <Portada imgPortada={"/Assets/steveA.png"} title={"Primeros pasos en redux"} text={"Por Steve 30/11/2024"} />

            <DivArticle>
                <DivContent>
                    <p>
                        La libreria de redux es una buena opcion para manejar el estado
                        global de una aplicacion al momento de tener que manejar de una
                        forma mas eficiente y potente la informacion entre componentes
                    </p>

                    <h1>Instalacion de reduxtoolkit</h1>

                    <p>
                        Para instalar reduxtoolkit en nuestra aplicacion podemos dirigirnos
                        a la pagina oficial en el siguiente enlace
                    </p>

                    <a id="linkto" href="https://redux-toolkit.js.org/tutorials/quick-start" rel="noreferrer" target="_blank">Sitio de Node</a>

                    <p>
                        Aqui podremos encontrar el siguiente comando que nos permite instalar reduxtoolkit para nuestra
                        aplicacion de react
                    </p>

                    <p>
                        npm install @reduxjs/toolkit react-redux
                    </p>

                    <CodeSpace title={'Comando instalar reduxtoolkit'} rawCode={'npm install @reduxjs/toolkit react-redux'} />

                    <h2>Configurar el Store</h2>

                    <p>
                        Ahora que se tiene instalado redux toolkit, debemos configurar 
                        es store que sera el lugar donde almacenaremos todos los estados 
                        que queremos usar en nuestro proyecto.
                    </p>

                    <p>
                        Para esto podemos seguir la estructura que nos ofrece la 
                        documentacion de reduxtoolkit
                    </p>

                    <p>
                        src/app/store.js
                    </p>

                    <p>
                        El archivo store.js deberia tener la siguiente configuracion basica
                    </p>

                    <CodeSpace title={'store.js'} 
                        rawCode={`import {configureStore} from '@reduxjs/toolkit'
                        export const store=configureStore({
                        reducer: {}
                        })`} />

                    <p>
                        Dentro de este estore almacenameremos un objeto gigante, que es donde 
                        mantendremos los estados de nuestra aplacacion, pensemos en en el store 
                        como un disco duro, dentro de el podemos almacenar lo que queremos y 
                        tambien podemos recuperar la informacion desde el mismo
                    </p>

                    <h2>Proveer el estado global</h2>

                    <p>
                        Ahora que tenemos creado nuestro almacenamiento global definido, debemos 
                        conectarlo a nuestra aplicacion para poder usarlo en cualquier parte, 
                        podemos pensar en esto como conectar el disco duro a nuestra placa madre
                    </p>

                    <p>
                        Para lograr esto debemos usar un provider que cubrira toda nuestra aplicacion 
                        como si se trata de una gran etiquta
                    </p>

                    <CodeSpace title={'index.js'} 
                        rawCode={`import React from 'react'
                            import ReactDOM from 'react-dom'
                            import './index.css'
                            import App from './App'
                            import {store} from './app/store'
                            import {Provider} from 'react-redux'

                            ReactDOM.render(
                                <Provider store={store}>
                                    <App />
                                </Provider>,
                                document.getElementById('root')
                            )`} />

                    <p>
                        En este caso se implemento el provider antes del 
                        componente App, asi podemos imaginar que nuestro 
                        store es el la etiqueta que encapsula toda la aplicacion 
                        y de esta forma podemos acceder a la informacion desde cualquier 
                        parte de la aplicacion
                    </p>

                    <h2>Crear un Slice</h2>

                    <p>
                        Un slice es una parte chica donde almacenamos determinada 
                        informacion, con esto podemos imaginar que el store es el disco 
                        duro de la pagina y los slice serian las carpetas o incluso las particiones 
                        ya que el store provee y almacena los slice pero en los slice es donde 
                        podemos tener la informacion que queremos mantener de manera global
                    </p>

                    <p>
                        Para crear un slice usaremo la siguiente ruta
                    </p>

                    <CodeSpace title={'counterSlice.js'} rawCode={'src/features/counter/counterSlice.js'} />

                    <p>
                        La estructura del archivo slice es la siguiente:             
                    </p>

                    <CodeSpace title={'counterSlice.js'} 
                        rawCode={`import { createSlice } from '@reduxjs/toolkit'

                            const initialState = {
                            value: 0,
                            }

                            export const counterSlice = createSlice({
                            name: 'counter',
                            initialState,
                            reducers: {
                                    increment: (state) => {
                                        state.value += 1
                                    },
                                    decrement: (state) => {
                                        state.value -= 1
                                    },
                                    incrementByAmount: (state, action) => {
                                        state.value += action.payload
                                    },
                                },
                            })


                            export const { increment, decrement, incrementByAmount } = counterSlice.actions

                            export default counterSlice.reducer`} />
                        
                    <p>
                        En este archivo existen muchas cosas que permiten manipular el estado pero por ahora solo 
                        veremo la version simplificada como la siguiente
                    </p>

                    <CodeSpace title={'counterSlice.js'} 
                        rawCode={`import { createSlice } from '@reduxjs/toolkit'

                            const initialValue = {
                                value: 0,
                            }

                            export const counterSlice = createSlice({
                            name: 'counter',
                            initialState: initialValue,
                            reducers: {

                                },
                            })

                            export default counterSlice.reducer`} />

                    <p>
                        En esta version simplificada podemos ver como se compone 
                        un slice, que basicamente es el estado que queremos almacenar que debe tener 
                        ciertas caracteristicas como las siguientes:
                    </p>

                    <h3>name</h3>

                    <p>
                        Sera la forma en la que nos referimos 
                        al almacenamiento, podemos pensar en este nombre como el campo de un objeto ya 
                        que para ingresar a una propiedad de un objeto hacemos lo siguiente object.field 
                        de esta misma forma tendremo que acceder a nuestro estado usando el nombre que colocamos 
                        en el slice.
                    </p>

                    <h3>initialState</h3>

                    <p>
                        Este sera el estado que mantendremos en la aplicacion de manera global, en 
                        el ejemplo se describe como una constante la cual es asignada asi que 
                        esta es la informacion inicial de nuestra aplicacion 
                    </p>

                    <h3>reducers</h3>

                    <p>
                        Esta es la parte interesante del slice ya que aqui declararemos las 
                        funciones que interactuan con el estado que declaramos dentro del slice, 
                        podemos pensar en estad funciones como los metodos de una clase ya que generalmente 
                        las clases cuentan con sus metodos geter y setter que permiten obtener o modificar 
                        propiedades o un objeto, de esta misma forma tendremos que declarar las funciones que 
                        permitan modificar el estado que estamos manejando
                    </p>

                    <p>
                        En el ejemplo simplificado aun no se han declarado estas funciones pero por 
                        ahora solo mantengamos la idea de que en los reducers deben ir las funciones 
                        que modificaran el estado de nuestra aplicacion
                    </p>

                    <h2>Agregar el slice al store</h2>

                    <p>
                        Cuando tenemos configurado nuestro slice podemos agregarlo al store 
                        para poder implementarlo en nuestro almacenamiento
                    </p>

                    <CodeSpace title={'store.js'} 
                        rawCode={`import { configureStore } from '@reduxjs/toolkit'
                            import counterReducer from '../features/counter/counterSlice'

                            export const store = configureStore({
                                reducer: {
                                    counter: counterReducer,
                                },
                            })`} />

                    <p>
                        Ahora hemos agregado a nuestro store el slice que creamos, tenemos que importarlo 
                        desde el archivo en que se creo y despues agregarlo al reducer del store y aqui es donde 
                        se puede papreciar mejor la forma en que trabaja un store. Si bien tenemos configurado el 
                        almacenamiento global que es el store pero dentro del el tenemos los slice que serian las 
                        partes mas chicas en donde se almacena cierta informacion, de esta forma los slice son las 
                        carpetas que componente la informacion que se almacena en un disco duro.
                    </p>

                    <h2>Agregar el estado global a componentes de react</h2>

                    <p>
                        Antes de crear las funciones que iran en el reducer de nuestro slice es 
                        importante que usemos nuestro estado global en la aplicacion para poder 
                        notar algunas cosas interesantes asi que es mejor implementar de una manera facil nuestro estado
                    </p>

                    <CodeSpace title={"App.js"} rawCode={`import logo from './logo.svg';
                                import './App.css';
                                import { useSelector } from 'react-redux';

                                function App() {
                                
                                    const count = useSelector((state)=> state.counter.value)

                                    return (
                                        <div className="App">
                                        <h1>Contador</h1>
                                        <p>{count}</p>
                                        </div>
                                    );
                                }

                                export default App;
                        `} />

                    <p>
                        Con esto podemos ver nuestro contador global en la aplicacion 
                        incial de react que simplemente limpiamos e imprimimos el 
                        estado para poder verlo en pantalla
                    </p>

                    <h3>useSelector</h3>

                    <p>
                        Esta funcion permite que accedamos a nuestro almacenamiento 
                        global y podamos tener acceso a nuestro slice counter, esto nos 
                        permite poder leer el valor y mostrarlo en pantalla o 
                        hacer algo mas con el como por ejemlo listar en caso de que sea 
                        un arreglo o mostrar informacion de un perfil de usuario
                    </p>

                    <p>
                        Al igual que antes podemos pensar en el useSelector como la funcion 
                        get de una clase, la cual nos permite obtener una propiedad de un objeto 
                        y trabajar con el asi que el useSelector se puede considera como 
                        un metodo get para obtener informacion de nuestro store
                    </p>

                </DivContent>
            </DivArticle>
        </>
    )
}