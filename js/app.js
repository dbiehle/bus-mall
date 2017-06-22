'use strict';

//TODO: add persistence to clicker data

var imageParent = document.getElementById('imagesAll');
var currentlyShowing = [];
var previouslyShown = ['rmv'];
var index;
var maxRounds = 25;
var timesClickedFromAll = [];
var objectImageNamesAll = [];
var timesShownFromAll = [];

var imageList = ['bag.jpg', 'banana.jpg', 'bathroom.jpg', 'boots.jpg', 'breakfast.jpg', 'bubblegum.jpg', 'chair.jpg', 'cthulhu.jpg', 'dog-duck.jpg', 'dragon.jpg', 'pen.jpg', 'pet-sweep.jpg', 'scissors.jpg', 'shark.jpg', 'sweep.png', 'tauntaun.jpg', 'unicorn.jpg', 'usb.gif', 'water-can.jpg', 'wine-glass.jpg'];

var cloneImageList = imageList;

// create 20 elements, 1 for each catalog image
var bag = new ImageObject('bag.jpg', 'R2D2 Luggage');
var banana = new ImageObject('banana.jpg', 'Banana Slicer');
var bathroom = new ImageObject('bathroom.jpg', 'Bathroom Tablet Caddy');
var boots = new ImageObject('boots.jpg','Toeless Rainboots');
var breakfast = new ImageObject('breakfast.jpg','All-In-One Breakfast Maker');
var bubblegum = new ImageObject('bubblegum.jpg', 'Meatball Bubblegum');
var chair = new ImageObject('chair.jpg', 'No-Sit Chair');
var cthulhu = new ImageObject('cthulhu.jpg', 'Cthulhu Figure');
var dogDuck = new ImageObject('dog-duck.jpg', 'Duck Costume for Dogs');
var dragon = new ImageObject('dragon.jpg', 'Dragon Meat');
var pen = new ImageObject('pen.jpg', 'Plastic Cutlery Pen');
var petSweep = new ImageObject('pet-sweep.jpg', 'Pet Sweep');
var scissors = new ImageObject('scissors.jpg', 'Pizza Scissors');
var shark = new ImageObject('shark.jpg', 'Shark Sleeping Bag');
var sweep = new ImageObject('sweep.png', 'Baby Sweep');
var tauntaun = new ImageObject('tauntaun.jpg', 'Tauntaun Sleeping Bag');
var unicorn = new ImageObject('unicorn.jpg', 'Unicorn Meat');
var usb = new ImageObject('usb.gif', 'USB Tentacle');
var waterCan = new ImageObject('water-can.jpg', 'Self Watering Can');
var wineGlass = new ImageObject('wine-glass.jpg', 'Wine Glass');

//add the new ImageObject objects to an array
var objectList = [bag, banana, bathroom, boots, breakfast, bubblegum, chair, cthulhu, dogDuck, dragon, pen, petSweep, scissors, shark, sweep, tauntaun, unicorn, usb, waterCan, wineGlass];

//object constructor for ImageObject
function ImageObject (fileName,imageName) {
  this.fileName = fileName;
  this.imageName = imageName;
  this.imageId = imageList.indexOf(fileName); // NOTE: this property is not used anywhere
  this.timesShown = 0;
  // this.timesClicked = 0;
  this.getClicked = function () {
    this.timesClicked = localStorage.getItem('timesClicked');
    if (this.timesClicked !== null) {
      this.timesClicked = parseInt(this.timesClicked);
    }
  };
  this.createOrUpdateClicked = function (value) {
    value = value.toString();
    localStorage.setItem('timesClicked', value);
    this.timesClicked = localStorage.getItem('timesClicked');
    return this.timesClicked;
  };
  this.incrementClicks = function () {
    this.timesClicked = this.getClicked();
    this.timesClicked++;
    this.createOrUpdateClicked(this.timesClicked);
  };
}
// Add locally stored variable timesClicked to object protoype
// ImageObject.prototype.incrementClicks = function () {
//   var timesClicked = getClicked();
//   timesClicked++;
//   createOrUpdateClicked(timesClicked);
// };

