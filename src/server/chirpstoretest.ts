import * as fs from "fs"; 

interface IChirps {
  [key: number]: IChirp;
}

interface IChirp {
  name: string;
  text: string;
  id: number;
}

let chirps: IChirps = {};
let chirpID = 0;

if (fs.existsSync("chirps.json")) {
  chirps = JSON.parse(fs.readFileSync("chirps.json").toString());
}

let getChirps = () => {
  return Object.assign({}, chirps); //create a copy and return it
};

let getChirp = (id: number) => {
  return Object.assign({}, chirps[id]); //create a copy and return it
};

let createChirp = (chirp: IChirp) => {
    chirps[chirpID++] = chirp;
    writeChirps();
};

let updateChirp = (id: number, chirp: IChirp) => {
  chirps[id] = chirp;
  writeChirps();
};

let deleteChirp = (id: number) => {
  delete chirps[id];
  writeChirps();
};

let writeChirps = () => {
  fs.writeFileSync("chirps.json", JSON.stringify(chirps));
};

export default {
  CreateChirp: createChirp,
  DeleteChirp: deleteChirp,
  GetChirps: getChirps,
  GetChirp: getChirp,
  UpdateChirp: updateChirp,
};
