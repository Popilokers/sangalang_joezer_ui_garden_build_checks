#Build React app
FROM node:18-alpine AS builder

# Set working directory inside container
WORKDIR /sangalang_joezer_ui_garden

# Copy package.json and package-lock.json (if exists)
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy rest of the source code
COPY . .

# Build the React app for production
RUN npm run build

# Stage 2: Serve the build with nginx
FROM nginx:stable-alpine

# Copy the built files from builder stage
COPY --from=builder /sangalang_joezer_ui_garden/build /usr/share/nginx/html

# Remove default nginx.conf
RUN rm /etc/nginx/conf.d/default.conf

# Copy custom nginx.conf to listen on port 8083
COPY nginx.conf /etc/nginx/conf.d/default.conf

# Expose port 8083
EXPOSE 8083

# Start nginx
CMD ["nginx", "-g", "daemon off;"]