export const getGifs = async (category) => {
  const url = `https://api.giphy.com/v1/gifs/search?api_key=vgFTZItZXj9MWFJMlVAodCpfpSC7gxdN&q=${category}&limit=5`;
  const response = await fetch(url);
  const { data } = await response.json();

  return data.map(img => ({
    id: img.id,
    title: img.title,
    url: img.images.downsized_medium.url
  }));

};