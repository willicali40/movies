let page = 1;

const btnPrevious = document.getElementById('btnPrevious');
const btnNext = document.getElementById('btnNext');

btnPrevious.addEventListener('click', () => {
  if (page > 1) {
    page -= 1;
    fetchData();
    console.log(page);
  }
});

btnNext.addEventListener('click', () => {
  if (page < 1000) {
    page += 1;
    fetchData();
    console.log(page);
  }
});

const API_KEY = "bd92795a62f0bc500027cd3dd29942a3";
const BASE_URL = `https://api.themoviedb.org/3/trending/movie/day?api_key=${API_KEY}&language=en-US&page=${page}`;

const fetchData = async () => {
  try {
    const data = await fetch(BASE_URL);
    console.log(data);
    if (data.status === 200) {
      const dataJson = await data.json();
      console.log(dataJson);

      let containerCard = '';

      dataJson.results.forEach(movie => {
        containerCard += `
          <div class="container_cards-card">
              <img class="container_cards-img" src="https://image.tmdb.org/t/p/w500/${movie.poster_path}" alt="Movie ${movie.title} Poster">
              <h4>${movie.title}</h4>
          </div>
        `;
      });


      document.getElementById('container_cards').innerHTML = containerCard;

    } else {
      console.log("error");
    }
  } catch (error) {
    console.log(error);
  }
};

fetchData();
