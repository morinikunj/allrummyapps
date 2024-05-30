import React from 'react';
// import AppCard from './AppCard';

const games = [

        {
          id: 1,
          name: "Rummy Go",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://play-lh.googleusercontent.com/bNTPlPBmKwAavt2v0WB3pCq6Vhhn2WbI5qxf0j06ZyQEB1nZ_mlogawWKXbjJxwvToFP",
          downloadLink: "https://myrummygo.vip/?from_gameid=6832477&channelCode=200000"
        },
        {
          id: 2,
          name: "Rummy Meet",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://rummymeet.io/image/Rummymeetapk.jpg",
          downloadLink: "https://rummymeeting.com/?from_gameid=21140486&channelCode=17288867"
        },
        {
          id: 3,
          name: "Royally Rummy",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://cdn.hashnode.com/res/hashnode/image/upload/v1648115891321/rlDUUy98y.png?w=500&h=500&auto=compress,format&format=webp",
          downloadLink: "https://rummyrb.com/?from_gameid=31339029&channelCode=100000"
        },
        {
          id: 4,
          name: "Rummy Loot",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://bestfantasyapp.in/wp-content/uploads/2022/06/rummy-loot-logo.jpeg",
          downloadLink: "https://rummyloot.in/?from_gameid=7522875&channelCode=100000"
        },
        {
          id: 5,
          name: "Rummy Nabob",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://th.bing.com/th/id/R.8c6f8e811e7bd346d55ab0ed0430649c?rik=PSSgCKlhhua%2bIA&riu=http%3a%2f%2fthepmyojana.com%2fwp-content%2fuploads%2f2022%2f06%2fWhatsApp-Image-2022-06-26-at-2.29.03-PM-min.jpeg&ehk=bKr1BTa8YF3X9M%2btwwsv2JQbW%2b13tM8kuJSh4mTitnc%3d&risl=&pid=ImgRaw&r=0",
          downloadLink: "https://rummynabob.com/?from_gameid=37543056&channelCode=100000"
        },
        {
          id: 6,
          name: "Rummy Glee",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://th.bing.com/th/id/OIP.9qNQ0E39TPStvtMBld-Q9gHaHa?w=640&h=640&rs=1&pid=ImgDetMain",
          downloadLink: "https://rummygleevip.com/?from_gameid=19135590&channelCode=100000"
        },
        {
          id: 7,
          name: "Rummy East",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://allrummyapps.com/Z-LootEarning-img/rummy-east-apk.webp",
          downloadLink: "https://rummy888999.com/?from_gameid=15398173&channelCode=100000"
        },
        {
          id: 8,
          name: "Rummy Perfect",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://appkhazana.com/wp-content/uploads/2022/07/rummy-perfect-logo.jpg",
          downloadLink: "https://rummy58.com/?code=11928488"
        },
        {
          id: 9,
          name: "Teenpatti Winner",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://teenpatimaster.com/wp-content/uploads/2023/09/ca2c04cb-6031-4955-96a1-24349809b816.jpeg",
          downloadLink: "https://winnerteenpatti.com/?from_gameid=7388712&channelCode=7190705"
        },
        {
          id: 10,
          name: "Holy Rummy",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://holyrummy.co.in/img/holy-rummy-logo.webp",
          downloadLink: "https://rummymmm.com/?from_gameid=23429962&channelCode=200000"
        },
        {
          id: 11,
          name: "Rummy Wealth",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://apkmentor.org/wp-content/uploads/2022/10/rummy-wealth-mod-apk.jpg",
          downloadLink: "https://rummywealthc.com/?from_gameid=23277402&channelCode=100000"
        },
        {
          id: 12,
          name: "Rummy Noble",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://www.happyteenpatti.net/uploads/D021.png",
          downloadLink: "https://rummynoble.in/?from_gameid=21890436&channelCode=3633448"
        },
        {
          id: 13,
          name: "Rummy Modern",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://rummy-app.com/image/rummymodern.webp",
          downloadLink: "https://rummymodernvip.in/?from_gameid=35208927&channelCode=100000"
        },
        {
          id: 14,
          name: "Teenpatti Master",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://newteenpattiearningapp.com/wp-content/uploads/2023/02/Teen-Patti-Master-Apk-Download-1.png",
          downloadLink: "https://refer9.com/m/7d3qt8?f=w&p=wa&l=en&tp=m77"
        },
        {
          id: 15,
          name: "Spin 777",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://www.spin777a.in/logo.png",
          downloadLink: "https://www.spin777a.in/?code=W7CS3FYGYBG&t=1714794149"
        },
        {
          id: 16,
          name: "Rummy Grand",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://rummygrand.org/img/rummy-grand-logo.webp",
          downloadLink: "https://rummygrand.net/?from_gameid=10881293&channelCode=100000"
        },
        {
          id: 17,
          name: "Rummy Ola",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://www.coolztricks.com/wp-content/uploads/2022/09/photo_2022-09-26_08-40-27-300x300.jpg",
          downloadLink: "https://rummyolapay.com/?from_gameid=18454682&channelCode=100000"
        },
        {
          id: 18,
          name: "Rummy Golds",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://apksim.com/media/2023/01/_3/800x600/rummy-gold-apk_811ea.jpg",
          downloadLink: "https://rummyah.com/?from_gameid=29100960&channelCode=100000"
        },
        {
          id: 19,
          name: "VIP 3 Patti",
          bonus: "₹51",
          minWithdrawal: "₹200",
          image: "https://teenpattigames.com/wp-content/uploads/VIP-3-Patti-APK-Download.webp",
          downloadLink: "https://myvip3patti.com/?from_gameid=11868457&channelCode=100000"
        }
      ];
      
      const GameList = () => {
        return (
          <div style={styles.gridContainer}>
            {games.map((game) => (
              <div key={game.id} style={styles.gridItem}>
                <div style={styles.gameContainer}>
                  <img src={game.image} alt={game.name} style={styles.image} />
                  <div>
                    <h3>{game.name}</h3>
                    <p>Bonus: {game.bonus}</p>
                    <p>Min. Withdrawal: {game.minWithdrawal}</p>
                  </div>
                </div>
                <a href={game.downloadLink} style={styles.button} className="btn btn-danger">Download</a>
              </div>
            ))}
          </div>
        );
      };
      
     export const styles = {
        gridContainer: {
          display: 'grid',
          gap: '20px',
          padding: '20px',
          gridTemplateColumns: 'repeat(auto-fill, minmax(300px, 1fr))', 
        },
        gridItem: {
          backgroundColor: '#f9f9f9',
          borderRadius: '8px',
          padding: '20px',
          boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
        },
        gameContainer: {
          display: 'flex',
          alignItems: 'center',
          marginBottom: '10px',
        },
        image: {
          width: '50px',
          height: '50px',
          marginRight: '10px',
        },
        button: {
          backgroundColor: 'red',
          color: 'white',
          padding: '10px',
          border: 'none',
          borderRadius: '5px',
          cursor: 'pointer',
        },
      };
      
      export default GameList;