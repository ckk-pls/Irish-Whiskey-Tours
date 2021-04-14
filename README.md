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

* **Map**: I tested all the icons and buttons that link the webpage to the map. I tested each icon in each other to check that 
each amenity came up in each particualr area. I done this as I intergrated each new area as part of the code. I also tested each 
location to make sure it should up when the button was pressed.

* **Email JS**: I tested the email contact form as I was writing the code. I tested in the console and tested many times
by sending contact messages from the webpage to the linked emial address. 


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

![Lighthouse - IWT - mobile](https://user-images.githubusercontent.com/73709934/114748724-188d8280-9d4a-11eb-9557-8d66d12a5d75.JPG)

* Website: 

![Lighthouse IWT - desktop](https://user-images.githubusercontent.com/73709934/114748587-fb58b400-9d49-11eb-9700-40881f29a8ed.JPG))

* Validator Results:

* [CSS](https://jigsaw.w3.org/css-validator/validator?uri=https%3A%2F%2Fckk-pls.github.io%2FStudio-50-2%2F&profile=css3svg&usermedium=all&warning=1&vextwarning=&lang=en) - CSS validator results 

* [HTML](https://validator.w3.org/nu/?doc=https%3A%2F%2Fckk-pls.github.io%2FIrish-Whiskey-Tours%2F) - HTML validator results 

* [JS] - I ran the my JS through JS query and it returned no errors. 

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
* [RoeCo] (https://www.diageo.com/PR1346/aws/media/7657/roe-co-exterior-1-min.jpg)

**Other**

* Code for outlay and website set up: Code Institute videos on CSS Fundamentals, JS Fundamentals, Email JS and Google Maps tutorial. The "whiskey store project"  and my previous MS1 project was used for code too. 

* [**Code for map**](https://developers.google.com/map): - I used the code for the map and the api key from Google and the Code Institute Tutorial videos.  

* [**Code for flashing text**](https://www.w3schools.com/howto/howto_css_glowing_text.asp): I used the code from this website and amended it to create the flashing text. 

* [**Code for contact for and Email JS**](https://www.emailjs.com/docs/): - I used the code from this website for the contact form / email JS for the website. I also used the code institute tutorial for the email JS. 

* [**Code for info window when clicking on pins**](https://developers.google.com/maps/documentation/javascript/infowindows): - I used the code from Google for the creating the info window on the map when the pin is selected. 

* [**Code for removing markers from the map**](https://developers.google.com/maps/documentation/javascript/examples/marker-remove): - I used the code from Google for removing the last marker when the next marker is clicked. 

# Acknowledgements
* My Mentor for continuous helpful feedback.

* Tutor support at Code Institute for their support.
