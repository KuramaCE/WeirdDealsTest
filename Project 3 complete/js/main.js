// JavaScript Document

// 3.)
// The page should also include a map showing where weird deals is located. Use a thirdparty API to achieve this (Google Maps).

 //create variables for storing references to the header and section 
let header = document.querySelector('header');
let section = document.querySelector('section');

//create variable to store requested URL 
let requestURL = "https://kuramace.github.io/WeirdDealsTest/js/products.json";

//create a new XHR object 
let request = new XMLHttpRequest(); 

//open a new request
request.open('GET', requestURL);

//request to accept JSON

request.responseType = 'json';

//send the request using the send method 

request.send();


//adding an event handler that listens for onload event of the JSON file/object 
request.onload = function() {
  let products = request.response; 
  console.log(products);
  populateHeader(products); 
  deals(products);  
}

// set up populateHeader function to fill in the header function 
function populateHeader(jsonObj) {
  
  // grab the company name from JSON object and then create a new element, adding text and appending to the header
  
  let headerH1 = document.createElement('h1'); 
  headerH1.textContent = jsonObj['storeName'];
  header.appendChild(headerH1);
  
  //grab the store info and add it to the HTML for display 
  
  let headerPara = document.createElement('p');
  headerPara.textContent = 'Store Location: ' + jsonObj['storeLocation'] +' , phoneNumber:  ' + jsonObj['phoneNumber'];
  header.appendChild(headerPara);
}

// define deals function to show deals

function deals(jsonObj) {
  
  //bind deals object to a variables 
  let deals = jsonObj['deals'];
  
  for (let i = 0; i < deals.length; i++) {
    //create the elements 
    let article = document.createElement('article');
    let h2 = document.createElement('h2');
    let img = document.createElement('img');
    let p1 = document.createElement('p');
    let p2 = document.createElement('p');
    let list = document.createElement('ul');
    
    //grab the data associated with image to set the src and alt attribute
    img.setAttribute('src', ' https://kuramace.github.io/WeirdDealsTest/js/products.json' + deals[i].image);
    img.setAttribute('alt', deals[i].image );
    
    h2.textContent = deals[i].name; 
    p1.textContent = 'Price: ' + deals[i].price;
    p2.textContent = 'Description: ' + deals[i].description;
    
    let features = deals[i].features;
    for(let j = 0; j < features.length; j++ ) {
      let listItem = document.createElement('li'); 
      listItem.textContent = features[j];
      list.appendChild(listItem); 
    }
    
    // Append each element to article, then append article to section 
    
    article.appendChild(img); 
    article.appendChild(h2);
    article.appendChild(p1); 
    article.appendChild(p2);
    article.appendChild(list);
    section.appendChild(article); 
     
  }

}

