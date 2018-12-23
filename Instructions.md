#For this exercise you will create a web page that embeds a photo carousel based on a Flickr gallery (Flickr API details here: https://www.flickr.com/services/api/flickr.galleries.getPhotos.html).

Create a web page (the embedding page) that embeds the content of a second web page (the embedded page) in an iframe. The embedded page should allow the user to submit the ID of a Flickr gallery.
When the user submits a gallery ID, the embedded page should fetch photos from the identified Flickr gallery and display them in thumbnail form in a photo carousel.

When the user clicks on a thumbnail in the carousel to select it, the embedding page should be updated to display metadata about that photo, including the owner's name, the date it was taken, and the number of times the photo has been viewed.

When the user clicks on a selected thumbnail to deselect it, the corresponding photo metadata should be cleared from the embedding page.

#Hint: If you find yourself making more than one request to the Flickr API, you may be off track.

The project should either consist of a set of standalone web pages and assets that can be loaded directly off of disk, or as a Node application serving the pages and assets. Detailed instructions for loading and interacting with the pages/application should be provided in the project.

Please write your JavaScript code in ES6+ and build the page with React. You are free to use any command line tools such as Create React App that you prefer.

The exercise should generally not take more than 3-4 hours, although you're free to take as much time as you'd like to work on it. If you don't finish within a few hours, that's okay; submit what you've got anyway.

#To submit the exercise:

Push the code to a private GitHub or Bitbucket repository. We'll provide usernames for you to give access. We cannot accept email attachments or file sharing links.
Deploy the application to some public location where we can interact with it (e.g. Heroku or AWS).
Please follow all of the above instructions and send code that you are proud to show us!