import axios from "axios";

const fetch_movies = async () => {
  try {
    const response = await axios.request(
      "https://imdb236.p.rapidapi.com/imdb/tt7631058/cast",
      {
        headers: {
          "x-rapidapi-host": "imdb236.p.rapidapi.com",
          "x-rapidapi-key":
            "f4aee8a392msh17a8134be19c85bp1a9c9bjsnd5c6fd6c465d",
        },
      }
    );
    console.log(response.data);
  } catch (error) {
    console.log(error);
  }
};

fetch_movies();
