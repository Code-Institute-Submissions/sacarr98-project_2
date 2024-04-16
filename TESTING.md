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

[W3C](https://validator.w3.org/) was used to validate the HTML of the website. It was also used to validate the CSS.

* [index.html](testing/w3/w3-index.png) - Passed, no errors or warnings to show.

* [style.css](testing/w3/w3-css.png) - Passed, no errors or warnings to show.
* [style.css](testing/w3/w3-css.png) - Passed, no errors or warnings to show.

### Lighthouse

I used Lighthouse within the Chrome Developer Tools to test the performance, accessibility, best practices and SEO of the website.

### Results

All pages achieved 100 for SEO, a minimum of 92 for best practices, and 93 for accessibility. The scores for performance however were quite low, this was due to the image formats I used. This will effect the load time of the site, in future I will use alternative formatting for my images to ensure better performance.

![index.html](assets/images/index_lighthouse.PNG)


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
| `Username Prompt` |
|  |  |  |  |  |
| Prompt to enter username | When page loads the users recieve an alert and a prompted to enter a username | Load page | Prompt displayed | Pass |
| Entered username displays | When name entered it is displayed on the page and a user is prompted to play | Entered name | Name displayed | Pass |
| `Instructions Collapsible` |
|  |  |  |  |  |
| Collapsible | When clicked the instructions will drop down in a collapsible element | Clicked bar | Instructions display | Pass |
| Collapsible | When clicked the instructions will return up in a collapsible element | Clicked bar | Instructions hidden | Pass |
| `Game play` |
|  |  |  |  |  |
| Play counter | When user clicks on a slot the relevent coloured counter appears in that slot | Clicked on slots | Coloured counter matching user appears in slot | Pass |
| Play prompt | After one user plays text appears prompting the next user to make a move | Played a counter | Text changes to prompt next user to play | Pass |
| Draw | If all slots are filled with no winner users will be alerted of a draw | Filled all slots without win | Draw alert appears | Pass |
| Win | If either user gets 4 in a row alert will appear of winner | Played to get 4 in a row in every way possible | Win alert appears | Pass |
| Win | If either user gets 4 in a row win text appears at top | Played to get 4 in a row in every way possible | Win text appears | Pass |
| Score counter | when a user wins a game the score will change to reflect their win | Won a game | score display changes | Pass |
| `Play Buttons` |
| | | | | | |
| Play again | When a user clicks play again the slots will empty, usernames and score remain the same | clicked play again | Slots clear, username and score remain the same | Pass |
| Reset | When a user clicks resest the slots will empty, usernames and score clear, and user prompted to enter username | clicked play again | Slots empty, prompted to enter username, score clears | Pass |

 - - -

## BUGS

### Known Bugs

| No | Bug | How I solved the issue |
| :--- | :--- | :--- |
| 1 | "GET /favicon.ico HTTP/1.1" 404 - error |   |



### Solved Bugs

| No | Bug | |
| :--- | :--- | :--- |