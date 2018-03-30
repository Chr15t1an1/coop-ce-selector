// console.log(stateMap);
var minrequiredHours = 0;
var cart = [];
var userRequirements = [];
var userPost = '';

// Grab Form data and
function swap(json){
  var ret = {};
  for(var key in json){
    ret[json[key]] = key;
  }
  return ret;
}

function processForm(thePost){
// save post Object
userPost = thePost;
reversedStateMap = swap(stateMap);
  // take in post data and grab all of the requirements
  Object.keys(thePost).forEach(function(key) {
    // console.log('a');
 userRequirements.push(requirements[reversedStateMap[thePost[key]]]);
  });
  maxHours = getUserRequiredHours(userRequirements);
  minrequiredHours = maxHours;
  }

function getUserRequiredHours(userRequirements) {
temp_hours_array = [];
  // get User Required Hours
  Object.keys(userRequirements).forEach(function(key) {
temp_hours_array.push(userRequirements[key]['requiredHours']);
  });
  return Math.max(...temp_hours_array);
}


function addStateCE(usrRequirements) {
  Object.keys(usrRequirements).forEach(function(key) {

  if (allCourses[usrRequirements[key]['stateCE']]) {
  // console.log(usrRequirements[key]['stateCE']);
  cart.push(allCourses[usrRequirements[key]['stateCE']]);
  }
  });
  }



function countHoursInCart() {
}

function isEightHourRequired(requirements){
// Object.keys(usersRequirements).forEach(function(key) {
  console.log(requirements);
  // console.log(usersRequirements[key]);
  // console.log(usersRequirements[0]);

  for (var i = 0; i < requirements.length; i++) {

  if(requirements[i].require8Hr){

   return true;
  }
  }
// return false;
}


// Grab Form data and
function addRemainingHours(reqs){
if (isEightHourRequired(reqs)) {
  console.log('add to cart');
}

  // console.log(userRequirements);
  // console.log(minrequiredHours);
  // console.log(cart);

    }






function addToCart(courses) {
        Shopify.queue = []
        for (var c of courses) {
            Shopify.queue.push({
                quantity: 1,
                variantId: c.variantId
            })
        }
        Shopify.moveAlong = function () {
            if (Shopify.queue.length) {
                var request = Shopify.queue.shift();
                Shopify.addItem(request.variantId, request.quantity, Shopify.moveAlong);
            } else {
                document.location.href = '/cart';
            }
        }
        this.setState({isSubmitting: true})
        Shopify.moveAlong();
    }



      // console.log(requirements[reversedStateMap[thePost[key]]]);
          // userRequirements[] = reversedStateMap[thePost[key]];
          // console.log(key, thePost[key]);
      // console.log(requirements[thePost[key]]);
      // console.log(typeof $(thePost).serializeArray());
      // console.log(thePost);
      // console.log(thePost);
    //   thePost.forEach(state, index) => {
    //   console.log(state);
    // });
    // console.log(userRequirements[key]['requiredHours']);
    // console.log(temp_hours_array)
    // console.log(Math.max(...temp_hours_array));
    //  (courses){
    //
    //
    //
    // }
