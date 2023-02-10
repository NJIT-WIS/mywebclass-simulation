# Assigment Instructions

This assignment will begin to teach you how to work in a development team and show you how all of what we have learned
comes together to enable a productive development process within a team. If you already have this setup by doing
it in class, you need to do it again for the GitHub classroom assignment. You need to form a group, and you can
find a group of 2-3 people by asking on Slack or the discussion board in Canvas for this unit. Each person in the group
needs to complete the assignment, so that each member understands how to set everything up as the team leader. Each team
member will submit their own GitHub classroom repository. If you have previously done this in class you will need to do
a "docker compose down" in the folder of the previous project, so that all the services stop and are removed from that
attempt.  *YOU WILL GET PROBLEMS IF YOU DON'T DO THIS!*

To complete this assignment each partner will click the button to accept the assignment and follow the Installation
instructions below. The first feature(s) that you and your partner(s) will make are to add your names to the readme file
[here](readme.md). You will have 2 pull requests on your own repo and your partner(s) will have 2 pull requests on
theirs. The end result is that each partner should have the experience of the team leader and a team member.

## Steps

### 1. [FIRST WATCH THIS VIDEO](https://youtu.be/uNHNLale9A0)

### 2. FIND A PARTNER USING SLACK OR THE CANVAS DISCUSSION BOARD

### 3. Both Partners ACCEPT THE Assignment GITHUB to create their own GitHub repo, so each person has the chance to do all the steps and practice makes perfect...

1. Partner 1: [kwilliam](https://github.com/kaw393939) <-change to you or your partner
2. Partner 2: [kwilliam](https://github.com/kaw393939) <-change to you or your partner
3. Partner 3: Optional

Complete this on each partner's repos for this assignment by following the development workflow process bellow. Since
you are updating just the [readme.md](readme.md) file, you won't see any changes on localhost. But maybe you can
practice with your partner to do something that will result in localhost having a visible change. When you and your
partners have your readme files updated to show your names and a link to your GitHub profile, you should turn your
respective GitHub repos into Canvas.

[![Click to Start Assignment](module_content/images/start.png)](https://classroom.github.com/a/xTaOHU_V)


# Development Workflow - General process

1. Make a branch for each feature / change
2. Commit to the branch in small clear commits that describe the change to each file(s) i.e. "Added name to readme"
3. "git push origin YourBranchName" or do it from the Pycharm commit menu to push the branch with the changes to the
   central project that you and your partner(s) share.
4. Go on GitHub create a pull request to merge the branch you just pushed into master. You may get a merge conflict and
   will need to edit the merge conflict on GitHub before it will let you merge. A way to avoid this is that one person
   should do a feature and then the merge the pull request. Then the partner should pull master and then start their
   branch and add their name and then do a pull request to merge. This way you start with the updated readme for the 2nd
   feature and that pull request will automatically work without a merge conflict.
5. Wait for master (github actions) to build and check localhost to see the site is updated with your changes you just
   merged.
6. "git pull origin master" to get the changes on master merged to your local copy
7. Once you have the remote changes merged then start a new feature and repeat this process.

# Install Instructions

# Initial Setup - Team Leader

1. Fork the [Repo](https://github.com/njit-wis/mywebclass) (Your Team - ONLY ONE Person and add partner(s) as a
   collaborator(s)) in the repository settings.
2. The person that forks needs to create a Docker repo on their dockerhub account
3. Add the docker username and docker secret to the repositories settings
4. Add your partner's github to collaborators in the settings of the repository
5. Click on the actions tab on your fork of my repo to enable actions if necessary.
6. The person that forks needs to replace the name in [.github/workflows/publish.yml](.github/workflows/publish.yml]) on
   line 11 with their docker repo
7. The person that forks needs to change the [docker-compose.yml](docker-compose.yml) file line 5 with their docker repo
8. Check the actions tab to make sure that it goes green, so that the image is published to the person that fork's
   Docker repo. If no actions have run do a edit on the readme and commit it and then that will trigger the publishing
   GitHub actions workflow.
9. Once there is a green check both partners should clone the forked repo.
10. Once you have it cloned Run "docker ps" to see any running containers and kill any running processes before you
    start this. You do this by typing: docker kill <container id>
11. run the service locally with "docker compose up --build" in the foreground to see that everything works
12. Go to localhost to see your image run and anytime master branch updates it will automatically update localhost for
    both you and your partner.
13. Go back to the terminal and press control c to stop the foreground process
14. Type "docker compose up --build -d " and this will start all the services in the background and your ready for local
    development

## Inital Setup - Team Member - After TEAM LEADER COMPLETES THEIR STEPS

1. Clone your team leaders repo
2. Install [node](https://nodejs.org/en/)
3. Install dependencies (one time for project) "npm install"
4. Make sure you don't have anything running "docker ps" if you do then kill the processes or do a "docker compose down"
   in the project directory of your old project.
5. Startup the docker compose "docker compose up --build -d"
6. View the master branch version of your project on [localhost](localhost)
7. View the live site preview "npm start" 

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

