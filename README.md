# Título de tu proyecto
Descripción de tu proyecto...

## Entornos
- Previsualización: https://main--{repo}--{owner}.aem.page/
- En vivo: https://main--{repo}--{owner}.aem.live/

## Documentación

Antes de utilizar el aem-boilerplate, te recomendamos revisar la documentación en [www.aem.live](https://www.aem.live/docs/) y [experienceleague.adobe.com](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/authoring). Específicamente:
1. [Primeros Pasos](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/edge-dev-getting-started), [Cómo crear bloques](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/create-block), [Modelado de Contenido](https://experienceleague.adobe.com/en/docs/experience-manager-cloud-service/content/edge-delivery/wysiwyg-authoring/content-modeling)
2. [Anatomía de un Proyecto](https://www.aem.live/developer/anatomy-of-a-project)
3. [Rendimiento Web](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Secciones, Bloques, y Auto Bloqueo](https://www.aem.live/developer/markup-sections-blocks)

Además, te sugerimos ver las grabaciones de nuestras presentaciones o sesiones anteriores:
- [Cómo empezar con la autoría AEM y los servicios de entrega en borde](https://experienceleague.adobe.com/en/docs/events/experience-manager-gems-recordings/gems2024/aem-authoring-and-edge-delivery)

## Requisitos previos

- Nodejs 18.3.x o superior
- Versión de AEM Cloud Service 2024.8 o superior (>= `17465`)

## Instalación

```sh
npm i
```

## Revisión de código

```sh
npm run lint
```

## Desarrollo local

1. Crea un nuevo repositorio basado en la plantilla `aem-boilerplate` y añade un punto de montaje en `fstab.yaml`
2. Añade la [aplicación GitHub de sincronización de código AEM](https://github.com/apps/aem-code-sync) al repositorio
3. Instala la [Línea de comandos AEM](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
4. Inicia Proxy de AEM: `aem up` (esto abrirá tu navegador en `http://localhost:3000`)
5. Abre el directorio `{repo}` en tu IDE favorito y comienza a programar :)
