import { SearchedImage } from "./SearchedImage";

export class SearchedImages {
  constructor(
    public total?: number,
    public totalHits?: number,public hits?: SearchedImage[]) {

  }
}

