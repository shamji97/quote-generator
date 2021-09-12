// 1. When We Fetch by Api

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
//====Calling Function On Load ========//
getQuotes();*/

// 2. Try Different API 
/* //Note it is simple api code to fetch data from site
   //but CORS POLICY occurs on this site so it is handled in 2.1 
//======== Get Quotes From API===========//

async function getQuote(){
    const apiUrl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(apiUrl);  
        data = await response.json();
        console.log('data');
    } catch (error) {
        console.log('Whoops, New Quote',error);
    }
}
//====Calling Function On Load ========//
getQuote(); */

//2.1 CORS Handled
/* // Note: To Handle CORS use a proxy server to Handle 
//======== Get Quotes From API===========//

async function getQuote(){
    const proxyUrl = 'https://cors-anywhere.herokuapp.com/'  //Apply Proxy server
    const apiUrl='http://api.forismatic.com/api/1.0/?method=getQuote&lang=en&format=json';
    try {
        const response = await fetch(proxyUrl + apiUrl);  // Fetch API along with proxy
        data = await response.json();
        console.log(data);
    } catch (error) {
        getQuote();
        console.log('Whoops, New Quote',error);
    }
} 
//====Calling Function On Load ========//
getQuote(); */

// 3. When We Fetch String By localStorage

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
