let html = `<div>Loading...</div>`

$('#results').html(html);

let restaurantsTemplateString = document.getElementById('restaurants-template').innerHTML;
let renderRestaurants = Handlebars.compile(restaurantsTemplateString);

let url = 'https://thejsguy.com/teaching/2018/api/restaurants.json';

$.getJSON(url).then((restaurants) => {
  console.log(restaurants.data);
  let renderedRestaurants = renderRestaurants({
    restaurants: restaurants.data
  });
  $('#results').html('');
  $('body').append(renderedRestaurants);
}, function() {
  console.error('an error occurred');
  let html = "<p>Oops! Something went wrong!</p>"
  $('#results').html(html);
});
