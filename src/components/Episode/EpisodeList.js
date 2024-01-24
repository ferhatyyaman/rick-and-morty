import React, {useEffect, useState} from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { fetchEpisodesAsync } from '../../redux/app/features/episodes/episodesSlice';
import "./EpisodeList.css"
import { Link } from 'react-router-dom';
import Navbar from '../Nav/Navbar';
import Search from '../Search/Search';
import Pagination from '../Pagination/Pagination';


export default function EpisodeList() {
    const dispatch = useDispatch();
    const episodes = useSelector((state) => state.episodes.episodes);
  
    const [page, setPage] = useState(1);
  
    useEffect(() => {
      dispatch(fetchEpisodesAsync(page));
    }, [dispatch, page]);
  
  return (
    <div>
        <Navbar/>
        <Search/>
    <div className="episode-list-container">
      <ul className="episode-list">
        {episodes.map((episode) => (
          <Link to={`/episode/${episode.id}`} key={episode.id} className="episode-link">
          <li className="episode-card">
          <p className="episode-episode">{episode.episode}</p>
            <span className="episode-name">{episode.name}</span>
            <p className="episode-date">{episode.air_date}</p>
          </li>
        </Link>
        ))}
      </ul>
    </div>

        
    <Pagination currentPage={page} totalPages={3} setPage={setPage} />
    </div>
  )
}
