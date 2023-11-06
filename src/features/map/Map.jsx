import {
  useMap,
  MapContainer,
  Marker,
  Popup,
  TileLayer,
  useMapEvent,

} from "react-leaflet";
import { useNavigate } from "react-router-dom";
import { useCities } from "./citiesProvider";
import { useEffect, useState } from "react";
import { useGeoLocation } from "./useGeoLocation";
import { useUrlPosition } from "../../Hooks/useUrlPosition";

const Map = () => {



  const [mapPosition, setMapPosition] = useState([
    38.727881642324164, -9.140900099907554,
  ]);
  const { state } = useCities();
  const [lat, lng] = useUrlPosition();
  const { getPosition } = useGeoLocation();

  useEffect(() => {
    if (lat && lng) setMapPosition([lat, lng]);
  }, [lat, lng]);



  if (state?.error)
  return (
    <p className=" text-2xl text-red-500 bg-gray-800 h-[100vh] flex justify-center items-center">
      {state?.error}
    </p>
  );
  return (
    
      <div className="parent h-[100vh] flex-1  relative ">
        <MapContainer
         
          center={mapPosition}
          zoom={6}
          scrollWheelZoom={true}
          className="h-[100%] "
          
        >
          <TileLayer
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png"
          />
          {state.cities &&
            state.cities?.map(city => (
              <Marker
                key={city?.id}
                position={[city?.position?.lat, city?.position?.lng]}
               
              >
                <Popup>
                  A pretty CSS3 popup. <br /> Easily customizable.
                </Popup>
              </Marker>
            ))}

          <ChangeCenter position={[lat, lng]} />
          <DetectClick getPosition={getPosition} />
        </MapContainer>
      </div>
    
  );
};

function ChangeCenter(prop) {
  const { position } = prop;

  const map = useMap();
  if (position[0] && position[1]) {
    map.setView(position);
  }
  return null;
}

function DetectClick(prop) {
  const { getPosition } = prop;
  const navigate = useNavigate();
  useMapEvent({
    click: (e) => {
      getPosition();
      navigate(`./form?lat=${e.latlng.lat}&lng=${e.latlng.lng}`);
    },
  });
}

export default Map;
