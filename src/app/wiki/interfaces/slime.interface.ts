export interface SearchResponseSlime {
    status: string;
    slimes: Slime[];
}

export interface Slime {
    id:             string;
    name:           string;
    image:          string;
    diet:           string;
    favouriteFood?: string;
    type:           Type;
    slimepedia:     Slimepedia;
    locations:      string[];
    properties?:    string[];
    games:          number[];
    favouriteToy?:  string;
}

export interface Slimepedia {
    slimeology:   string;
    risks:        string;
    plortonomics: string;
}

export enum Type {
    Docile = "docile",
    Harmful = "harmful",
    Hostile = "hostile",
    Special = "special",
}
