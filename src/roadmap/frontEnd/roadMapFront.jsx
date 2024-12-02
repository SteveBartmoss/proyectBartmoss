import { DivArticle, DivContent } from "../../componentes/contenedores/contenedores";
import { ExtendPanel } from "../../componentes/extendpanel/ExtendPanel";
import { Portada } from "../../componentes/portada/portada";


export function roadMapFront(){ 

    return (
        <>
            <Portada mgPortada={"/Assets/steveA.png"} title={"Road map FrontEnd"} text={"Por Steve 28/11/2024"} />

            <DivArticle>
                <DivContent>
                    <h1>React</h1>

                    <ExtendPanel title='Hooks Basicos'>
                        <p>
                            Introducción a los Hooks
                            ¿Qué son los Hooks?
                            Beneficios de usar Hooks en lugar de componentes de clase.
                            Reglas de los Hooks
                        </p>

                        <p>
                            useState
                            Declarar y usar estados locales.
                            Actualización del estado.
                            Manejo de estados complejos (objetos y arrays).
                            Inicialización perezosa del estado.
                        </p>

                        <p>
                            useEffect
                            Efectos secundarios en componentes funcionales.
                            Dependencias y cómo optimizar las ejecuciones.
                            Limpieza de efectos.
                            Comparación entre `componentDidMount`, `componentDidUpdate` y `componentWillUnmount`.
                        </p>

                        <p>
                            useEffect
                            Efectos secundarios en componentes funcionales.
                            Dependencias y cómo optimizar las ejecuciones.
                            Limpieza de efectos.
                            Comparación entre `componentDidMount`, `componentDidUpdate` y `componentWillUnmount`.
                        </p>

                        <p>
                            useContext
                            Consumir un contexto en componentes funcionales.
                            Comparación entre `useContext` y el componente `Context.Consumer`.
                        </p>

                    </ExtendPanel>

                    <ExtendPanel title='Hooks Adicionales'>
                        <p>
                            useReducer
                            Introducción al patrón de reducer.
                            Comparación entre `useReducer` y `useState`.
                            Uso con estados complejos.
                            Reducer con acciones asíncronas.
                        </p>

                        <p>
                            useRef
                            Referencias mutables y no mutables.
                            Uso para acceder a nodos del DOM.
                            Mantener valores persistentes entre renders sin causar re-renderizaciones.
                        </p>

                        <p>
                            useMemo
                            Memorizar cálculos costosos.
                            Comparación con `useEffect` para optimización de rendimiento.
                            Ejemplos prácticos en tablas y listas grandes.
                        </p>

                        <p>
                            useCallback
                            Memorizar funciones para evitar re-renderizaciones innecesarias.
                            Uso combinado con `React.memo`.
                        </p>

                        <p>
                            useCallback
                            Memorizar funciones para evitar re-renderizaciones innecesarias.
                            Uso combinado con `React.memo`.
                        </p>

                        <p>
                            useLayoutEffect
                            Diferencias entre useEffect y useLayoutEffect.
                            Casos de uso (medir elementos del DOM antes de que se rendericen en pantalla).
                        </p>

                        <p>
                            useImperativeHandle
                            Uso con React.forwardRef.
                            Control de la exposición de referencias externas.
                        </p>


                    </ExtendPanel>

                    <ExtendPanel title='Hooks Personalizados'>

                        <p>
                            ¿Qué son los Hooks personalizados?
                            Creación de un Hook personalizado.
                            Casos de uso comunes
                            Reutilización y separación lógica en componentes grandes.
                        </p>

                        <p>
                            Patrones Avanzados con Hooks
                            Optimización de rendimiento
                            Combinación de Hooks
                            Gestión de estados globales
                            Testing de componentes con Hooks
                        </p>

                        <p>
                            Buenas Prácticas y Errores Comunes
                            Evitar dependencias incorrectas en useEffect.
                            Manejo adecuado del estado inicial en useState y useReducer.
                            No abusar de useRef para manejar estados.
                            Nombrar Hooks personalizados de manera significativa.
                            Cómo depurar componentes que usan Hooks.
                        </p>

                    </ExtendPanel>

                    <h1>Tailwind</h1>



                </DivContent>
            </DivArticle>
        </>
    )
}

