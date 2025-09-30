# Arbues.github.io
Web page

# Portfolio - Arbués Pérez Villegas

Portfolio profesional de IA desplegado en GitHub Pages.

## Estructura de Archivos

```
Arbues.github.io/
│
├── index.html              # Página principal
├── css/
│   └── style.css          # Estilos CSS
├── js/
│   └── main.js            # JavaScript interactivo
├── assets/
│   └── profile.jpg        # Tu foto de perfil (400x400px)
└── README.md              # Este archivo
```

## Pasos de Instalación

### 1. Crear el Repositorio

1. Ve a GitHub y crea un nuevo repositorio
2. Nombre exacto: `Arbues.github.io` (usa tu username de GitHub)
3. Marca como **Público**
4. NO inicialices con README (lo subirás tú)

### 2. Clonar o Crear Localmente

**Opción A - Clonar:**
```bash
git clone https://github.com/Arbues/Arbues.github.io.git
cd Arbues.github.io
```

**Opción B - Crear desde cero:**
```bash
mkdir Arbues.github.io
cd Arbues.github.io
git init
git remote add origin https://github.com/Arbues/Arbues.github.io.git
```

### 3. Crear Estructura de Carpetas

```bash
mkdir css js assets
```

### 4. Agregar los Archivos

Copia y pega el contenido de cada archivo en su ubicación:

- `index.html` → raíz del proyecto
- `css/style.css` → carpeta css/
- `js/main.js` → carpeta js/
- Tu foto → `assets/profile.jpg`

### 5. Preparar tu Foto de Perfil

**Especificaciones:**
- Tamaño: 400x400 píxeles (cuadrada)
- Formato: JPG o PNG
- Peso: Menos de 500KB
- Nombre: `profile.jpg`
- Ubicación: `assets/profile.jpg`

**Herramientas para editar:**
- Online: [Squoosh.app](https://squoosh.app)
- Windows: Paint, Photos
- Mac: Preview
- Linux: GIMP

### 6. Actualizar Links Personales

Abre `index.html` y busca estos textos para reemplazar:

```html
[TU-USUARIO-GITHUB]     → Tu username de GitHub
[LINK-LINKEDIN]         → Tu perfil de LinkedIn (ej: arbues-perez-villegas)
[EMAIL]                 → Tu email (ej: arbues.perez.v@uni.pe)
[TU-ID-SSRN]            → Tu ID de autor en SSRN
[LINK-SSRN-PAPER-1]     → Link del paper de papas
[LINK-SSRN-PAPER-2]     → Link del paper de SLAM
[LINK-REPO-FACENET]     → Link del repo de FaceNet
[LINK-REPO-PAPA]        → Link del repo de papas (si es público)
```

**Ejemplo de reemplazo:**
```html
<!-- Antes -->
<a href="https://github.com/[TU-USUARIO-GITHUB]">

<!-- Después -->
<a href="https://github.com/Arbues">
```

### 7. Subir al Repositorio

```bash
git add .
git commit -m "Initial portfolio commit"
git branch -M main
git push -u origin main
```

### 8. Activar GitHub Pages

1. Ve a tu repositorio en GitHub
2. Click en **Settings**
3. En el menú izquierdo, click en **Pages**
4. En **Source**, selecciona:
   - Branch: `main`
   - Folder: `/ (root)`
5. Click en **Save**
6. Espera 2-5 minutos

### 9. Verificar tu Sitio

Tu portfolio estará disponible en:
```
https://arbues.github.io
```

Si no funciona inmediatamente:
- Espera 5 minutos más
- Verifica que todos los archivos estén en las carpetas correctas
- Revisa la pestaña "Actions" en GitHub para ver el estado del deploy

## Actualizar el Portfolio

Cada vez que quieras hacer cambios:

```bash
# 1. Edita los archivos que necesites
# 2. Guarda los cambios
# 3. Sube a GitHub:

git add .
git commit -m "Descripción de tus cambios"
git push
```

El sitio se actualizará automáticamente en 1-2 minutos.

## Personalización Adicional

### Agregar más secciones
Edita `index.html` y agrega nuevas secciones siguiendo la estructura existente.

### Cambiar colores
Edita `css/style.css` en la sección `:root` al inicio del archivo:

```css
:root {
    --primary-color: #667eea;    /* Color principal */
    --secondary-color: #764ba2;   /* Color secundario */
    /* ... más colores */
}
```

### Agregar más proyectos
En `index.html`, busca la sección "Projects" y duplica un `<div class="project-card">` existente.

## Troubleshooting

### Problema: El sitio no carga
**Solución:**
- Verifica que el nombre del repo sea exactamente `Arbues.github.io`
- Asegúrate de que sea público
- Espera 10 minutos después de activar Pages

### Problema: La foto no aparece
**Solución:**
- Verifica que el archivo se llame exactamente `profile.jpg`
- Asegúrate de que esté en `assets/`
- Revisa que el tamaño no exceda 1MB

### Problema: Los estilos no se aplican
**Solución:**
- Verifica que `style.css` esté en la carpeta `css/`
- Revisa que no haya errores de sintaxis en el CSS

### Problema: Los links no funcionan
**Solución:**
- Asegúrate de haber reemplazado todos los placeholders `[TU-...]`
- Verifica que los links externos empiecen con `https://`

## Recursos Adicionales

- [GitHub Pages Docs](https://docs.github.com/en/pages)
- [Font Awesome Icons](https://fontawesome.com/icons)
- [CSS Gradient Generator](https://cssgradient.io/)
- [Responsive Design Checker](https://responsivedesignchecker.com/)

## Contacto

Si tienes problemas con el portfolio, verifica:
1. Que todos los archivos estén en las carpetas correctas
2. Que hayas actualizado todos los links personales
3. Que tu foto esté en el formato y tamaño correcto

---

**Última actualización:** 2025

Made with passion for AI research and innovation.