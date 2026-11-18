# Contexto del Proyecto: Clon de Airbnb

## 1. Perfil del Usuario y Objetivo
El usuario es un viajero que busca explorar, comparar y reservar alojamientos vacacionales o estancias cortas en destinos como Higuerote, Puerto La Cruz o Caracas desde su teléfono móvil (375px) o computadora de escritorio (768px+). Su objetivo es filtrar opciones por ubicación o categoría en tiempo real, comparar precios y ubicaciones en un catálogo ordenado, e inspeccionar las fotos, comodidades, datos del anfitrión y costos antes de confirmar su reserva con una navegación fluida sin recargas de página.

## 2. Descripción de las Tres Vistas
* **Página de Inicio (/)**: Muestra la barra de navegación superior con buscador en tiempo real, una fila horizontal de filtros por categoría (Playa, Mansiones, Tendencias, etc.) y una cuadrícula responsiva de tarjetas de alojamiento con simulación de carga inicial.
* **Página de Catálogo (/catalog)**: Presenta los resultados de búsqueda con el conteo de alojamientos, un selector para ordenar por precio ascendente o descendente, la lista de tarjetas reutilizadas y un panel de mapa (a la derecha en escritorio y debajo en móvil).
* **Página de Detalle de Habitación (/rooms/[id])**: Carga dinámicamente la información de un alojamiento específico mostrando un botón de regreso al catálogo, galería interactiva con controles Anterior/Siguiente, cabecera con título y ubicación, perfil del anfitrión, cuadrícula de servicios (amenities) y tarjeta de reserva con contador de huéspedes.

## 3. Especificación de Componentes (Flujo de Visión)

### Componentes Compartidos
* **Navbar**
  * **Props**: `searchQuery?: string`, `onSearchChange?: (value: string) => void`, `showSearchInput?: boolean`
  * **Layout**: Cabecera fija superior con logo a la izquierda (enlace a inicio), barra de búsqueda central redondeada, enlace al catálogo y menú de usuario a la derecha.
* **PropertyCard**
  * **Props**: `property: Property`
  * **Layout**: Tarjeta vertical envuelta en `<Link>` hacia el detalle, con contenedor de imagen de aspecto cuadrado, etiqueta de favorito, título, ubicación, categoría, valoración con estrella y precio por noche.

### Componentes de la Página de Inicio (/)
* **CategoryFilter**
  * **Props**: `categories: Category[]`, `activeCategory: string`, `onSelectCategory: (id: string) => void`
  * **Layout**: Fila horizontal con desplazamiento lateral debajo de la barra de navegación que resalta con borde inferior e intensidad visual la categoría activa.

### Componentes de la Página de Catálogo (/catalog)
* **CatalogHeader**
  * **Props**: `totalResults: number`, `sortOrder: "asc" | "desc"`, `onSortChange: (order: "asc" | "desc") => void`
  * **Layout**: Barra superior del listado con contador de resultados a la izquierda y control desplegable de ordenación de precios a la derecha.
* **MapPlaceholder**
  * **Props**: `properties: Property[]`
  * **Layout**: Contenedor gris estilizado con pines de precio simulados; se ubica debajo de las tarjetas en móvil (375px) y fijo a la derecha ocupando la mitad de la vista en escritorio (768px+).

### Componentes de la Vista de Detalle (/rooms/[id])
* **PhotoGallery**
  * **Props**: `images: string[]`, `title: string`
  * **Layout**: Visor superior con imagen activa controlada por `useState`, indicador numérico de foto actual y botones flotantes Anterior / Siguiente.
* **RoomHeader**
  * **Props**: `title: string`, `rating: number`, `reviewsCount: number`, `location: string`
  * **Layout**: Bloque superior debajo de la galería con título principal, estrella de valoración, cantidad de reseñas y ciudad.
* **HostInfo**
  * **Props**: `hostName: string`, `hostYears: number`, `hostAvatar: string`
  * **Layout**: Fila horizontal con bordes divisorios que agrupa el avatar circular del anfitrión, su nombre y años de experiencia.
* **AmenitiesGrid**
  * **Props**: `amenities: Amenity[]`
  * **Layout**: Cuadrícula de 1 columna en móvil y 2 columnas en escritorio con pares de icono y etiqueta descriptiva.
* **BookingCard**
  * **Props**: `pricePerNight: number`, `maxGuests: number`
  * **Layout**: Tarjeta con borde y sombra que muestra el precio por noche, controles `+` y `-` con `useState` para ajustar huéspedes dentro del límite permitido, cálculo de total y botón CTA de reserva.