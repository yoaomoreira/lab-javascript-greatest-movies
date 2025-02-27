// Iteration 1: All directors? - Get the array of all directors.
// _Bonus_: It seems some of the directors had directed multiple movies so they will pop up multiple times in the array of directors.
// How could you "clean" a bit this array and make it unified (without duplicates)?
function getAllDirectors(moviesArray) {
    const AllDirectors = moviesArray.map((eachDirectors) => {
        return eachDirectors.director
    })
    return AllDirectors
}
getAllDirectors(movies)

// Iteration 2: Steven Spielberg. The best? - How many drama movies did STEVEN SPIELBERG direct?
function howManyMovies(moviesArray) {
    const dMovies = moviesArray.filter((eachElement) => {
        return eachElement.director === 'Steven Spielberg' && eachElement.genre.includes('Drama')
    })
    return dMovies.length
}




// Iteration 3: All scores average - Get the average of all scores with 2 decimals
function scoresAverage(moviesArray) {
    if (moviesArray.length === 0) { return 0 }

}

// Iteration 4: Drama movies - Get the average of Drama Movies
function dramaMoviesScore(moviesArray) {

}

// Iteration 5: Ordering by year - Order by year, ascending (in growing order)
function orderByYear(moviesArray) {
    const copyArr = JSON.parse(JSON.stringify(moviesArray))
    const ordList = copyArr.sort((a, b) => {
        //return 1 :move it down, return -1, move it up. so, from a-b=small-big=ascendent
        if (a.year > b.year) return 1
        if (a.year < b.year) return -1
        if (a.title > b.title) return 1
        if (a.title < b.title) return -1
    }
    )

    return ordList

}


// Iteration 6: Alphabetic Order - Order by title and print the first 20 titles
function orderAlphabetically(moviesArray) {
    const copyArry = JSON.parse(JSON.stringify(moviesArray))
    const arryByTile = copyArry.map(function (eachElement) {
        return eachElement.title
    })
    const listMovie = arryByTile.sort()
    return listMovie.slice(0, 20)
}

// BONUS - Iteration 7: Time Format - Turn duration of the movies from hours to minutes
function turnHoursToMinutes(moviesArray) { }

// BONUS - Iteration 8: Best yearly score average - Best yearly score average
function bestYearAvg(moviesArray) { }
