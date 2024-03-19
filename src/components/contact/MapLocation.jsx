import { Map, Marker, ZoomControl } from "pigeon-maps";

const MapLocation = () => {
  const MAP_ACCESS_TOKEN = import.meta.env.VITE_MAPTILER_ACCESS_TOKEN;
  const MAP_ID = import.meta.env.VITE_MAP_ID;

  function mapTiler(x, y, z, dpr) {
    return `https://api.maptiler.com/maps/${MAP_ID}/256/${z}/${x}/${y}${
      dpr >= 2 ? "@2x" : ""
    }.png?key=${MAP_ACCESS_TOKEN}`;
  }

  return (
    <>
      <Map
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={300}
        // defaultCenter={[-17.817125, 31.0035711]}
        defaultCenter={[-17.8265227, 31.0459521]}
        defaultZoom={13}
      >
        -17.8163904,30.7450297
        <Marker
          // anchor={[-17.817125, 31.0035711]}
          anchor={[-17.8265227, 31.0459521]}
          width={50}
          color={"#4caf51"}
        />
        <ZoomControl
          style={{ right: 10, top: 10, zIndex: 100 }}
          buttonStyle={{}}
        />
      </Map>
    </>
  );
};

export default MapLocation;

/*
Latitude	-17.824858
Longitude	31.053028
*/
