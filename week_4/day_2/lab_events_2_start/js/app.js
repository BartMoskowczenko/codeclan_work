document.addEventListener('DOMContentLoaded', () => {
    console.log("JS Loaded")

    const newItemForm = document.querySelector('#new-item-form')
    newItemForm.addEventListener('submit', handleFormSubmit)
})


const handleFormSubmit = function(event){
    event.preventDefault()
    const movieListItem = createMovieListItem(event.target)
    const movieList = document.querySelector('#movie-list')
    movieList.appendChild(movieListItem)
}


const createMovieListItem = function(formData){
    const movieListItem = document.createElement('li')
    movieListItem.classList.add('movie-list-item')

    const movie = document.createElement('h2')
    movie.textContent = formData.movietitle.value
    movieListItem.appendChild(movie)

    const director = document.createElement('h3')
    director.textContent = formData.director.value
    movieListItem.appendChild(director)

    const releasedate = document.createElement('p')
    releasedate.textContent = formData.releasedate.value
    movieListItem.appendChild(releasedate)

    const genre = document.createElement('h3')
    genre.textContent = formData.genre.value
    movieListItem.appendChild(genre)

    


    return movieListItem
}