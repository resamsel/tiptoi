export interface Product {
  label: string;
  href: string;
  artikelNr: string;
  image: string;
  preis: string;
}

export interface SearchResponse {
  produkte: Product[];
}
