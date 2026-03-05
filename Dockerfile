# Usamos Node 18 Alpine para que sea liviano y estable
FROM node:18-alpine

WORKDIR /app
# Instalamos Git y herramientas de red necesarias
RUN apk add --no-cache git openssh

# Instalamos la CLI de Angular versión 18 globalmente en el contenedor
RUN npm install -g @angular/cli@18

# Copiamos solo los archivos de dependencias primero (Caché de capas)
COPY package.json package-lock.json* ./

# Instalamos las dependencias del proyecto
RUN npm install

# Copiamos el resto del código
COPY . .

# Exponemos el puerto de desarrollo
EXPOSE 4200

# CAMBIO: Definimos el usuario antes de arrancar la aplicación
USER node

# Comando para iniciar según tu script "start"
CMD ["npm", "start", "--", "--host", "0.0.0.0", "--poll", "500"]