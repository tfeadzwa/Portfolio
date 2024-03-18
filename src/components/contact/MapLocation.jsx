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
      {/* <Map center={[51.505, -0.09]} zoom={13} height={300}>
        <Marker anchor={[51.505, -0.09]} width={50} />
      </Map> */}

      <Map
        provider={mapTiler}
        dprs={[1, 2]} // add this to support hidpi/retina (2x) maps if your provider supports them
        height={300}
        defaultCenter={[50.879, 4.6997]}
        defaultZoom={13}
      >
        <Marker anchor={[51.505, -0.09]} width={50} />
        <ZoomControl />
      </Map>
    </>
  );
};

export default MapLocation;
