¿Qué son los disparadores y para qué sirven?

Los disparadores o triggers son funciones especiales en las bases de datos que se ejecutan automáticamente en respuesta a eventos que ocurren en una tabla o vista, como:
•	Inserción de datos (INSERT)
•	Actualización de datos (UPDATE)
•	Eliminación de datos (DELETE)

Existen dos momentos clave en los que se pueden ejecutar:
•	BEFORE: antes de que la operación se realice (ideal para validaciones o cambios).
•	AFTER: después de que la operación se ejecute (útil para auditoría o sincronización).

También se pueden configurar para que se ejecuten:
•	Por cada fila afectada (FOR EACH ROW)
•	Una sola vez por operación (FOR EACH STATEMENT)

¿Para qué sirven?
•	Aplicar reglas de negocio automáticamente.
•	Rechazar operaciones no válidas.
•	Llenar o modificar campos automáticamente.
•	Llevar historial de cambios (auditoría).
•	Generar alertas o actualizar otras tablas relacionadas.
________________________________________
Ventajas de los disparadores
1.	Automatización: se ejecutan sin intervención del usuario o del desarrollador de la aplicación.
2.	Consistencia: las reglas de negocio se mantienen a nivel de base de datos.
3.	Auditoría: se puede registrar toda modificación hecha sobre una tabla.
4.	Centralización: evita repetir la lógica en múltiples aplicaciones.
________________________________________
 Desventajas de los disparadores
1.	Difícil depuración: pueden ocurrir cambios sin que el usuario se dé cuenta.
2.	Poca visibilidad: su ejecución no es evidente si no se documentan bien.
3.	Rendimiento: pueden hacer más lentas las operaciones si ejecutan lógica pesada.
4.	Orden de ejecución: si hay varios disparadores sobre una misma tabla, el orden no siempre es predecible (a menos que se controle explícitamente en algunos SGBD).
_________________________________________

Sintaxis explicada paso a paso
Paso 1: Crear la función

CREATE OR REPLACE FUNCTION mi_funcion()
RETURNS trigger AS $$
BEGIN
   -- Aquí se escribe la lógica del trigger
   RETURN NEW; -- (o OLD, dependiendo del tipo de operación)
END;
$$ LANGUAGE plpgsql;

--NEW: accede a los valores nuevos en INSERT o UPDATE.
--OLD: accede a los valores anteriores en DELETE o UPDATE.

Paso 2: Asociar la función con un trigger

CREATE TRIGGER mi_disparador
AFTER INSERT ON mi_tabla
FOR EACH ROW
EXECUTE FUNCTION mi_funcion();

Puedes cambiar AFTER por BEFORE, y INSERT por UPDATE o DELETE, según el caso.

___________________________________________________________________

3 Casos de disparadores aplicados a la base de datos que esta en la carpeta :

Caso 1: Registrar movimiento en inventario_historial después de una venta
Problema:
Cuando se realiza una venta (se inserta un registro en la tabla ventas), se debe actualizar el stock en productos y registrar el movimiento en inventario_historial para llevar un historial de salidas.
Solución:
Crear un trigger AFTER INSERT en ventas que actualice el stock restando la cantidad vendida y cree un registro en inventario_historial con el movimiento.

Caso 2: Validar stock antes de registrar una venta
Problema:
No se debe permitir registrar una venta si la cantidad solicitada es mayor al stock disponible en productos.
Solución:
Crear un trigger BEFORE INSERT en ventas que verifique el stock y lance un error si es insuficiente.

Caso 3: Registrar ajustes manuales de stock en inventario_historial
Problema:
Cuando se actualiza manualmente el stock en la tabla productos (por ejemplo, para reabastecimiento), se debe registrar el cambio en la tabla inventario_historial.
Solución:
Crear un trigger AFTER UPDATE en productos que detecte si el stock cambió y registre la diferencia en inventario_historial como ajuste.
