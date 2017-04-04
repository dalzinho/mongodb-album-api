
use beatles_albums;
db.dropDatabase();


db.beatlesalbums.insert([
{
  title: 'Please Please Me',
  released: 1963
},
{
  title: 'With The Beatles',
  released: 1963
},
{
  title: "A Hard Day's Night",
  released: 1964
},

{
  title: 'Revolver',
  released: 1966
},
{
  title: 'Abbey Road',
  released: 1969
}
  ]);

db.beatlesalbums.find().pretty();
