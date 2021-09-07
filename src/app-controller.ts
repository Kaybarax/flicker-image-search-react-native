import axios from "axios";

export async function searchImages(searchTerm: string): Promise<any> {
  const { data } = await axios.get(
    "https://api.flickr.com/services/rest/?method=flickr.photos.search&api_key=11c40ef31e4961acf4f98c8ff4e945d7&format=json&nojsoncallback=1&text=" +
      searchTerm +
      "",
  );
  return data;
}
