
const endpoint = 'https://data.princegeorgescountymd.gov/resource/umjn-t2iz.json';

const restaurants = [];

fetch(endpoint)
    .then(blob => blob.json())
    .then(data => restaurants.push(...data))

function findMatches(wordToMatch, restaurants){
    return restaurants.filter(place => {

        const regex = new RegExp(wordToMatch, 'gi');
        return place.category.match(regex) ||  place.name.match(regex)
    });
}

function displayMatches(){
    console.log(this.value);
}

const searchInput = document.querySelector('.search');
const suggestions = document.querySelector('.suggestions');

