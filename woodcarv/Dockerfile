# Dockerfile  
FROM node:alpine AS builder

WORKDIR /app

COPY . /app

RUN npm install && \
    npm run build-locale

FROM nginx:alpine

EXPOSE 80

COPY --from=builder /app/nginx.conf /usr/nginx/nginx.conf
COPY --from=builder /app/dist/ /usr/share/nginx/html/