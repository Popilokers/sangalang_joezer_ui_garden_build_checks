# Sangalang Joezer UI Garden Build Checks

This is version 2 of UI Garden. This version implements Prettier, ESLint, and Husky.

## Overview

This repository is almost identical to UI Garden repo. The difference is the Prettier, ESLint, and Husky implementation.

Prettier is used for code format consistency so that anyone who adds anything to the code and commits, the code will be formatted the same automatically.

ESLint is used to "lint" the program for redundunt or useless code.

Husky allows precommit checks. This is what makes it so Prettier is ran, ESLint checks, and all the Tests are ran every commit. If any of the checks fail, the commit fails. This makes anything that gets committed be checked automatically for quality.

## How to run the program

#### Cloning the repo

git clone https://github.com/Popilokers/sangalang_joezer_ui_garden_build_checks.git

#### Installing Dependencies
npm install

### Building the Images

#### Building library image
docker build -f dockerfile.precommits --target react-app sangalang_joezer_coding_assignment12_react-app .

#### Building library storybook
docker build -f dockerfile.precommits --target storybook sangalang_joezer_coding_assignment12_storybook .

### Running the containers

#### Running library container
docker run -p 8018:8018 --name sangalang_joezer_coding_assignment13 sangalang_joezer_coding_assignment13_react-app 

    in browser, go to http://localhost:8018/

#### Running storybook container
docker run -p 8019:6006 --name sangalang_joezer_coding_assignment13_storybook sangalang_joezer_coding_assignment_storybook

    in browser, go to http://localhost:8019/

## Stoping containers
docker stop sangalang_joezer_coding_assignment13

docker stop sangalang_joezer_coding_assignment13_storybook

## Starting containers
docker start sangalang_joezer_coding_assignment13

docker start sangalang_joezer_coding_assignment13_storybook


## Dockerfile

### ReactTs Component Library Docker

Builds the React App first
    uses nginx because the React App is in production build (NODE_ENV=production)
    
    this means its static and needs something to serve it (nginx is a server)

    daemon is off because we want it to run in the foreground and not the background

Building the Storybook
    user node:20-alpine instead of 18 because storybook works on 20

    expose 6006 because thats the port that storybook uses