FROM node:20 as builder-frontend

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy project folder
COPY frontend /app

# Build Angular project
RUN pnpm i && pnpm run build

FROM node:20 as builder-backend

# Set working directory
WORKDIR /app

# Install pnpm
RUN npm install -g pnpm

# Copy project folder
COPY backend /app

# Build backend project
RUN pnpm i && pnpm run build

FROM node:20

RUN apt-get update && apt-get install -y supervisor nginx
RUN mkdir -p /var/log/supervisor
COPY docker/supervisord.conf /etc/supervisor/conf.d/supervisord.conf

# Copy projects
COPY --from=builder-frontend /app/dist/tp-franckg/browser/ /var/www/html
COPY --from=builder-backend /app/build /app/backend

# Set working directory
WORKDIR /app/backend
# Install dependencies
RUN corepack enable && pnpm install --prod --frozen-lockfile

# Copy nginx configuration
COPY docker/nginx.conf /etc/nginx/nginx.conf

# Set environment variables
ENV NODE_ENV production
ENV HOST 0.0.0.0
ENV PORT 3333
ENV LOG_LEVEL info

EXPOSE 80

CMD ["/usr/bin/supervisord"]

