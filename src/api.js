import md5 from "md5";
const time_stamp = Number(new Date());
const apiKeyPrivate = '81d621f91c9c631890885859307596b9d4420dd3';
const apiKeyPublic ="0e2aa57ed44123c1cf41fa3e3fdc500d"
const hash = md5(time_stamp + apiKeyPrivate + apiKeyPublic);


const baseAPI = "http://gateway.marvel.com";


// Characters
export const characterListAPI = `${baseAPI}/v1/public/characters?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`
export const getCharacterAPI = (id) => `${baseAPI}/v1/public/characters/${id}?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;

// Comics
export const comicListAPI = `${baseAPI}/v1/public/comics?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;
export const getComicAPI = (id_comic) => `${baseAPI}/v1/public/comics${id_comic}?ts=${time_stamp}&apikey=${apiKeyPublic}&hash=${hash}`;

