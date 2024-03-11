import React from "react";
import { CatalogData } from "../../types/Catalog";
import "./AnimeList.scss";
import { Link } from "react-router-dom";

interface AnimeListProps {
    anime_data?: CatalogData[][];
}

function AnimeList({ anime_data }: AnimeListProps): JSX.Element {
    console.log(anime_data);
    return (
        <div className="anime-list">
            {anime_data?.map((group, index) => (
                <React.Fragment key={index}>
                    {group.map((value, index) => (
                        <Link
                            to="/"
                            key={index}
                            className="anime-list__element"
                        >
                            <img
                                src={value.title_image_url}
                                alt={value.title_name}
                            />
                            <p>{value.title_name}</p>
                        </Link>
                    ))}
                </React.Fragment>
            ))}
        </div>
    );
}

export default AnimeList;
