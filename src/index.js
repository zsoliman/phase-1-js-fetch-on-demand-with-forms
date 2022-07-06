const init = () => {
    const inputForm = document.querySelector('form');
    inputForm.addEventListener('submit', (event) => {
        event.preventDefault();


        // event.target.children[1].value //gets the same info as vv
        const input = document.querySelector('input#searchByID')
        console.log(input.value)

        fetch(`http://localhost:3000/movies/${input.value}`)
            .then(response => response.json())  //if fetch succeeds, take info as response and turn it into a json
            .then(data => { //rename json info as data
                const title = document.querySelector('section#movieDetails h4');
                const summary = document.querySelector('section#movieDetails p');

                title.innerText = data.title;
                summary.innerText = data.summary;
            }).catch(console.log('you probably forgot to run the json server')) //runs only if fetch fails (catches an error)
    })
}

document.addEventListener('DOMContentLoaded', init);