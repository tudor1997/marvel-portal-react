import md5 from "md5";
const time_stamp = Number(new Date());
const apiKeyPrivate = '81d621f91c9c631890885859307596b9d4420dd3';
const apiKeyPublic ="0e2aa57ed44123c1cf41fa3e3fdc500d"
const hash = md5(time_stamp + apiKeyPrivate + apiKeyPublic);


const baseAPI = "https://gateway.marvel.com";


// Characters
export const characterListAPI = `${baseAPI}/v1/public/characters?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`
export const getCharacterAPI = (name) => `${baseAPI}/v1/public/characters?nameStartsWith=${name}&ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;

// Get Character
export const getCharacterDetails = (id) => `${baseAPI}/v1/public/characters/${id}?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;


// Comics
export const comicListAPI = `${baseAPI}/v1/public/comics?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;
export const getComicAPI = (name) => `${baseAPI}/v1/public/comics?titleStartsWith=${name}&ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;

// Get Comic
export const getComicDetails = (id) => `${baseAPI}/v1/public/comics/${id}?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;

// Series
export const seriesListAPI = `${baseAPI}/v1/public/series?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;
export const getSeriesAPI = (name) => `${baseAPI}/v1/public/series?titleStartsWith=${name}&ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;

// Get Series
export const getSeriesDetails = (id) => `${baseAPI}/v1/public/series/${id}?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;