/*
Aquí tienes un **temario completo sobre los Hooks de React**, organizado por nivel de dificultad y funcionalidad. Este temario cubre los conceptos esenciales y avanzados para trabajar eficientemente con Hooks:

---
   - 
   - 
   - 
     - Solo se llaman en el nivel superior.
     - Solo se llaman desde funciones de React.

---

## **2. Hooks Básicos**
   ### 2.1 ``
   - 

   ### 2.2 ``
   

   ### 2.3 ``

---

## **3. Hooks Adicionales**

---

## **4. **
  

---

## **5. Patrones Avanzados con Hooks**
   - **Optimización de rendimiento**:
     - Identificar cuándo usar `useMemo` y `useCallback`.
     - Reducir renders innecesarios con `React.memo`.
   - **Combinación de Hooks**:
     - Cómo trabajar con múltiples Hooks en un componente.
   - **Gestión de estados globales**:
     - Uso de Hooks con bibliotecas como Redux o Zustand.
   - **Testing de componentes con Hooks**:
     - Mocking de Hooks como `useState` y `useEffect` en pruebas.
     - Pruebas con `React Testing Library`.

---

## **6. Buenas Prácticas y Errores Comunes**
   - Evitar dependencias incorrectas en `useEffect`.
   - Manejo adecuado del estado inicial en `useState` y `useReducer`.
   - No abusar de `useRef` para manejar estados.
   - Nombrar Hooks personalizados de manera significativa.
   - Cómo depurar componentes que usan Hooks.

---

Con este temario tendrás una guía completa para dominar los Hooks de React desde los fundamentos hasta los casos más avanzados. Puedes abordarlos en el orden que mejor se adapte a tu nivel actual y necesidades específicas.

Para configurar y obtener una **ruta de Tailwind CSS** en un proyecto, debes tener claros varios conceptos clave y pasos. Aquí tienes un temario que cubre lo necesario:

---

### **Temario para configurar Tailwind CSS**

#### **1. Introducción a Tailwind CSS**
   - ¿Qué es Tailwind CSS?
   - Beneficios de usar Tailwind CSS frente a otros frameworks.
   - Instalación en proyectos nuevos o existentes.

---

#### **2. Configuración inicial**
   - Instalación de Tailwind CSS mediante npm, yarn o pnpm:
     ```bash
     npm install -D tailwindcss postcss autoprefixer
     ```
   - Inicialización del archivo de configuración:
     ```bash
     npx tailwindcss init
     ```
   - Estructura básica del archivo `tailwind.config.js`.

---

#### **3. Configuración de la ruta de contenido**
   - Configurar la propiedad `content` en `tailwind.config.js`:
     - Definir rutas específicas de archivos que usarán Tailwind:
      - Uso de glob patterns para incluir varios archivos o directorios.
 
 ---
 
 #### **4. Uso de Tailwind CSS en el proyecto**
    - Añadir las directivas de Tailwind CSS en el archivo CSS principal:
      ```css
      @tailwind base;
      @tailwind components;
      @tailwind utilities;
      ```
    - Importar este archivo CSS en tu proyecto (en React, Vue, etc.).
 
 ---
 
 #### **5. Generación del CSS con Tailwind**
    - Comando para compilar el CSS con PostCSS:
      ```bash
      npx tailwindcss -i ./src/input.css -o ./dist/output.css --watch
      ```
    - Configuración automática en frameworks como Vite, Next.js, o Create React App.
 
 ---
 
 #### **6. Personalización de la configuración**
    - Personalización del archivo `tailwind.config.js`:
      - **Colores personalizados**.
      - **Fuentes y tamaños**.
      - **Breakpoints**.
    - Extensión del tema (`theme.extend`).
    - Plugins oficiales y personalizados.
 
 ---
 
 #### **7. Optimización de la producción**
    - Uso de PurgeCSS integrado en Tailwind para eliminar clases no utilizadas:
      - Configuración en `tailwind.config.js`:
    - Configuración de PostCSS para producción.
 
 ---
 
 #### **8. Integración con frameworks y herramientas**
    - Uso de Tailwind CSS con:
      - React.
      - Vue.js.
      - Next.js.
      - Vite.
    - Configuración específica para cada framework.
 
 ---
 
 #### **9. Extensiones y plugins**
    - Instalación de plugins oficiales como:
      - Typography.
      - Forms.
      - Aspect Ratio.
    - Creación de plugins personalizados.
 
 ---
 
 #### **10. Depuración y buenas prácticas**
    - Uso de herramientas para depuración, como el modo JIT (Just-In-Time).
    - Evitar clases redundantes y mantener el código limpio.
    - Estrategias para estructurar las clases en componentes grandes.
 
 ---
 
 ### **Resumen**
 Para obtener una ruta válida de Tailwind CSS y configurarlo correctamente:
 1. Define la ruta de los archivos de tu proyecto en el archivo `content` del archivo `tailwind.config.js`.
 2. Asegúrate de importar correctamente las directivas de Tailwind en tu archivo CSS.
 3. Usa las herramientas de compilación de Tailwind para generar el CSS final.
 
 Si necesitas ayuda con un caso específico de rutas o configuración, ¡puedes compartirlo y lo revisamos juntos!
*/