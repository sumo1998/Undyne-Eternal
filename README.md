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

![](https://media.giphy.com/media/o0vwzuFwCGAFO/giphy.gif)


## Mockup 

Wireframe link: https://tinyurl.com/eternalwireframe

There are two main parts to the wireframe. The first is the social media part consisting of the following three pages: the main feed page, the level page, and the user profile page. Then, there is the game part, which is launched from any of the social-media-related pages by clicking on the "Launch Game" button on the navigation bar. The game consists of four sections (likely would be combined as interactive parts of a single page). The first section gives users the choice between playing the provided levels or launching the level creator. The second section allows the user to choose a difficulty from the provided levels to play. The third section is the game itself (playing a provided level, level creator level, or other user's level). The fourth is the level creator.

## External Dependencies

**Document integrations with 3rd Party code or services here.
Please do not document required libraries. or libraries that are mentioned in the product requirements**

* PIXI.js
* howler.js
* pydantic
* firebase_admin

**If there's anything else you would like to disclose about how your project
relied on external code, expertise, or anything else, please disclose that
here:**

The game was based off Fairdyne by Joe Zeng but we rewrote a large majority of it from scratch.
