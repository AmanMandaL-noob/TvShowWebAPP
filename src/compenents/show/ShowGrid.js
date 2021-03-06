import React from 'react';
import ShowCard from './ShowCard';

import { FlexGrid } from '../styled';

import IMAGE_NOT_FOUND from '../../image/not-found.png';
import { useShow } from '../../misc/custom-hook'

const ShowGrid = ({ data }) => {

  const [starredShows, dispacthStarred] = useShow()

  return (
    <FlexGrid>
      {data.map(({ show }) => {
        const isStarred = starredShows.includes(show.id);
        const onStarClick = () =>{
          if(isStarred){
            dispacthStarred({type: 'REMOVE', showId: show.id})
          }
          else{
            dispacthStarred({ type: 'ADD', showId: show.id})
          }

        }

      return ( 
        <ShowCard
        key={show.id}
        id={show.id}
        name={show.name}
        image={show.image ? show.image.medium : IMAGE_NOT_FOUND}
        summary={show.summary}
        onStarClick={onStarClick}
        isStarred={isStarred}
      />
      );
      })}
    </FlexGrid>
  );
};

export default ShowGrid;
