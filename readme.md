# Install Instructions

1. Fork the Repo (YOur Team - ONLY ONE and add partner(s) as collaborators) or Clone (Try Oot MyWebclass) 
2. Clone your fork
3. Create the Docker repo on your dockerhub account
4. Replace the name in [.github/workflows/publish.yml](.github/workflows/publish.yml]) on line 11 with your docker repo
5. Change the [docker-compose.yml](docker-compose.yml) file line 5 with your docker repo
6. Run docker ps and kill any running processes before you start this kill by docker kil <container id>
7. run the service locally with docker compose up -d
8. Go to localhost to see your image run and anytime master updates this will be automaticly updated.

# Local Development

1. Install nodeJS https://nodejs.org/en/
2. type npm install in the project folder
3. type npm start to start live preview and open your browser / it will automaticly change when you edit any file in the
   SRC directory 


1. docker compose up <- starts in the foregrond and you will see logs cntrl c to kill