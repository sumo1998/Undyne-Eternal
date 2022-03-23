# Module 1 Group Assignment

CSCI 5117, Spring 2022, [assignment description](https://canvas.umn.edu/courses/291031/pages/project-1)

## App Info:

* Team Name: TODO
* App Name: Undyne – Eternal
* App Link: <https://whispering-waters-75938.herokuapp.com/>

### Students

* Nikunj Chawla, chawl025@umn.edu
* Aaron Kandikatla, kandi021@umn.edu
* Siyad Gedi, gedi0007@umn.edu
* Sumukh Nitundila, nitun001@umn.edu
* Sumanth Kaushik Vishwanath, kaush047@umn.edu

## Key Features

**Describe the most challenging features you implemented
(one sentence per bullet, maximum 4 bullets):**

* Searching, filtering, and sorting levels by title, description, difficulty, rating, and time.
* Redesigning the game from scratch to allow users to create their own levels.
* Making a level creator where users can design their own levels with a lot of custom options.
* Letting users pick their own unique username after logging in and integrating it with Auth0.

## Testing Notes

**Is there anything special we need to know in order to effectively test your app? (optional):**

* ...

## Screenshots of Site

**[Add a screenshot of each key page (around 4)](https://stackoverflow.com/questions/10189356/how-to-add-screenshot-to-readmes-in-github-repository)
along with a very brief caption:**

![home](static/readme/home.png)

The home feed in which you can see all of the posted levels and search, sort, and filter.

![level](static/readme/level.png)

The page you see when you click on a level. Here you can, play the level, write a review with a rating, or play the level.

![user](static/readme/user.png)

The page you see when on your own profile, which is also similar to the view of others' profiles. Here, you can view, play, edit, or delete your levels and view a couple user metrics.

![creator](static/readme/creator.png)

This is the level creator where you can build levels to play and share with others.

![game](static/readme/game.png)

This is the game page where you can play anyone's levels.

## Mockup

Wireframe link: https://framer.com/share/UNDYNE--jIlIFQL6MHGJ5Dj21T4k/PVzi9pijX

There are three main parts to the wireframe. The first is the social media part consisting of the following three pages: the main feed page, the level page, and the user profile page. Then, there is the game part, which is launched from any of the social-media-related pages by clicking on the "Launch Game" button on the navigation bar. The third is the level creater where users can design their own levels.

## External Dependencies

**Document integrations with 3rd Party code or services here. Please do not document required libraries. or libraries that are mentioned in the product requirements**

* PIXI.js
* howler.js
* pydantic
* firebase_admin

**If there's anything else you would like to disclose about how your project relied on external code, expertise, or anything else, please disclose that here:**

The game was based off Fairdyne by Joe Zeng but we rewrote a large majority of it from scratch.
