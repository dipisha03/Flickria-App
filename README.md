## Flickria

✳️ Created a react app with an embedded photo carousel based on a Flickr gallery. 

### How the app works:

When the user inputs a flickr gallery ID,  the web page uses the Flickr API key to retrieve photos from the identified Flickr gallery and display them in thumbnail form in a photo carousel. I used the fetch method to grab the photos and data from the Flickr API. 

 ![Alt text](https://raw.githubusercontent.com/dipisha03/Flickria-App/master/src/images/flickria.png "flickria")

When the user clicks on a thumbnail in the carousel to select it, the embedded page displays metadata about that photo, including:

    - The owner's name
    - The date it was taken 
    - The # of times the photo has been viewed 

When the user clicks on a selected thumbnail to deselect it, the corresponding photo metadata is cleared from the embedded page. 

**Technologies used:** React.js | Node | Flickr API

**Heroku link:** https://flickria-app.herokuapp.com/ (Best viewed in Chrome)

**To Run from command line use npm start**