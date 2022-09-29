export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  region: string;
  subregion: string;
  capital: string[];
  population: number;
  flags: { png: string; svg: string };
  tld: string[];
  cioc: string;
  currencies: Record<string, { name: string; symbol: string }>;
  languages: Record<string, string>;
  borders: string[]
}
