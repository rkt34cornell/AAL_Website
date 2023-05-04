import React from "react";
import {
  MapContainer,
  TileLayer,
  Marker,
  LayersControl,
  Popup,
  LayerGroup,
} from "react-leaflet";
import L from "leaflet";

import kss from "../constants/kss.json";
import rbc from "../constants/rbc.json";
import ssc from "../constants/ssc.json";
import leaf from "../constants/leaf.json";
import ast from "../constants/ast.json";
import aws from "../constants/aws.json";
import atlas from "../constants/atlas.json";
import northbase from "../constants/northbase.json";
import oneweb from "../constants/oneweb.json";
import azure from "../constants/azure.json";
import saxavord from "../constants/saxavord.json";
import ses from "../constants/ses.json";
import esa from "../constants/esa.json";
import china from "../constants/china.json";

import kssLogo from "../assets/stations/kss.png";
import rbcLogo from "../assets/stations/rbc.png";
import sscLogo from "../assets/stations/ssc.png";
import leafLogo from "../assets/stations/leaf.png";
import astLogo from "../assets/stations/ast.png";
import awsLogo from "../assets/stations/aws.png";
import atlasLogo from "../assets/stations/atlas.png";
import northbaseLogo from "../assets/stations/northbase.png";
import onewebLogo from "../assets/stations/oneweb.png";
import azureLogo from "../assets/stations/azure.png";
import saxavordLogo from "../assets/stations/saxavord.png";
import sesLogo from "../assets/stations/ses.png";
import esaLogo from "../assets/stations/esa.png";
import chinaLogo from "../assets/stations/china.png";

const kssIcon = new L.Icon({
  iconUrl: kssLogo,
  iconSize: new L.Point(30, 30),
});

const rbcIcon = new L.Icon({
  iconUrl: rbcLogo,
  iconSize: new L.Point(33, 33),
});

const sscIcon = new L.Icon({
  iconUrl: sscLogo,
  iconSize: new L.Point(29, 29),
});

const leafIcon = new L.Icon({
  iconUrl: leafLogo,
  iconSize: new L.Point(33, 33),
});
const astIcon = new L.Icon({
  iconUrl: astLogo,
  iconSize: new L.Point(32, 32),
});
const awsIcon = new L.Icon({
  iconUrl: awsLogo,
  iconSize: new L.Point(33, 33),
});
const atlasIcon = new L.Icon({
  iconUrl: atlasLogo,
  iconSize: new L.Point(26, 26),
});
const northbaseIcon = new L.Icon({
  iconUrl: northbaseLogo,
  iconSize: new L.Point(33, 33),
});
const onewebIcon = new L.Icon({
  iconUrl: onewebLogo,
  iconSize: new L.Point(26, 26),
});
const azureIcon = new L.Icon({
  iconUrl: azureLogo,
  iconSize: new L.Point(30, 30),
});
const saxavordIcon = new L.Icon({
  iconUrl: saxavordLogo,
  iconSize: new L.Point(28, 28),
});
const sesIcon = new L.Icon({
  iconUrl: sesLogo,
  iconSize: new L.Point(28, 28),
});
const esaIcon = new L.Icon({
  iconUrl: esaLogo,
  iconSize: new L.Point(28, 28),
});
const chinaIcon = new L.Icon({
  iconUrl: chinaLogo,
  iconSize: new L.Point(29, 29),
});



const MapComponent = () => {
  return (
    <>
      <MapContainer
        center={[68.0207453, -7.4074948]}
        zoom={3.5}
        style={{ height: "90vh", width: "100%", zIndex: "20", position: "relative"}}
      >
        <LayersControl position="topright" collapsed={true}>
          <LayersControl.BaseLayer checked name="Dark Mode">
            <TileLayer
              attribution='Powered by <a href="https://www.esri.com/en-us/home">Esri</a>'
              url="https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Dark_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.BaseLayer name="Light Mode">
            <TileLayer
              attribution='Powered by <a href="https://www.esri.com/en-us/home">Esri</a>'
              url="https://services.arcgisonline.com/arcgis/rest/services/Canvas/World_Light_Gray_Base/MapServer/tile/{z}/{y}/{x}"
            />
          </LayersControl.BaseLayer>
          <LayersControl.Overlay checked name="Kongsberg Satellite Services">
            <LayerGroup>
              {kss.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={kssIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="RBC Signals">
            <LayerGroup>
              {rbc.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={rbcIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Swedish Space Corporation">
            <LayerGroup>
              {ssc.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={sscIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Leaf Space">
            <LayerGroup>
              {leaf.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={leafIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay
            checked
            name="Arctic Space Technologies and Viasat Inc."
          >
            <LayerGroup>
              {ast.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={astIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Amazon Web Services">
            <LayerGroup>
              {aws.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={awsIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Atlas Space Operations">
            <LayerGroup>
              {atlas.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={atlasIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Northbase AO">
            <LayerGroup>
              {northbase.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={northbaseIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="OneWeb-Hughes">
            <LayerGroup>
              {oneweb.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={onewebIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Microsoft Azure Space">
            <LayerGroup>
              {azure.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={azureIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="SaxaVord UK">
            <LayerGroup>
              {saxavord.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={saxavordIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="SES">
            <LayerGroup>
              {ses.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={sesIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="European Space Agency">
            <LayerGroup>
              {esa.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={esaIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
          <LayersControl.Overlay checked name="Chinese Ground Station">
            <LayerGroup>
              {china.map((station) => (
                <Marker
                  key={station.properties.id}
                  position={[
                    station.geometry.coordinates[0],
                    station.geometry.coordinates[1],
                  ]}
                  icon={chinaIcon}
                >
                  <Popup>
                    <h1 className="font-bold text-center">
                      {station.properties.organization}
                    </h1>
                    <p className="text-center">
                      {station.properties.name} <br></br>{" "}
                      {station.properties.type} - {station.properties.status}{" "}
                    </p>
                  </Popup>
                </Marker>
              ))}
            </LayerGroup>
          </LayersControl.Overlay>
        </LayersControl>
      </MapContainer>
    </>
  );
};

export default MapComponent;
