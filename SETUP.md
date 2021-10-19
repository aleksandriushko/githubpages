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

## add content for Home, About Us, Services, Portfolio, Contact
create pages:
/pages/about-us.vue
/pages/contact-us.vue
/pages/portfolio.vue
/pages/services.vue
create components:
/components/custom/ContactModern.vue
/components/custom/ContactUsBreadcrumb.vue
/components/custom/EffectiveSolution.vue
/components/custom/HeaderBlack.vue
/components/custom/HeroEssential.vue
/components/custom/Navigation.vue
/components/custom/ServiceModern.vue
/components/custom/ServiceModernBreadcrumb.vue
/components/custom/WhatNext.vue
upload images in /static/images

create commit for demo-stratup branch
switch branch on gh-pages
run command: 
``` bash
$ npm run generate
```
update gh-pages in GitHub
``` bash
git push origin `git subtree split --prefix dist master`:gh-pages --force
git subtree push --prefix dist origin gh-pages
```
select gh-pages branch on GitHub Pages