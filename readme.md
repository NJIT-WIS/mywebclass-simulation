# MyWebClass.Org Project

## Install Instructions
1. [Mac](#)
2. [Windows 10](#)
3. [Windows 11](#)
4. [Ubuntu Desktop](#)
5. [Ubuntu Server](#)

## Docker Commands

1. "docker compose up" Runs in the foreground without rebuilding the docker image
2. "docker compose up --build" runs in the foreground and builds the dockerfile locally
3. "docker compose up -d" runs the existing docker image and services in the background
4. "docker compose up --build -d" runs in the background and builds the image
5. "docker compose stop" Stops all the services that the docker-compose.yml file in the current directory of command
   started
6. "docker compose down" Deletes all the services that the docker-compose.yml file in the current directory of command
   started

# Local Development

1. Install nodeJS https://nodejs.org/en/
2. type npm install in the project folder
3. type npm start to start live preview and open your browser / it will automatically change when you edit any file in
   the
   SRC directory
4. Only edit the site files in the src directory. Webpack will build this folder and put the output into public_html
   automatically

## Local Development Commands

1. "npm install" Done once to install the node dependencies
2. "npm start" Opens up the development preview
3. "npm run build" Builds the site using webpack and deploys to public_html and you can see it on localhost:8080 without
   rebuilding the dockerfile manually because of the volume share setup by the docker compose file.
4. "npm run clean" Deletes anything in the public_html folder.
5. "npx playwright test" <- Run the playwright tests
