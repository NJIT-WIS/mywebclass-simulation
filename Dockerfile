# Use a Node.js base image with Alpine Linux
FROM node AS build

# Set the working directory to /app
WORKDIR /app

# Copy the package.json and package-lock.json files to the container
COPY package*.json ./
COPY webpack.config.prod.js ./
# Install dependencies
RUN npm install

# Copy the source code to the container
COPY src ./src

# Build the project with webpack
RUN npm run build

# Use a Nginx base image with Alpine Linux
FROM nginx:alpine

# Copy the built files from the previous stage to the Nginx container
COPY --from=build /app/docs /usr/share/nginx/html

# Expose port 80 to the outside world
EXPOSE 80

# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]