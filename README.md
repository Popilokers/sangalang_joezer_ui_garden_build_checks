# Sangalang Joezer UI Garden

A reusable ReactTS component library that utilizes stories from storybook for testing the UI functionality

# Overview

This repository covers the component library which consists of html form tags as components and their stories.

# How to run the program

# Cloning the repo

git clone https://github.com/Popilokers/React-Component-Library-Assignment12_JSangalang.git

# Installing Dependencies
npm install

# Building the Images

# Building library image
docker build -f dockerfile -t sangalang_joezer_coding_assignment12 .

# Building library storybook
docker build -f dockerfile.storybook -t  sangalang_joezer_storybook_image .

# Running the containers

# Running library container
docker run -d -p 8083:8083 --name sangalang_joezer_coding_assignment12 
sangalang_joezer_coding_assignment12 

    in browser, go to http://localhost:8083/

# Running storybook container
docker run sangalang_joezer_storybook_image

    gives a localhost link


# Dockerfile

node-20 - storybook needs atleast node.js 20
alpine - lightweight so the image would take up less storage

daemon -  off because container must run in the foreground and not the background
       -  on = background