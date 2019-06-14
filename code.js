// TO DO LIST
var cardContainer = $('.card-container');
var submit = $('.submit-btn');
var currentPlan=localStorage.getItem("name-card");

submit.on("click", appendSomeoneAwesome);

function appendSomeoneAwesome() {
  var name = $('.name').val();

  cardContainer.append(`
    <article class= "box"><p class="name-card"><input type = "checkbox" class= "checkbox">
${name}</p>
</article>
  `);

  var checkbox = $('.checkbox');
  checkbox.on("click", remove)

  $('.name').val("");

  storePlan(currentPlan);
}

function remove(){
  event.target.parentNode.remove();
}

// function storePlan(e) {
//   e.preventDefault();
//   localStorage.setItem('name-card');
// }


// GENERATOR
var generatePlaceName = [
    "Half Dome",
    "El Capitan",
    "Upper Yosemite Falls",
    "Bridal Veil Falls",
    "Mirror Lake",
    "Lower Yosemite Falls trail"
  ]

var generateImages = {
    "Half Dome" : "./pictures/half-dome.jpg",
    "El Capitan" : "./pictures/el-capitan.jpg",
    "Upper Yosemite Falls" : "./pictures/upper-yos-falls.jpg",
    "Bridal Veil Falls" : "./pictures/bridal-veil-falls.jpg",
    "Mirror Lake" : "./pictures/mirror-lake.jpg",
    "Lower Yosemite Falls trail" : "./pictures/lower-yos-falls.jpg"
  }

var generateDescription = {
    "Half Dome" : "Half Dome is a large granite dome at the Eastern end of Yosemite Valley. It is named 'Half Dome' due to it's half-dome shape. Every year around 50,000 people climb Half Dome's cable route, which is a steep and difficult ",
    "El Capitan" : "The granite monolith is about 3,000 feet base to summit along its tallest face, and is a popular objective for rock climbers. In 2017, Alex Honnold became the first person to free solo climb El Capitan. Its giant cliff face makes it one of Yosemite's main attractions.",
    "Upper Yosemite Falls" : "Upper Yosemite Falls trail is a 7.2 mile hike that leads to the top of North America’s tallest waterfall, Yosemite Falls, which rises 2,425 feet above Yosemite Valley. The hike has a difficulty of strenuous and generally takes around 6-8 hours to complete. At the top of Yosemite Falls hike, there is an option to extend your hike east to Yosemite Point where there is a direct view of Half Dome.",
    "Bridal Veil Falls" : "At 620 feet, Bridal Veil Falls is famous for the mist that wafts off it when the breezes blow. This water can sometimes blow up to a quarter of a mile away.",
    "Mirror Lake" : "Wether hiking the trail or swimming in the pond, Mirror Lake is an exciting attraction for anyone. With a view of Half Dome from its base, Mirror Lake trail starts at a 4,000 ft elevation. The lake is the biggest swimming hole at the park.",
    "Lower Yosemite Falls trail" : "Lower Yosemite Falls trail is a 1 mile loop paved trail that winds next to Lower Yosemite Falls, which is the last 320 foot drop of the tallest waterfall in North America, Yosemite Falls. The trail also offers views of Upper Yosemite Falls, and offers a great view of Yosemite Creek."
  }

var button = $('#generator');
button.on("click", buttonGenerate);


function buttonGenerate (){
  var i = Math.floor(Math.random()*generatePlaceName.length);

    var placeNameText = $('.place-name');
        var generatedPlace = generatePlaceName[i];

      placeNameText.text(generatePlaceName[i]);
           var yosemiteImage = $('#yosemite-img');
      yosemiteImage.attr("src", `${generateImages[generatedPlace]}`);
            var descriptionText = $('.description');

      var yosemiteDescription = generateDescription[generatedPlace];

      descriptionText.text(generateDescription[generatedPlace]);

}
    var addTitle = $('.add-btn');
      addTitle.on("click",appendTitle);

function appendTitle() {
     var placeName = $(".place-name").html();
      cardContainer.append(`<article class="box"><p class="name-card"><input type = "checkbox" class= "checkbox">${placeName}</p></article>`);var checkbox = $('.checkbox');
  checkbox.on("click", remove)
  $    ('generatePlaceName[i]').val("");
}
