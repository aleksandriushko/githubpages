# Setup instructions

## deployment project
run command
``` bash
# install dependencies
$ npm install
```

## add .nuxt folder to .gitignore 
after installing npm, nuxt.js generated service files that are located in the .nuxt folder. There is no need to track changes in this folder. This folder has been added to .gitignore.

## set home-start-up template
to select the template home-start-up template, you need to transfer all code from the /pages/home-start-up.vue file to the index.vue file

## github pages
changed nuxt.config. to work with github
added a prefix (path) for all pictures. So that pictures can be displayed on github pages

to deploy the project need to change the value in the field - router.base: '/demo-brook-vue-theme'
for local development or if the project will be moved to a live server, 
then you need to change the value to - router.base: '/'
then you need to create (or change if it already exists) a branch to gh-pages
and run command
``` bash
$ npm run generate
```
It will create a dist folder with everything inside ready to be deployed on GitHub Pages hosting
and run command
``` bash
$ npm run generate
```
then need add and commit the dist folder
``` bash
git add dist && git commit -m "Initial dist subtree commit demo-brook-vue-theme"
```
then need to push the dist folder to the root of the gh-pages branch
``` bash
git subtree push --prefix dist https://github.com/mlmedia/demo-brook-vue-theme.git gh-pages
```
then need to activate the gh-pages branch on the github
1) Go to Settings - https://prnt.sc/1w8uh2k
2) Click on Pages - https://prnt.sc/1w8um2o
3) Click on Source > gh-pages - https://prnt.sc/1w8vekx
and click save
