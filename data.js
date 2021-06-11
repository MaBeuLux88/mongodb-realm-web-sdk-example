const APP_ID = 'community-test-irazb';
const ATLAS_SERVICE = 'mongodb-atlas';
const app = new Realm.App({id: APP_ID});

const login = async () => {
  const credentials = Realm.Credentials.anonymous();
  try {
    const user = await app.logIn(credentials);
    $('#user').empty().append("User ID: " + user.id);
  } catch (err) {
    console.error("Failed to log in", err);
  }
};

const find_movies = async () => {
  let collMovies;
  try {
    const mongodb = app.currentUser.mongoClient(ATLAS_SERVICE);
    collMovies = mongodb.db("sample_mflix").collection("movies");
  } catch (err) {
    $("#user").append("Need to login first.");
    console.error("Need to log in first", err);
    return;
  }

  const movies_titles = await collMovies.find({}, {
    "projection": {
      "_id": 0,
      "title": 1
    },
    "limit": 20
  });
  let movies_div = $("#movies");
  movies_div.empty();
  for (const movie of movies_titles) {
    let p = document.createElement("p");
    p.append(movie.title);
    movies_div.append(p);
  }
};
