# Website for Irish Whiskey Tours

This is a website for people to see whiskey tours in certain places in Ireland - **Irish Whiskey Tours**.

[View website here](https://ckk-pls.github.io/Irish-Whiskey-Tours/)

![website capture](https://user-images.githubusercontent.com/73709934/113573264-b3cb7d00-9611-11eb-9e15-a40b8b43255f.JPG)


# User Experience (UX)
## User Stories 
* As a potential vister to the website, I want to be able to:
    * See the landing page and be able to scroll down the page. 
    * See information on Irish whiskey and see the locations of the tours.
    * See the pictures of the tours and read information about the tours. 
    * Book the tours by linking the Irish Whiskey Tours website to the booking pages of the particular tour.
    * To see the location of the tours on the map.
    * To see the location of other amenities in the area on the map. 
    * Fill out the contact form on the website page. 
    * To be able to see the and open the social media links. 

* As the Irish Whiskey website owner I want user to: 
    * See the landing page and know that they are looking at Irish Whiskey Tours.
    * Get a strong sense of the what the website does.
    * Be aware that there are different locations for the tours. 
    * Press the buttons to land on booking pages for tours.
    * Use the map to see other amenities in the area the tour is taking place. 
    * Fill out the contact form on the website page. 
    * Be able to follow the link to Irish Whiskey Tours' socials.

# Design 
* **Color scheme**: background-color: #000000 (black), white, and rgb(224, 154, 48) (orange type colour)
    The colors are from the landing image and are used throughout for consistency. 

* **Typography**: The font is Archivo Narrow with sans-serif. I used this 
font as it is easy to read. 

* **Imagery**: The imagery used is realated to Whiskey. For the landing page the picture is of whiskey barrels. For the tours, the
picture is of the outside / inside of the building where the tour takes place.


* **Wireframe**: [Irish Whiskey Tours - wireframe.pdf](https://github.com/ckk-pls/Irish-Whiskey-Tours/files/6265276/Irish.Whiskey.Tours.-.wireframe.pdf)

# Features 
## Existing Features 
 * **Header** : The header links to the map. The navbar also collapses accordingly
 to the device the website is being viewed on. 
 * **Jumbotron**: The jumbotron is an image from a whiskey distillery. The jumbtron image reacts accordingly to the device
 it is being viewed on. 
 * **Tour 1**: This section sets out about the tour and lets you book throught button 1. It also lets you press button 2 to see other amenities in the area. 
 * **Tour 2**: This section sets out about the tour and lets you book throught button 1. It also lets you press button 2 to see other amenities in the area. 
 * **Tour 3**: This section sets out about the tour and lets you book throught button 1. It also lets you press button 2 to see other amenities in the area.  
 * **Map**: This allows users of the site to see the location of the tours in Ireland and see amenities close to tours. 
 * **Footer**: The footer section has external links to Irish Whiskey Tours social media pages. 

## Future Features 
I would like to include:
* The ability to buy Irish Whiskey Tours merchandise.
* The ability to book the tour directly from the website.

# Technology Used 
## Languages 
* HTML5
* CSS3
* Bootstrap 
* Javascript 
* APIs

# Frameworks and programs uses
* [**Bootsrap v4.5**](https://getbootstrap.com/): Used for layout and positioning of elements and navigation bar. 
* [**Font Awesome**](https://fontawesome.com/): Used icons for the map section and footer. 
* [**Google Fonts**](https://fonts.google.com/): Used for importing fonts. 
* [**Git, GitPod and GitHub**](https://github.com/): Used for version control and hosting page.
* [**Google Map API**](https://developers.google.com/maps): Used for map section.
* [**Email JS**](https://www.emailjs.com/): Used for email section. 

# Testing 
## Functionality Testing 
* **Header**: All page links bring you to the correct
section when clicked. On mobile devices the navbar collapses. 
All page links work when navbar is collapsed. 

* **Footer**: The footer contains four social media links. Each one links to an external page in a new tab. 
This was also tested on mobile.

* **Buttons**: The buttons bring you to the map when clicked and also to the website tour when clicked. This was tested on desktop and mobile devices. Error messages also 
appear when the "sign up" form is not completed correctly. 

## Testing User Stories 
 **Website user**
* On the landing page a user sees the name of the webpage and some information on Irish Whiskey.
* The user can then easily scroll down and see extra information.
* They see the certain distillery tours.
* They can read about the each specific tour.
* Then they can click to book the tour or see other amenities in the area.
* They can click on each of the logos to get the amenities in the area. 
* They can see the locations on the map.
* They can use the contact form to contact the Irish Whiskey Tours with any query. 

**Returning Website User**
* A returning website user can use the nav bar to link to information
they might want to see. 
* A returning website user can click on the map, see different amenities and in various locations.  

## Observations

* I had a bug in relation to my contact form not sending emails. After using tutor support, I realised
that I had not set an id for the contact form. After I set an id, the contact form worked correctly and sent 
emails to the registered email js address. 

* In addition to the above bug, I also tested the email js extensively with using the "console log" method to check everything 
worked as it should. 

* I had a bug in relation to the rendering the map so the other amenities in the tour area would show up. After some research, I relaised that 
I was missing a } in respect of some of the JS code. 

* I had a bug in relation to setting the button to hover. After contacting tutor support, I realised that I had set it incorrectly in my css. 
## Further Testing 

 **Lighthouse** : The desktop version of the mobile and website received the following score: 

* Mobile:

![Lighthouse - mobile](https://user-images.githubusercontent.com/73709934/105905304-30424e00-601a-11eb-93a5-5abf2fc38d34.JPG)

* Website: 

![Lighthouse - website](https://user-images.githubusercontent.com/73709934/106394942-66574780-63f7-11eb-9dac-4de796ab1296.JPG)

* Validator Results:

* [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fckk-pls.github.io%2FStudio-50-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) - CSS validator results 

* [HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Fckk-pls.github.io%2FStudio-50-2%2F) - HTML validator results 

* **Other Testing**

* The Website was tested on Google Chrome, Internet Explorer, Microsoft Edge and Safari browsers.
* The website was also viewed on a variety of other devices such as desktop, laptop, iPhone7, iPhone 8 & iPhoneX.
* Friends and family members were provided with the website link and asked to review the site and documentation to point out any bugs and/or user experience issues.

## Deployment 

**Deployment** 

* The site was deployed using GitHub Pages using the following steps.

* Log into GitHub.
* Go to the required repository which can be found [here](https://github.com/ckk-pls/Irish-Whiskey-Tours).
* In the submenu, click the settings tab and scroll down to GitHub Pages.
* Change the source to 'master branch' and, when the page reloads, copy the link (which has now been created) into your browser.

**Clone**

* To clone the site follow the steps below.

* Log into GitHub.
* Go to the required repository which can be found [here](https://github.com/ckk-pls/Irish-Whiskey-Tours).
* Next to the green 'Gitpod' button, click the drop down menu that says 'code'.
* Copy the url provided.
* Open the terminal that you would like to use to clone the site and enter 'git clone' followed by the copied url. When you press enter, the code will be cloned.*

# Credits 

**Images**
* [HeaderImage] (https://www.irishrugbytours.com/wp-content/uploads/2017/06/bushmills-distillery-warehouse.jpg)
* [Dingle] (https://thecurrency.news/articles/32378/casks-equity-and-lots-of-gin-how-dingle-distillery-is-financing-its-expansion/)
* [Jameson Cork](https://media-cdn.tripadvisor.com/media/photo-s/0c/d1/3a/06/old-midleton-distillery.jpg) 
* [RoeCo] (data:image/jpeg;base64,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)

**Other**

* Code for outlay and website set up: Code Institute videos on CSS Fundamentals, JS Fundamentals, Email JS and Google Maps tutorial. The "whiskey store project"  and my previous MS1 project was used for code too. 

* [**Code for map**](https://developers.google.com/map): - I used the code for the map and the api key from Google and the Code Institute Tutorial videos.  

* [**Code for flashing text**](https://www.w3schools.com/howto/howto_css_glowing_text.asp): I used the code from this website and amended it to create the flashing text. 

* [**Code for contact for and Email JS**](https://www.emailjs.com/docs/): - I used the code from this website for the contact form / email JS for the website. I also used the code institute tutorial for the email JS. 


# Acknowledgements
* My Mentor for continuous helpful feedback.

* Tutor support at Code Institute for their support.
