## ForeCast 


## Netlify <>


This is app allows the user to search a city and return the 8 day forecast. The information on each card corresponds to one day. The informatio located on each card is the day, max temp, min temp, type of weather, picture of weather, humidity and UV index. 

<img src="../src/assets/Search.png" width="700" height="500">


**How To Use App**


To use this app simply navigate over to the search page via the navbar up at the top. Once in the search page type into the search field the name of the city you wish to look up and press the search button.

**Tech Stack**

- React.js, Redux.js, Bootstrap, CSS
- API : Open Weather API

**MVP**

My base goal was to give the user the ability to search a city and return the results in a clean and clear format.

<img src="./public/images/image1.png" width="700" height="500">

<img src="./public/images/cards1.png" width="700" height="500">

<img src="./public/images/table.png" width="700" height="500">



**Code Snippets**

Grab full details from open movie database:
```
    promises = moviesArr.map(async (movie, index) => {
        let imdb_id = movie.imdb_id;
        console.log(imdb_id);
        let response = await fetch(
            `http://private.omdbapi.com/?i=${imdb_id}&apikey=9a14bb73`
        );
        let result = await response.json();
        moviesArr[index] = {
            ...moviesArr[index],
            ...result,
        };
    });

    await Promise.all(promises);
    console.log(moviesArr);

    let filteredResults = moviesArr.filter((movie, index) => {
        return movie.Title;
    });

    populateSearchResultCards(filteredResults);
```


**Screen Shots and GIFS**




**Developer Team**

- Ian Haddock
