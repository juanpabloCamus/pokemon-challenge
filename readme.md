# Pokémon Battle Challenge

Este repositorio es un monorepo que contiene tanto el backend como el frontend para una aplicación de batalla de Pokémon. Cada Pokémon tiene diferentes estadísticas como ataque, defensa, velocidad, y HP. Los Pokémon pueden luchar entre ellos y los resultados de las batallas se guardarán en la base de datos.

## Requisitos

- Node.js (versión 14 o superior)
- npm (versión 6 o superior)

## Instalación

1. Clona este repositorio:

   ```sh
   git clone https://github.com/tu-usuario/pokemon-challenge.git
   cd pokemon-challenge
   ```

2. Instala las dependencias en la raíz del repositorio:
   ```sh
   npm install
   ```

## Iniciar el Backend

Para iniciar el servidor backend, ejecuta el siguiente comando en la raíz del repositorio:

```sh
npm run start:api
```

El servidor se iniciará en el puerto especificado en api/src/main.ts y se correra la migracion para popular la base de datos automaticamente.

## Iniciar el Frontend

Para iniciar el cliente frontend, ejecuta el siguiente comando en la raíz del repositorio:

```sh
npm run start:client:dev
```

El cliente se conectará al puerto especificado en client/src/config.js para hacer las peticiones al backend.

## Objetivos del Backend

    1.	Implementar migraciones de base de datos para popular la tabla con los datos de los Pokémon.
    2.	Implementar un endpoint para listar todos los Pokémon.
    3.	Implementar un endpoint para hacer que los Pokémon batallen.
    4.	Guardar los resultados de las batallas en una tabla.

## Objetivos del Frontend

    1.	Implementar la UI/UX que liste y permita seleccionar los Pokémon.
    2.	Implementar una tarjeta de Pokémon que liste las estadísticas.
    3.	Cuando se inicie la batalla, se debe escoger automáticamente y aleatoriamente un contrincante diferente y luego mostrar el resultado.
    4.	Implementar responsividad básica.
    5.	Conectar con el backend.

## Algoritmo de Batalla

    •	El Pokémon con la velocidad más alta hace el primer ataque. Si las velocidades son iguales, el Pokémon con el ataque más alto va primero.
    •	Para calcular el daño, resta la defensa del ataque (ataque - defensa). La diferencia es el daño. Si el ataque es igual o menor que la defensa, el daño es 1.
    •	El daño se resta del HP.
    •	Los Pokémon pelearán por turnos. Todos los turnos serán calculados en el mismo request. Es por esto por lo que el endpoint debe retornar los datos del ganador en la misma llamada.
    •	El ganador es el Pokémon que logre reducir el HP del enemigo a cero.
    •	Nota: como adicional se podría implementar el sistema de tipos, pero no es requerido.
