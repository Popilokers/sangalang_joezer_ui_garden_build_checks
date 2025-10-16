# Sangalang Joezer UI Garden

A reusable ReactTS component library that utilizes stories from storybook for testing the UI functionality

## Overview

This repository covers the component library which consists of html form tags as components and their stories.

## How to run the program

#### Cloning the repo

git clone https://github.com/Popilokers/React-Component-Library-Assignment12_JSangalang.git

#### Installing Dependencies
npm install

### Building the Images

#### Building library image
docker build -f dockerfile -t sangalang_joezer_coding_assignment12 .

#### Building library storybook
docker build -f dockerfile.storybook -t  sangalang_joezer_storybook_image .

### Running the containers

#### Running library container
docker run -p 8083:8083 --name sangalang_joezer_coding_assignment12 
sangalang_joezer_coding_assignment12 

    in browser, go to http://localhost:8083/

#### Running storybook container
docker run -p 8084:6006 --name sangalang_joezer_storybook sangalang_joezer_storybook_image

    in browser, go to http://localhost:8084/


## Dockerfiles 

### ReactTs Component Library Docker

node-18 - very reliable and like a base version of node
alpine - lightweight so the image would take up less storage

Using nginx because npm run build creates static files => need server to see output (serving the output)

nginx - used because instructions say "DockerFile will host a production build" - npm run build
      - npm start will start a development server (not what was asked)
      - works with NODE_ENV=production to start a lightweight and fast production build (mimics/readies app for deployment)

daemon -  off because container must run in the foreground and not the background
       -  on = background


### ReactTs Component Library Docker

node20 - storybook requires node20

public - (local) storybook dir is public
       - ./public is container

npm run storybook - storybook is for testing so I decided to go with the dev server

