# syntax=docker/dockerfile:1.3
# Use a multiarch Node.js runtime as a parent image
FROM --platform=$BUILDPLATFORM node:latest AS builder

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy the rest of the application code to the container
COPY . .

# Build the webpack site and output it to the docs directory
RUN npm run build

# Use a multiarch Nginx runtime as a parent image
FROM --platform=$TARGETPLATFORM nginx:latest

# Copy the output of the webpack build from the builder stage to the nginx image
COPY --from=builder /app/docs /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
