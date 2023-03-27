# Use an official web server as a parent image
FROM nginx:alpine

# Set the working directory to /app
WORKDIR /app

# Copy the content of the website into the container
COPY . /usr/share/nginx/html

# Install dependencies
RUN apk add --no-cache nodejs npm

# Copy the rest of the application code to the container
COPY . .

# Build the webpack site and output it to the docs directory
RUN npm run build

# Copy the output of the webpack build to the nginx image
COPY /app/docs /usr/share/nginx/html

# Expose port 80 for HTTP traffic
EXPOSE 80

# Start the nginx server
CMD ["nginx", "-g", "daemon off;"]
