const {searchTracks}=require("./actions")

const getArtistIDs= async (){
  try {
        const result = await searchTracks(http, { artist });
        const { artists } = result;

        if (!artists || !artists.items || !artists.items.length) {
          return res.status(404).send({
            message: `Artists ${artist} not found.`
          });
        }

        // save the first search result's trackId to a variable
        console.log(artists.items[0].id);
        artistIDs.push(artists.items[0].id);
        //console.log(artistIDs);
      } catch (err) {
        console.error(err.message);
        return res.status(500).send({ message: "Error when searching tracks" });
      }
}