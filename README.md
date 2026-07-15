# Portfolio (Next.js)

Repositorio del portafolio personal construido con Next.js 13 (App Router) y TypeScript.

**Descripción**: sitio estático/dinámico con secciones de presentación, proyectos, experiencia y contacto. Incluye optimización de imágenes mediante el optimizador de Next y soporte i18n con `next-intl`.

**Características principales**
- Interfaz con Tailwind CSS
- Optimización de imágenes con `next/image`
- Soporte de idiomas con `next-intl` (carpeta `messages/`)
- Componentes reutilizables en `components/`

**Requisitos**
- Node.js v18+ recomendado
- npm, yarn o pnpm

**Comandos útiles**
```bash
# instalar dependencias
npm install

# desarrollo (hot-reload)
npm run dev

# build de producción
npm run build

# ejecutar build en modo producción local
npm run start

# lint (eslint)
npm run lint
```

**Estructura importante**
- `app/` - rutas y layout (App Router)
- `components/` - componentes React reutilizables (e.g., `components/intro.tsx`)
- `public/` - assets públicos (coloca aquí la imagen de perfil si quieres evitar hotlinking)
- `lib/` - datos y hooks
- `messages/` - traducciones (`en.json`, `es.json`)
- `next.config.js` - configuración de Next (dominios permitidos para imágenes)

Si ves diferencias entre local y producción en las imágenes (por ejemplo, `/ _next/image?url=...` apuntando a LinkedIn), revisa:
- `components/intro.tsx` y `app/[locale]/layout.tsx` (metadatos) — pueden referenciar URLs externas temporales.
- Considera mover la imagen a `public/` o alojarla en un CDN permanente para evitar fallos por URLs expiradas.

**Despliegue**
- Este proyecto se despliega fácilmente en Vercel. Conecta tu repo y Vercel detectará Next.js automáticamente.
- Asegúrate de que el commit desplegado contiene los cambios esperados (compara SHA en el dashboard de Vercel).

**Contribuciones**
- Abrir issues o pull requests con mejoras o correcciones. Mantener cambios focalizados y pruebas cuando aplique.

Si quieres, puedo actualizar la imagen de perfil para que esté en `public/` y actualizar las referencias en el código.

