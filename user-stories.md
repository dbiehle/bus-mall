Part of your assignment today is to write your own user stories. Be sure to consider the multiple roles involved: the marketing research team, the developer, and the focus group participant who will be using the application. Try to write 4-5 user stories for each role.

# BusMall

---

## User Stories

### Marketing Research Team
- As a quantitative researcher, I want to see an app that shows a few images at a time to a focus group participant and asks for preference, so I can deteremine which products to show in our catalogs.
- As a researcher, I want to know whether we any of our products in BusMall resonate with passengers, so I can decide whether we need a new catalog of items.
- As a someone who can only act on verifiable data, I want to know the level of interest each of our current catalog items holds, so I can write up a report for the marketing team showing what works and what doesn't and use data to back up the findings.
- As someone with no programming experience/expertise, I want someone else to build this app that shows me the results in an easy-to-read chart, so I don't have to hunt for the results or go ask that smelly developer to get them for me.

### Developer
- As a developer, I want to create an app for the client that meets all of the needs of the research team, so I could get hired again.
- As a developer, I want my code to display 3 different images at a time to a focus group participant, in a random order for a total of 25 rounds, so the viewer has a simple, quick study to complete.
- As a developer, I want my code to store clicks on images and add up the results to show number of clicks per image, # of times shown, % of time chosen when shown, and % of times chosen overall, so the market research team has usable data.
- As a developer, I want my code to refresh after a click to show 3 new non-duplicated images that weren't shown in the previous round, so I can get preferences that don't skew toward a particular image.

### Focus Group Participant
- As a focus group participant, I want to get paid to tell people what most people would like best, so the world can recognize my brilliance and I can buy a pizza!
- As a person with less-than-perfect vision, I want the display to be easy enough to see, so I don't have to fake my answers.
- As a person who needs to catch a bus, I want the survey to be quick and easy to use so I can catch that bus.
- As a [ADD FOURTH USER GROUP STORY]

#### MVP
- Select three random photos from the image directory and display them side-by-side-by-side in the browser window.
- Receive clicks on those displayed images,
- Track those clicks for each image.
- Track how many times each image is displayed, for statistical purposes.
- Upon receiving a click, three new non-duplicating random images need to be automatically displayed. In other words, the three images that are displayed should contain no duplicates, nor should they duplicate with any images that we displayed immediately before.
- Create a constructor function that creates an object associated with each image, and has (at a minimum)
  - properties for the name of the image (to be used for display purposes),
  - its filepath,
  - the number of times it has been shown, and
  - the number of times it has been clicked. You'll probably find it useful to create a property that contains a text string you can use as an ID in HTML.
- After 25 selections have been made,
  - Turn off the event listeners on the images (to prevent additional voting) and
  - Display a list of the products with votes received with each list item looking like "3 votes for the Banana Slicer".
