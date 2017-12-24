# DC Tech Women and Non-Binary Websites
Personal and portfolio websites of women and non-binary people in the DC Tech community.

[https://www.alexandraulsh.com/DC-Tech-Women-And-NB-Websites/](https://www.alexandraulsh.com/DC-Tech-Women-And-NB-Websites/)

## About
This is a collection of personal and portfolio websites of women and non-binary people in the Washington, D.C. technology community. It not only serves as a resource and inspiration for people creating their own personal or portfolio websites, but also showcases the collective accomplishments of women (cis and trans) and non-binary people in the Washington, D.C. technology community.

## I want to submit my website
You can submit your personal or portfolio website to the list in two ways:

1. Send an email to [alexandra.ulsh@gmail.com](mailto:alexandra.ulsh@gmail.com) 
2. Fork the repository, add your name and website to the `websites.json` file, then create a pull request.

The [DataTables jQuery plug-in](https://datatables.net/) automatically sorts the `websites.json` file alphabetically. You don't need to add your information in alphabetical order in the `websites.json` file.

## Testing locally

I've set up this project to use the [serve](https://github.com/zeit/serve) Node module for easier local testing. You are welcome to use any local web server though. A local web server is required so that the request for `websites.json` succeeds.

To use serve:

```sh
npm install
npm start
```

## I want to create my own website
Awesome! Check out my [slides on creating and hosting your own website](http://slides.com/alexandraulsh/build-your-own-website-with-cloud9-and-github-pages/) using Cloud9 and GitHub Pages.

Also, come to [Women Who Code DC](http://www.meetup.com/Women-Who-Code-DC/)'s weekly Front End Hack Night meetup. We are happy to help you out with creating your own website and other front end projects.

## Configuration Information
All of the website information is stored in the `websites.json` file. The [DataTables](https://datatables.net/) [jQuery](https://jquery.com/) plug-in adds it to `index.html`.