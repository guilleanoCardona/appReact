const apiKey = "zS4q6JOkA2Gemp06VzSDhOquvdh052o2";

export default function getGifs({ keyword = "morty" } = {}) {
  const apiUrl = `https://api.giphy.com/v1/gifs/search?api_key=${apiKey}&q=${keyword}&limit=10&offset=0&rating=g&lang=en&bundle=messaging_non_clips`;
  return fetch(apiUrl)
    .then((res) => res.json())
    .then((response) => {
      const { data } = response;
      const gifs = data.map(
        (image) => image.images.fixed_height_downsampled.url
      );
      return gifs;
    });
}
