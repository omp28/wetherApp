// constant variable declaration 

// weather1

const title1_const = document.getElementById('title1');
const description_const = document.getElementById('description1');
const content_const = document.getElementById('content1');
const url1_const = document.getElementById('url1');
const image1_const = document.getElementById('image1');
const publishedAt1_const = document.getElementById('publishedAt1');

//weather 2

const title2_const = document.getElementById('title2');
const description2_const = document.getElementById('description2');
const content2_const = document.getElementById('content2');
const url2_const = document.getElementById('url2');
const image2_const = document.getElementById('image2');
const publishedAt2_const = document.getElementById('publishedAt2');

//weather 3

const title3_const = document.getElementById('title3');
const description3_const = document.getElementById('description3');
const content3_const = document.getElementById('content3');
const url3_const = document.getElementById('url3');
const image3_const = document.getElementById('image3');
const publishedAt3_const = document.getElementById('publishedAt3');

//weather 4

const title4_const = document.getElementById('title4');
const description4_const = document.getElementById('description4');
const content4_const = document.getElementById('content4');
const url4_const = document.getElementById('url4');
const image4_const = document.getElementById('image4');
const publishedAt4_const = document.getElementById('publishedAt4');
 
//weather 5

const title5_const = document.getElementById('title5');
const description5_const = document.getElementById('description5');
const content5_const = document.getElementById('content5');
const url5_const = document.getElementById('url5');
const image5_const = document.getElementById('image5');
const publishedAt5_const = document.getElementById('publishedAt5');



// for shwing content on reload 

function handleNewsButtonClick_reload() {
  fetch('https://gnews.io/api/v4/search?q=india+today&apikey=API')
    .then(response => response.json())
    .then(data => {

      //1st news

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
    //  image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;

      // 4th news 
      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt;

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
document.addEventListener('DOMContentLoaded', handleNewsButtonClick_reload);


// for weather button 


function handleNewsButtonClick_weather() {
  fetch('https://gnews.io/api/v4/search?q=weather+forecast+india&apikey=API')
    .then(response => response.json())
    .then(data => {

      //1st news

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
    //  image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;
 
      //4th news 

      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt;

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
weather.addEventListener('click', handleNewsButtonClick_weather);


// for stock market button

function handleNewsButtonClick_stock() {
  fetch('https://gnews.io/api/v4/search?q=stock+market&apikey=API')
    .then(response => response.json())
    .then(data => {

      //1st news

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
    //  image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;

      //4th news 

      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt;

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
stock.addEventListener('click', handleNewsButtonClick_stock);


// for tech button 

function handleNewsButtonClick_tech() {
  fetch('https://gnews.io/api/v4/search?q=technical+launch&apikey=API')
    .then(response => response.json())
    .then(data => {

      //1st news

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
     image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;

      // 4th news 

      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt;

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
tech.addEventListener('click', handleNewsButtonClick_tech);

// for global button 

function handleNewsButtonClick_global() {
  fetch('https://gnews.io/api/v4/search?q=global+economy&apikey=API')
    .then(response => response.json())
    .then(data => {

      //1st news

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
    //  image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;

      //4th news 

      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt;

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
global.addEventListener('click', handleNewsButtonClick_global);


// for sports button 

function handleNewsButtonClick_sports() {
  fetch('https://gnews.io/api/v4/search?q=sports&apikey=API')
    .then(response => response.json())
    .then(data => {

      //1st news

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
    //  image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;

      //4th news 

      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt;

    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}
sports.addEventListener('click', handleNewsButtonClick_sports);



// working with searchbox



 

function handleNewsButtonClick_final_user_input() {
  var api = 'https://gnews.io/api/v4/search?q=';
  var search_term = document.getElementById('searchTerm').value;
  var api_key = '&apikey=API'; // 

  var final_user_input = api + encodeURIComponent(search_term) + api_key;

  fetch(final_user_input)
    .then(response => response.json())
    .then(data => {
           //1st news 

     title1_const.textContent = data.articles[0].title;
     description_const.textContent=data.articles[0].description;
     content_const.textContent=data.articles[0].content;
    //  url1_const.textContent=data.articles[0].url;
    //  image1_const.textContent=data.articles[0].image;
     publishedAt1_const.textContent=data.articles[0].publishedAt;

     //2nd news

     title2_const.textContent = data.articles[1].title;
     description2_const.textContent=data.articles[1].description;
     content2_const.textContent=data.articles[1].content;
    //  url2_const.textContent=data.articles[1].url;
    //  image2_const.textContent=data.articles[1].image;
     publishedAt2_const.textContent=data.articles[1].publishedAt;

      //3rd news

      title3_const.textContent = data.articles[2].title;
      description3_const.textContent = data.articles[2].description;
      content3_const.textContent = data.articles[2].content;
      // url3_const.textContent=data.articles[2].url;
      // image3_const.textContent=data.articles[2].image;
      publishedAt3_const.textContent = data.articles[2].publishedAt;

      //4th news 

      title4_const.textContent = data.articles[3].title;
      description4_const.textContent = data.articles[3].description;
      content4_const.textContent = data.articles[3].content;
      // url4_const.textContent=data.articles[3].url;
      // image4_const.textContent=data.articles[3].image;
      publishedAt4_const.textContent = data.articles[3].publishedAt;

      // 5th news 

      title5_const.textContent = data.articles[4].title;
      description5_const.textContent = data.articles[4].description;
      content5_const.textContent = data.articles[4].content;
      // url5_const.textContent=data.articles[4].url;
      // image5_const.textContent=data.articles[4].image;
      publishedAt5_const.textContent = data.articles[4].publishedAt; 
    })
    .catch(error => {
      // Handle any errors that occurred during the request
      console.error('Error:', error);
    });
}



var clickme = document.getElementById('clickme');
clickme.addEventListener('click', handleNewsButtonClick_final_user_input);
