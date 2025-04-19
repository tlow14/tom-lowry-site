# Dockerfile
# Stage 1: Build the React application
FROM node:18-alpine AS builder

WORKDIR /app

COPY package*.json ./

RUN npm install

COPY . .

RUN npm run build

# Stage 2: Serve the static assets with Nginx
FROM nginx:alpine

# Copy the built static assets from the builder stage
COPY --from=builder /app/build /usr/share/nginx/html

# Expose port 80 for the Nginx server
EXPOSE 80

# Optionally, you can add a custom nginx.conf if needed
# COPY ./nginx.conf /etc/nginx/nginx.conf

# Nginx serves static content by default, so no explicit CMD is usually needed