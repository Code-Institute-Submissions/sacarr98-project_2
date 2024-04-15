# CONNECT 4 -  Testing

![Connect 4 shown on a variety of screen sizes](assets/images/the-quiz-arms.png)

Visit the deployed site: [Connect 4](https://kera-cudmore.github.io/TheQuizArms/)

- - -

## CONTENTS

- [BREATHE -  Testing](#connect-4----testing)
  - [CONTENTS](#contents)
  - [AUTOMATED TESTING](#automated-testing)
    - [W3C Validator](#w3c-validator)
    - [Lighthouse](#lighthouse)
    - [Results](#results)
  - [MANUAL TESTING](#manual-testing)
    - [Testing User Stories](#testing-user-stories)
    - [Full Testing](#full-testing)
  - [BUGS](#bugs)
    - [Known Bugs](#known-bugs)
    - [Solved Bugs](#solved-bugs)

Testing was ongoing throughout the entire process. Chrome developer tools was used whilst building to find and troubleshoot any issues.

I have analysed each page using google chrome developer tools to ensure the responsiveness of all pages on different screen sizes.

- - -

## AUTOMATED TESTING

### W3C Validator

[W3C](https://validator.w3.org/) was used to validate the HTML on all pages of the website. It was also used to validate the CSS.

* [index.html](testing/w3/w3-index.png) - Passed, no errors or warnings to show.
* [mind.html](testing/w3/w3-game.png) - Passed, no errors or warnings to show.
* [body.html](testing/w3/w3-highscores.png) - Passed, no errors or warnings to show.
* [soul.html](testing/w3/w3-404.png) - Passed, no errors or warnings to show.
* [subscribe].html](testing/w3/w3-500.png) - Passed, no errors or warnings to show.

* [style.css](testing/w3/w3-css.png) - Passed, no errors or warnings to show.

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

### Results

All pages achieved 100 for SEO, a minimum of 92 for best practices, and 93 for accessibility. The scores for performance however were quite low, this was due to the image formats I used. This will effect the load time of the site, in future I will use alternative formatting for my images to ensure better performance.

![index.html](assets/images/index_lighthouse.PNG)

![mind.html](assets/images/mind_lighthouse.PNG)

![body.html](assets/images/body_lighthouse.PNG)

![soul.html](assets/images/soul_lighthouse.PNG)

![subscribe.html](assets/images/subscribe_lighthouse.PNG)

## MANUAL TESTING

### Testing User Stories

`First Time Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want to be able to play against my friends. | On openening the site the user is prompted to enter their name, and a second user is also promted to enter their name. This enables two users to play against eachother and be easily identifiable. |
| I want to be able to play a tournament of games | On completion of one round, the user can either restart, or select play again. By selecting play again the current users scores will be logged and the users can play multiple games.  |
| I want the site to be responsive to my device. | I have developed the site with responsiveness in mind. |
| I want the site to be easy to navigate. | Clear headings are used in the navigation bar at the top of the screen these are clear and easy to use on all devices.  |

`Returning Visitors`

|  Goals | How are they achieved? |
| :--- | :--- |
| I want to be able to track my progress. | Going forward I would like prompt users to create an account. Within their account a record of their play will be saved so they can see how they rank against other users. |

`Frequent Visitors`

| Goals | How are they achieved? |
| :--- | :--- |
| I want to be able to play with other users online. | I would like to add funcitionaility that enables users to play against a user on a different device, so if they would like to play when they are alone they can. |

### Full Testing

Full testing was performed on the following devices:

* Laptop:
  * Microsoft surface laptop
* Mobile Devices:
  * iPhone 13 mini

Each device tested the site using the following browsers:

* Google Chrome
* Safari


| Feature | Expected Outcome | Testing Performed | Result | Pass/Fail |
| --- | --- | --- | --- | --- |
| `Navbar` |
|  |  |  |  |  |
| Home Page Link | When clicked the user will be redirected to the home page.| Clicked link | Redirected to the home page. | Pass |
| Practices Link | When hovered over a drop-down menu appears. | Hovered | Menu appears. | Pass |
| Mind Link | When clicked the user will be redirected to the mind page. | Clicked link | Redirected to the mind page | Pass |
| Body Link | When clicked the user will be redirected to the body page. | Clicked link | Redirected to the body page | Pass |
| Soul Link | When clicked the user will be redirected to the soul page. | Clicked link | Redirected to the soul page | Pass |
| Subscribe Link | When clicked the user will be redirected to the subscribe page. | Clicked link | Redirected to the subscribe page | Pass |
| `Footer` |
|  |  |  |  |  |
| Social media links | When clicked the user will be redirected to relevent social media page. | Clicked all logos | Redirected to the correct pages. | Pass |
| `Subscribe Page` |
| | | | | | |
| First and last name input - empty | The username is a required field, so should not submit with no value | Tried to submit form with no value entered | Tooltip lets user know this value is required | Pass |
| Email input | The email input should include an email address  | Entered plain text | Tooltip tells user to use an email address here | Pass |
| Email input - empty | The email is a required field, so should not submit with no value | Tried to submit form with no value entered | Tooltip lets user know this value is required | Pass |
| Join button | Should redirect user to the home page | Created new user and submitted form | Redirected to the home page | Pass |

 - - -

## BUGS

### Known Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | The initial banner text was clear on some pages but difficult to read against the background on others | By adding a shadow the text had better readability  |
| 2 | When adding media queries to my index page the footer was sitting on top of the text content | I realised this was due to the text content being larger than the div container, by resizing the div container I solved this |
| 3 | Initially when moving through pages on the navigation bar the underline did not move to the relvent page | By ensuring all pages were set to "active" I solved this issue. |


### Solved Bugs

| No | Bug | |
| :--- | :--- | :--- |
| 1 | On the soul page the footer seems to jump about, despite it being copied exactly from previous pages, further investigation is needed to solve this issue.| |