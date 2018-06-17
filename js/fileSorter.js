// # Sort By File Extension

// ## File

// * *None*

// ## Instructions

// You have an array of filenames with extensions. Sort the files into arrays based on whether or not they are videos or images.

//javascript
  var files = [
    "pavans_first_birthday.mov",
    "owens_asleep_at_the_computer.jpg",
    "michael_fights_a_polar_bear.mp4",
    "nate_road_rage.avi",
    "ruby_skydiving.jpeg",
    "ken_getting_his_black_belt.png",
    "dan_winning_underground_street_race.mov",
    "its_hard_to_come_up_with_file_names.gif",
    "seriously_this_is_taking_too_long.mpg",
    "i_wonder_how_many_of_these_i_should_have.png",
    "probably_a_few_more.avi",
    "nutmeg_is_clawing_my_sneakers_again.mp4",
    "cat_i_will_destroy_you.gif",
    "i_wish_we_had_a_dog.jpeg",
    "stop_looking_at_me_like_that_nutmeg.mpeg",
    "aww_i_cant_hate_you.png",
    "omg_my_sneakers.avi",
    "cat_you_are_the_worst.mp4"
  ];


// ### Image File Extensions
var imgExtensions = ['jpg', 'gif', 'jpeg', 'png'];
// ### Video File Extensions
var movieExtentions = ['mov', 'avi', 'mpeg', 'mp4', 'mpg'];
var images = [];
var movies = [];
var other;

function checkType(file){
    // Check file against image extensions
    for(let i = 0; i < imgExtensions.length; i++){
        if(file.includes(imgExtensions[i])){
            images.push(file);
            break;
        }
    }
    // Check file against movie extensions
    for(let j = 0; j < movieExtentions.length; j++){
        if(file.includes(movieExtentions[j])){
            movies.push(file);
            break;
        }
    }
}
// Iterate through the files array
files.forEach(element => checkType(element));
images.forEach(img => console.log('Image: ' + img));
movies.forEach(mov => console.log('Movie: ' + mov));

// console.log('Images: ' +  images);
// console.log('Movies: ' +  movies);


for(let i = 0; i < files.length; i++){
    checkType(files[i]);
}