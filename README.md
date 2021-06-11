# MongoDB Realm Web SDK Smallest Example

Smallest possible example I could come up with to showcase MongoDB Realm Web SDK.

## How to use

- Create a MongoDB Atlas cluster.
- Load the sample dataset.
- Create a Realm app.
- Enable anonymous authentication.
- Create a rule for read-only access to the `sample_mflix.movies` collection.
- Deploy your Realm App & collect the `APP_ID`.

Update the first line of `data.js` with your actual `APP_ID`.

```
const APP_ID = '<YOUR_APP_ID';
```

Then you can just host these 2 files in any HTTP server:

```sh
python3 -m http.server
```

## Author

Maxime BEUGNET <maxime@mongodb.com>

