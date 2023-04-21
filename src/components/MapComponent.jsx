import React from "react";
import {
  MapContainer,
  ZoomControl,
  TileLayer,
  Marker,
  LayersControl,
  Popup,
  LayerGroup,
} from "react-leaflet";
// import Layers from './Layers.jsx'
import L from 'leaflet'
import cities from "../constants/cities.json";
import capitals from "../constants/capitals.json";

var redIcon = new L.Icon({
  iconUrl: 'https://raw.githubusercontent.com/pointhi/leaflet-color-markers/master/img/marker-icon-2x-red.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/0.7.7/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});

const MapComponent = () => {
  return (
    <>
      <MapContainer
        center={[48.0902, 10.7129]}
        zoom={5}
        zoomControl={false}
        minZoom={4}
        style={{ height: "100vh", width: "100%" }}
      >
        {/* <Layers /> */}
        <LayersControl position="topleft">
          <LayersControl.BaseLayer checked name="Dark Map">
            <TileLayer
              attribution='Powered by <a href="https://www.esri.com/en-us/home">Esri</a> | Esri Community Maps Contributors, HERE, Garmin, Foursquare, GeoTechnologies, Inc, METI/NASA, USGS'
              url="https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Basic Map">
            <TileLayer
              attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
              url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Capitals">
            <LayerGroup>
              {capitals.map((capital) => (
                <Marker
                  key={capital.properties.id}
                  position={[
                    capital.geometry.coordinates[1],
                    capital.geometry.coordinates[0],
                  ]}
                >
                  <Popup>
                    <p>{capital.properties.capital}</p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay name="Cities" icon={redIcon}>
            <LayerGroup>
              {cities.map((city) => (
                <Marker
                  key={city.properties.id}
                  position={[
                    city.geometry.coordinates[1],
                    city.geometry.coordinates[0],
                  ]}
                  icon={redIcon}
                >
                  <Popup>
                    <p>{city.properties.name}</p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>

        <ZoomControl position="topright" />
      </MapContainer>
    </>
  );
};

export default MapComponent;
