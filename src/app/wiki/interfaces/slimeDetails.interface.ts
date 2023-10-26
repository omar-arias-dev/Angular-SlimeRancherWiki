export interface SearchResponseSlimeDetails {
    status: string;
    slime:  SlimeDetails;
}

export interface SlimeDetails {
    id:           string;
    name:         string;
    image:        string;
    diet:         string;
    favouriteToy: string;
    type:         string;
    slimepedia:   SlimepediaDetails;
    locations:    string[];
    games:        number[];
}

export interface SlimepediaDetails {
    slimeology:   string;
    risks:        string;
    plortonomics: string;
}
