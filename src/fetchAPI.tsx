import axios from "axios";
import { ImageInterface } from "./types";

interface ApiResponse {
  total: number;
  total_pages: number;
  results: ImageInterface[];
}

const fetchPhotos = async (
  userRequest: string,
  pageNumber = 1
): Promise<ApiResponse> => {
  const params = {
    query: userRequest,
    page: pageNumber,
    orientation: "landscape",
    per_page: 20,
  };
  const { data } = await axios.get<ApiResponse>(
    "https://api.unsplash.com/search/photos?client_id=A7YRUc57iXs06cE1X3dTKf3BBSG-taztQvX54TDLNgI",
    {
      params,
      headers: {
        "Accept-Version": "v1",
      },
    }
  );

  return data;
};

export default fetchPhotos;
