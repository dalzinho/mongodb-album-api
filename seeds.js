
use beatles_albums;
db.dropDatabase();


db.beatlesalbums.insert([
{
  title: 'Please Please Me',
  released: 1963,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/c/c0/PleasePleaseMe_audio_cover.jpg'
},
{
  title: 'With The Beatles',
  released: 1963,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/0/0a/Withthebeatlescover.jpg'
},
{
  title: "A Hard Day's Night",
  released: 1964,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/e/e6/HardDayUK.jpg'
},
{
  title: "Beatles For Sale",
  released: 1964,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/4/40/Beatlesforsale.jpg'
},
{
  title: "Help!",
  released: 1965,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/3/3d/Help.jpg'
},
{
  title: "Rubber Soul",
  released: 1965,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/7/74/Rubber_Soul.jpg'
},
{
  title: 'Revolver',
  released: 1966,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/1/16/Revolver.jpg'
},
{
  title: "Sgt. Pepper's Lonely Hearts Club Band",
  released: 1967,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/5/50/Sgt._Pepper%27s_Lonely_Hearts_Club_Band.jpg'
},
{
  title: 'The Beatles',
  released: 1968,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/commons/2/20/TheBeatles68LP.jpg'
},
{
  title: 'Abbey Road',
  released: 1969,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/4/42/Beatles_-_Abbey_Road.jpg'
},
{
  title: 'Let It Be',
  released: 1970,
  sleeveUrl: 'https://upload.wikimedia.org/wikipedia/en/2/25/LetItBe.jpg'
}
  ]);

db.beatlesalbums.find().pretty();
