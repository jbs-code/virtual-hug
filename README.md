# Virtual Hug
En internet hay diferentes aplicaciones para enviar un "Abrazo Virtual"; bueno, pues esta es mi versión. La pantalla principal muestra un formulario para crear una tarjeta que podemos enviar a las personas que queremos conociendo su email. Para esto utilizo en servicio de [EmailJS](https://www.emailjs.com/). Todo el tiempo tendremos una vista previa para ver el resultado de nuestra tarjeta.

# Configuración
- La app esta creada con vite, solo se necesita hacer un ``npm install`` para instalar las dependencias.
- Además es necesario registrarse en [EmailJS](https://www.emailjs.com/) y obtener la PublicKey, crear un servicio y un template que serán necesarios para utilizar el servicio. Es importante revisar la documentación de EmailJS.
- Los id de EmailJS se deben ubicar en el archivo .env. 
- También debemos colocar el host donde corremos nuestra aplicación en el archivo .env, esta variable de entorno se utiliza para la parte de navegación de la app; además, en producción las personas recibirán una url que contendrá nuestro host.
- La app está pensada para recoger los datos del formulario y crear una url que es la que se envía por email a la persona que recibirá el abrazo virtual.
- Puedes ver esta aplicación en producción aquí: [Virtual Hug](https://virtualhug.jaimejb.com/).

![portada](./src/assets/virtual-hug.png)

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default {
  // other rules...
  parserOptions: {
    ecmaVersion: 'latest',
    sourceType: 'module',
    project: ['./tsconfig.json', './tsconfig.node.json'],
    tsconfigRootDir: __dirname,
  },
}
```

- Replace `plugin:@typescript-eslint/recommended` to `plugin:@typescript-eslint/recommended-type-checked` or `plugin:@typescript-eslint/strict-type-checked`
- Optionally add `plugin:@typescript-eslint/stylistic-type-checked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and add `plugin:react/recommended` & `plugin:react/jsx-runtime` to the `extends` list
