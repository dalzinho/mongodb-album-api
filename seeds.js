use beatles_albums;

db.beatlesalbums.insert([
{
  title: 'Please Please Me',
  released: 1962
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

db.dropDatabase();
