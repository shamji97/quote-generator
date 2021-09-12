const quote_container_box = document.getElementById('quote_container_id');
const quote_text = document.getElementById('quote_text_id');
const author_text = document.getElementById('author_id');
const twitter_btn = document.getElementById('twitter_button_id');
const new_quote_btn = document.getElementById('new_quote_button_id');
const loader_spinner = document.getElementById('loader_id');

// ==========Loading Finction ===============//
// Show Loading Spinner
function show_loading_spinner() {
    loader_spinner.hidden=false; //Hidden attribute is false means show loader Animation
    quote_container_box.hidden=true; //Quote Box should be Hidden:true while loader is shown 
}
// Hide Loading Spinner
function hide_loading_spinner() {
    quote_container_box.hidden=false; //Quote Box should shown when Loading is completed
    loader_spinner.hidden=true; //Hidden attribute is true to hide loader animation     
}

//=================FOR Fetch By API====================//

let apiQuotes = [];
// =======Show New Quote==========//
function newQuote(){
    //Show loading animation untill quote is not set to show
    show_loading_spinner(); 
    //=====Pick a Random quote from apiQuotes array=======//
    const fetched_data = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(fetched_data);
    //Note : Check quote length to Determine styling
    if (fetched_data.text.length > 30) {
        quote_text.classList.add('long_quote_class');        
    } else {
        quote_text.classList.remove('long_quote_class'); 
    }
    quote_text.textContent=fetched_data.text;

    // Check if Author is null then replace it with 'Unknown'
    if (fetched_data.author) { 
        author_text.textContent="~"+ fetched_data.author;        
    }else{
        author_text.textContent='~Unknown';
    }
    //Hide Loader Beacause quote is set to show
    hide_loading_spinner();
}

//======== Get Quotes From API===========//
async function getQuotes(){
    //Show loading animation untill Quote is not fetched
    show_loading_spinner();
    const apiUrl="https://type.fit/api/quotes";
    try {
      const response = await fetch(apiUrl);  
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
        //Catch Error Here
    }
}
///====Calling Function On Load ========//
getQuotes();
// show_loading_spinner();   //Check for Loader function is running or not

// =======Tweet Quote=============//
//Note : Here We Embed Tweeter intent link with quote and author to post or tweet
function tweetQuote() {
    const tweeterUrl = `https://twitter.com/intent/tweet?text=${quote_text.textContent} - ${author_text.textContent}`;
    window.open(tweeterUrl, '_blank');
}

//=========== Event Listeners====== 
//Note: You Can Simply Call Function by onclick='' in button Element
new_quote_btn.addEventListener('click', newQuote); //When Button clicked it call the newQuote(); function
twitter_btn.addEventListener('click', tweetQuote); //When Button clicked it call the tweetQuote(); function



//===============================================================================================================//
//===============================================================================================================//

//=================FOR Fetch By API====================//

/* let apiQuotes = [];
// =======Show New Quote==========//
function newQuote(params){
    //=====Pick a Random quote from apiQuotes array=======//
    const quote = apiQuotes[Math.floor(Math.random() * apiQuotes.length)];
    console.log(quote);
}

//======== Get Quotes From API===========//
async function getQuotes(){
    const apiUrl="https://type.fit/api/quotes";
    try {
      const response = await fetch(apiUrl);  
      apiQuotes = await response.json();
      newQuote();
    } catch (error) {
        //Catch Error Here
    }
}
///====Calling Function On Load ========//
getQuotes();*/

//=================FOR Fetch By Local js====================//
// =Note : Kindly Look into function name calling, Both are different in local and api

/*function newQuote(params){
    //=====Pick a Random quote from apiQuotes array=======//
    const quote = localQuotes[Math.floor(Math.random() * localQuotes.length)];
    //====Check working properly by Inspect Elemt====//
    console.log(quote);
}
//====Calling Function On Load ========//
newQuote();*/
