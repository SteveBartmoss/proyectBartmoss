

export function MapObjects() {
    return (
        <>
            <h1>Propiedades dinámicas</h1>

            <p>
                En JavaScript, los objetos son dinámicos, lo que permite añadir, modificar o eliminar propiedades y métodos en cualquier momento después de la creación del objeto.
            </p>

            <h2>Añadir propiedades dinámicamente</h2>

            <p>
                En JavaScript, puedes agregar propiedades a un objeto en cualquier momento, incluso después de haberlo creado.
            </p>

            <h2>Ejemplo</h2>

            <code>
                const persona = {nombre: "Juan" };
                persona.edad = 30; // Añadiendo la propiedad 'edad' en tiempo de ejecución
                console.log(persona); // {nombre: "Juan", edad: 30 }
            </code>

            <p>
                También se puede añadir una propiedad usando corchetes [], lo cual es útil cuando el nombre de la propiedad está almacenado en una variable:
            </p>

            <code>
                const key = "ocupacion";
                persona[key] = "Desarrollador";
            </code>

            <h2>Modificar propiedades dinámicamente</h2>

            <p>
                Modificar una propiedad es tan sencillo como reasignarle un valor:
            </p>

            <code>
                persona.edad = 31; // Cambia el valor de la propiedad 'edad'
                console.log(persona); // {nombre: "Juan", edad: 31, ocupacion: "Desarrollador" }
            </code>

            <h2>Eliminar propiedades dinámicamente</h2>

            <p>
                Para eliminar una propiedad, utiliza el operador delete:
            </p>

            <code>
                delete persona.edad; // Elimina la propiedad 'edad'
                console.log(persona); // {nombre: "Juan", ocupacion: "Desarrollador" }
            </code>

            <h1>Métodos Dinámicos en JavaScript</h1>

            <p>
                Un método en JavaScript es simplemente una propiedad de un objeto que contiene una función. Puedes agregar, modificar y eliminar métodos en tiempo de ejecución de la misma forma que con las propiedades.
            </p>

            <h2>Añadir Métodos Dinámicamente</h2>

            <p>
                Puedes añadir un método asignando una función a una propiedad del objeto.
            </p>

            <code>
                persona.saludar = function() {
                    console.log(`Hola, soy ${this.nombre}`);
                };
                persona.saludar(); // "Hola, soy Ana"
            </code>

            <p>
                También se puede añadir un metodo usando corchetes [], esto es útil cuando el nombre del método está almacenado en una variable.
            </p>

            <code>
                const metodo = "despedirse";
                persona[metodo] = function() {
                    console.log("Adiós!");
                };
                persona.despedirse(); // "Adiós!"
            </code>

            <h2>Modificar Métodos Dinámicamente</h2>

            <p>Puedes modificar un método reasignándolo a una nueva función.</p>

            <code>
                persona.saludar = function() {
                    console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años`);
                };
                persona.saludar(); // "Hola, mi nombre es Ana y tengo 26 años"
            </code>

            <h2>Eliminar Métodos Dinámicamente</h2>

            <p>delete también elimina métodos del objeto.</p>

            <code>
                delete persona.saludar; // Elimina el método 'saludar'
                console.log(persona.saludar); // undefined
            </code>

            <h1>Acceso a Propiedades en JavaScript</h1>

            <p>
                JavaScript permite acceder a las propiedades de un objeto utilizando dos tipos de notación: notación de punto y notación de corchetes. Ambas formas permiten leer, añadir, modificar o eliminar propiedades, pero tienen diferentes usos y limitaciones.
            </p>

            <h2>Notación de Punto (.)</h2>

            <p>
                Es la forma más común y directa de acceder a las propiedades de un objeto.
                Se utiliza cuando el nombre de la propiedad es un identificador válido de JavaScript (no contiene espacios, guiones, ni empieza con un número).
            </p>

            <code>
                const persona = {nombre: "Luis", edad: 30 };
                console.log(persona.nombre); // "Luis"
                console.log(persona.edad); // 30
            </code>

            <p>
                No se puede usar la notación de punto si el nombre de la propiedad:
                Contiene caracteres especiales (por ejemplo, persona["nombre completo"] no funciona con persona.nombre completo).
                Es un número o comienza con un número (persona.123 no es válido).
            </p>

            <code>
                const objeto = {"nombre completo": "Luis Pérez" };
                console.log(objeto.nombre completo);
            </code>

            <h2>Notación de Corchetes ([])</h2>

            <p>
                La notación de corchetes es útil cuando el nombre de la propiedad es dinámico, se almacena en una variable, o no es un identificador válido.
            </p>

            <code>
                const persona = {nombre: "Luis", edad: 30 };
                const propiedad = "nombre";
                console.log(persona[propiedad]); // "Luis"
            </code>

            <p>
                La notación de corchetes permite acceder a propiedades que contienen espacios, caracteres especiales o números.
            </p>

            <code>
                const producto = {"precio-venta": 200, "nombre producto": "Laptop" };
                console.log(producto["precio-venta"]); // 200
                console.log(producto["nombre producto"]); // "Laptop"
            </code>

            <p>
                La notación de corchetes permite acceder a propiedades a través de una variable. Este enfoque es útil para acceder a propiedades basadas en condiciones o entradas de usuario.
            </p>

            <code>
                const propiedad = "edad";
                console.log(persona[propiedad]); // 30
            </code>

            <h1>Enumeración de Propiedades en JavaScript</h1>

            <p>
                La enumeración de propiedades en un objeto es una técnica importante en JavaScript, especialmente para trabajar con estructuras de datos dinámicas o desconocidas. Los métodos disponibles (for...in, Object.keys, Object.values, y Object.entries) permiten acceder y recorrer las propiedades y valores de un objeto de maneras diferentes, cada uno con sus ventajas.
            </p>

            <h2>for...in</h2>

            <p>
            El bucle for...in itera sobre todas las propiedades enumerables de un objeto, incluidas tanto las propiedades propias como las heredadas del prototipo.
            Este bucle es útil para obtener el nombre de cada propiedad, pero es recomendable combinarlo con hasOwnProperty() para asegurarse de que la propiedad pertenece directamente al objeto y no a su prototipo.
            </p>

            <code>
                const persona = {nombre: "Luis", edad: 30, ocupacion: "Ingeniero" };
                for (const propiedad in persona) {
                    if (persona.hasOwnProperty(propiedad)) {
                        console.log(`${propiedad}: ${persona[propiedad]}`);
                    }
                }
            </code>

            <p>
                Este bucle es útil cuando necesitas iterar tanto sobre las propiedades propias como heredadas de un objeto.
                Es especialmente relevante en objetos donde el prototipo juega un papel importante.
            </p>

            <h2>Object.keys()</h2>

            <p>
                Object.keys() devuelve un array con los nombres (claves) de las propiedades propias y enumerables de un objeto, excluyendo las heredadas.
                El método es ideal cuando solo necesitas las claves sin preocuparte por las propiedades del prototipo.
            </p>

            <code>
                const producto = {nombre: "Laptop", precio: 1500, disponible: true };
                const propiedades = Object.keys(producto);
                console.log(propiedades); // ["nombre", "precio", "disponible"]
            </code>

            <p>
                Iteración Usando forEach
            </p>

            <code>
                propiedades.forEach(propiedad => {
                    console.log(`${propiedad}: ${producto[propiedad]}`);
                });
            </code>

            <p>
                Es útil para obtener una lista de todas las claves del objeto, especialmente si no necesitas iterar sobre propiedades heredadas.
                Object.keys() es más seguro y específico que for...in para evitar propiedades del prototipo.
            </p>

            <h2>Object.values()</h2>

            <p>
                Object.values() devuelve un array con los valores de las propiedades propias y enumerables del objeto.
                Es ideal cuando necesitas trabajar solo con los valores sin preocuparte por las claves.
            </p>

            <code>
                const usuario = {nombre: "Ana", edad: 25, pais: "México" };
                const valores = Object.values(usuario);
                console.log(valores); // ["Ana", 25, "México"]
            </code>

            <p>
                Iteración Usando forEach
            </p>

            <code>
                valores.forEach(valor => {
                    console.log(valor);
                });
            </code>

            <p>
                Ideal para casos en los que solo necesitas los valores de las propiedades, como cuando quieres sumar valores o realizar operaciones estadísticas.
            </p>

        </>
    )
}

/*
considerar si es bueno agregar buenas practicas

### Consideraciones y Buenas Prácticas

1. **Verificar la Existencia de Propiedades y Métodos**:
   - Antes de modificar o eliminar, puedes verificar la existencia de una propiedad o método con el operador `in` o `hasOwnProperty`:
   ```javascript
   if ("edad" in persona) {
       console.log("Edad existe en el objeto.");
   }

   if (persona.hasOwnProperty("saludar")) {
       console.log("El método saludar existe.");
   }
   ```

2. **Propiedades y Métodos Dinámicos con `Object.defineProperty`**
   - `Object.defineProperty` permite añadir propiedades con configuraciones específicas como `writable`, `enumerable`, y `configurable`:
   ```javascript
   Object.defineProperty(persona, "pais", {
       value: "España",
       writable: true,
       enumerable: true,
       configurable: true
   });
   console.log(persona.pais); // "España"
   ```

3. **Evitar Modificaciones en Objetos Inmutables**
   - Objetos creados con `Object.freeze` no pueden ser modificados, agregando seguridad en casos en los que no se desea cambios dinámicos.
   ```javascript
   const objetoInmutable = Object.freeze({ nombre: "Carlos" });
   objetoInmutable.edad = 30; // No se añadirá 'edad'
   console.log(objetoInmutable); // { nombre: "Carlos" }
   ```


   Buenas Prácticas

    Usa Notación de Punto siempre que sea posible, ya que es más legible y común en JavaScript.
    Utiliza Notación de Corchetes cuando:
        Necesites nombres de propiedades dinámicos.
        El nombre de la propiedad contenga caracteres especiales o espacios.
        Las propiedades se acceden mediante variables o parámetros de funciones.
*/