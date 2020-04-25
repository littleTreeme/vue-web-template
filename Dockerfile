FROM node:latest as builder
COPY nginx.conf /etc/nginx
COPY --from=builder /app/dist  /usr/share/nginx/html
