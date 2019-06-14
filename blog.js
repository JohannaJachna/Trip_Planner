var cardContainer = $('.card-container');
var submit = $('.submit-btn');
var currentPlan=localStorage.getItem("name-card");

submit.on("click", appendSomeoneAwesome);

function appendSomeoneAwesome() {
  var name = $('.name').val();

  cardContainer.append(`
    <article class= "box"><p class="name-card"><class= "checkbox">
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
