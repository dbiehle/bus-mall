'use strict';

//TODO: get images to load
//TODO: after click, new images should load

var imageParent = document.getElementById('imagesAll');
var currentlyShowing = [];
var previouslyShown = ['rmv'];
var index;
var round = 0;

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
  this.imageId = imageList.indexOf(fileName);
  this.timesShown = 0;
  this.timesClicked = 0;
}

function runSurvey () {
  for (var i = 0; i < 3; i++) {
    generateRandomClonedImage();
    var removed = cloneImageList.splice(index, 1);
    console.log('----runSurvey function----');
    console.log('removed: ' + removed);
    currentlyShowing.push(removed);
    console.log('currentlyShowing: ' + currentlyShowing[i]);
    renderImage(currentlyShowing[i]);
    for (var j = 0; j < objectList.length; j++) {
      if (objectList[j].fileName == currentlyShowing[i]) {
        objectList[j].timesShown++;
        console.log(objectList[j]);
      }
    }
  }
}

//Receive clicks on those displayed images,
//Track those clicks for each image.

//when the page loads, start the round, run survey
//then when there's a click, store the timesClicked, and add 3 new images, add to round, and runSurvey
window.onload = function() {
  round++;
  runSurvey();
};

imageParent.addEventListener('click', function(event){
  var choice = event.target.getAttribute('id');
  for (var i = 0; i < objectList.length; i++) {
    if (objectList[i].fileName == choice) {
      objectList[i].timesClicked++;
      console.log(objectList[i]);
    }
  }
  // move items from previouslyShown back into cloneImageList...
  //TODO this loop doesn't appear to be working.
  //  Error received: couldn't find an image named 'rmv' ?!
  if (previouslyShown.indexOf('rmv') !== -1) {
    cloneImageList.push(previouslyShown);
    previouslyShown = currentlyShowing;
  } else if (previouslyShown.indexOf('rmv') === -1) {
    previouslyShown = currentlyShowing;
  }
  // clear out the currentlyShowing array before running new round
  currentlyShowing = [];
  round++;
  imageParent.removeChild(imageParent.lastChild);
  imageParent.removeChild(imageParent.lastChild);
  imageParent.removeChild(imageParent.lastChild);
  runSurvey();
});

//TODO: remove items from previouslyShown array and add back to end of cloneImageList
//    use push instead of splice?

// console.log(currentlyShowing);
// console.log('^^^ before splice ^^^');
// previouslyShown = currentlyShowing;
// console.log('vvv after splice vvv');
// console.log(cloneImageList);


// function generateRandomImage () {
//   index = Math.floor(Math.random() * imageList.length);
//   return imageList[index];
// }

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
