export interface Country {
  name: {
    common: string;
    official: string;
    nativeName: Record<string, { official: string; common: string }>;
  };
  region: string;
  capital: string[];
  population: number;
  flags: { png: string; svg: string };
}
