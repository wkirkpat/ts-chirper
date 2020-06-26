import * as React from "react";
import { useState, useEffect } from "react";

const Home: React.FC<IHomeProps> = (props) => {
    const [chirps, setChirps] = useState<IChirp[]>([]);

    const getChirps = async () => {
        try {
            let r = await fetch("/api/chirps");
            let chirps = await r.json();
            const chirpData = Object.keys(chirps).map((key) => {
                return {
                    id: key,
                    name: chirps[key].name,
                    text: chirps[key].text,
                };
            });
            chirpData.splice(-1, 1);
            console.log(chirpData);
            setChirps(chirpData);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        getChirps();
    }, []);

    return <div className="container">
        {chirps.map((chirp) => {
            return (
                <div className="card">
                    <div className="card-body">
                        <h5 className="card-title">{chirp.name}</h5>
                        <p className="card-text">{chirp.text}</p>
                    </div>
                </div>
            )
        })}</div>;
};

interface IHomeProps { }

interface IChirp {
    name: string;
    text: string;
}

export default Home;
