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
        // defaultCenter={[-17.8265227, 31.0459521]}
        defaultCenter={[-17.8198998, 30.9753902]}
        defaultZoom={12}
        attribution={false}
      >
        <Marker
          // anchor={[-17.817125, 31.0035711]}
          // anchor={[-17.8265227, 31.0459521]}
          anchor={[-17.8198998, 30.9753902]}
          width={50}
          color={"#4caf51"}
          style={{ top: "0.125rem", left: "1rem" }}
        />
        <ZoomControl
          style={{
            right: 10,
            top: 10,
            zIndex: 100,
          }}
          buttonStyle={{
            width: "38px",
            height: "40px",
            marginTop: 0,
            fontSize: "28px",
          }}
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