// start the round and store the round into local storage
incrementRound();
runSurvey();


//then when there's a click, store the timesClicked, and add 3 new images, add to round, and runSurvey
imageParent.addEventListener('click', function(event){
  if (getRound() < maxRounds) {
    var choice = event.target.getAttribute('id');
    for (var i = 0; i < objectList.length; i++) {
      if (objectList[i].fileName == choice) {
        // objectList[i].timesClicked++;
        objectList[i].incrementClicks();
      }
    }
    // if not the first time through, move items from previouslyShown back into cloneImageList...
    if (previouslyShown.indexOf('rmv') === -1) {
      Array.prototype.push.apply(cloneImageList, previouslyShown);
    }
    previouslyShown = currentlyShowing;
    // clear out the currentlyShowing array before running new round
    currentlyShowing = [];
    incrementRound();
    // round++;
    // remove images and then re-run
    imageParent.removeChild(imageParent.lastChild);
    imageParent.removeChild(imageParent.lastChild);
    imageParent.removeChild(imageParent.lastChild);
    runSurvey();
  } else {
    // remove images and move on, already. sheesh.
    imageParent.removeChild(imageParent.lastChild);
    imageParent.removeChild(imageParent.lastChild);
    imageParent.removeChild(imageParent.lastChild);
    addSummaryChart();
  }
});

// add items to local storage
// create, retrieve, update, delete functions


// function incrementClicks () {
//   var timesClicked = getClicked();
//   timesClicked++;
//   createOrUpdateClicked(timesClicked);
// }

function createOrUpdateRound (value) {
  value = value.toString();
  localStorage.setItem('round', value);
  var round = localStorage.getItem('round');
  return round;
}

function getRound () {
  var round = localStorage.getItem('round');
  if (round !== null) {
    round = parseInt(round);
  }
  return round;
}

function deleteRound() {
  localStorage.removeItem('round');
  return null;
}

function incrementRound() {
  var round = getRound();
  round++;
  createOrUpdateRound(round);
}


// wrapper function
function runSurvey () {
  for (var i = 0; i < 3; i++) {
    generateRandomClonedImage();
    var removed = cloneImageList.splice(index, 1);
    Array.prototype.push.apply(currentlyShowing, removed);
    renderImage(currentlyShowing[i]);
    for (var j = 0; j < objectList.length; j++) {
      if (objectList[j].fileName == currentlyShowing[i]) {
        objectList[j].timesShown++;
      }
    }
  }
}


function generateRandomClonedImage () {
  index = Math.floor(Math.random() * cloneImageList.length);
  return cloneImageList[index];
}

function renderImage (imageId) {
  var img = document.createElement('img');
  img.setAttribute('src','images/' + imageId);
  img.setAttribute('id', imageId);
  imageParent.append(img);
}


function addSummaryChart () {
  // Add imageName, timesClicked, timesShown to arrays to be referenced in chart
  for (var i = 0; i < objectList.length; i++) {
    objectImageNamesAll.push(objectList[i].imageName);
    timesClickedFromAll.push(objectList[i].timesClicked);
    timesShownFromAll.push(objectList[i].timesShown);
  }

  var canvas = document.getElementById('chart');
  var ctx = canvas.getContext('2d');
  var clickedBarChart = new Chart(ctx, {
    type: 'horizontalBar',
    data: {
      labels: objectImageNamesAll,
      datasets: [{
        label: 'Number of Times Clicked',
        data: timesClickedFromAll,
        backgroundColor: 'rgb(46, 106, 209)',
        borderColor: 'rgb(46, 106, 209)',
        borderWidth: 1
      }, {
        label: 'Number of Times Shown',
        data: timesShownFromAll,
        backgroundColor: 'rgb(132, 46, 209)',
        borderColor: 'rgb(132, 46, 209)',
        borderWidth: 1
      }],
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    }
  });
  console.log(clickedBarChart);
}
