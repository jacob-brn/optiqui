FROM node:20 AS builder
WORKDIR /app

# Set build-time public environment variables
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_MEASUREMENT_ID

# Make them available during build with explicit values
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ENV NEXT_PUBLIC_MEASUREMENT_ID=${NEXT_PUBLIC_MEASUREMENT_ID}

COPY package.json package-lock.json ./
RUN npm install --force
COPY . .

# Debug: print env vars to confirm they're set (remove in production)
RUN npm run build

FROM node:20-slim
WORKDIR /app

# Use ARG to receive values in second stage
ARG NEXT_PUBLIC_APP_URL
ARG NEXT_PUBLIC_MEASUREMENT_ID

# Copy public environment variables to runtime
ENV NEXT_PUBLIC_APP_URL=${NEXT_PUBLIC_APP_URL}
ENV NEXT_PUBLIC_MEASUREMENT_ID=${NEXT_PUBLIC_MEASUREMENT_ID}

COPY --from=builder /app/.next /app/.next
COPY --from=builder /app/node_modules /app/node_modules
COPY --from=builder /app/package.json /app/package.json
COPY --from=builder /app/public /app/public 
COPY --from=builder /app/contents /app/contents
COPY --from=builder /app/registry /app/registry

EXPOSE 3000
CMD ["npm", "start"]