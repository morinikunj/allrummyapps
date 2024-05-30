import React from 'react';
import './Banner.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import GameCard from '../GameCard/GameCard';

const Banner = () => {
  const bannerImage = 'https://rummybonusapp.com/kr/assets/site/homepage_banner/IMG_20240322_201603_395.webp';

  const games = [
    { id: "1", rank: 'https://rummybonusapp.com/kr/assets/20230731_153804.webp', image: 'https://rummy-patti.com/wp-content/uploads/2023/03/Teen-Patti-Fun.jpg', name: 'Teenpatti Fun', isSafe: true, downloadLink: 'https://teenpattifun.com/?from_gameid=6934093&channelCode=200000' },
    { id: "2", rank: 'https://rummybonusapp.com/kr/assets/20230731_153953.webp', image: 'https://rummybest.live/wp-content/uploads/2023/02/logo-min.png', name: 'Rummy Best', isSafe: true, downloadLink: 'https://rummybest.in/?from_gameid=7846835&channelCode=100000' },
    { id: "3", rank: 'https://rummybonusapp.com/kr/assets/20230731_154129.webp', image: 'https://rummybest.live/wp-content/uploads/2023/02/logo-min.png', name: 'Rummy Yes', isSafe: true, downloadLink: 'http://rummyes.com/?from_gameid=8025090&channelCode=7350720' }
  ];

  return (
    <div>
      <div className="text-center text-white banner" style={{ backgroundImage: `url(${bannerImage})`, backgroundSize: 'cover', padding: '160px' }}>
      </div>
      <div className="container  mt-n5">
        <div className="row d-flex justify-content-evenly align-items-center">
          {games.map(game => (
            <GameCard
              key={game.id}
              rank={game.rank}
              image={game.image}
              name={game.name}
              isSafe={game.isSafe}
              downloadLink={game.downloadLink}
            />
          ))}
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Banner;
