// @refresh reset
import { useEffect, useRef } from "react";
import { Map as LeafletMap, Icon, Marker } from "leaflet";
import { FeatureLayer } from "esri-leaflet";
import { vectorBasemapLayer } from "esri-leaflet-vector";
import "leaflet/dist/leaflet.css";

import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

function MapComponent() {
  const mapRef = useRef(null);

  useEffect(() => {
    // debugger;
    const mapRefCurrent = mapRef.current;

    if (mapRefCurrent !== null) {
      // Create a dom node to place the map in, so that cleanup is easier.
      const domNode = document.createElement("div");
      mapRefCurrent.appendChild(domNode);

      // The default icon does not work due to webpack issues
      let DefaultIcon = new Icon({
        iconUrl: icon,
        shadowUrl: iconShadow,
        iconAnchor: [12, 41],
        popupAnchor: [0, -41],
      });
      Marker.prototype.options.icon = DefaultIcon;

      const map = new LeafletMap(domNode);
      map.setView([58.35014, 23.266155], 5);

      // Add a basemap
      vectorBasemapLayer("ArcGIS:HumanGeographyDark", {
        apiKey: "AAPKd3013cb4f7274727bc00e8770e98134aV5rB6xKn8v0ZBle1X9Zf8iEb4qUfpb1oh0z23gTj0ZhU3l7StnV948EQpjBUjm34", // https://developers.arcgis.com
      }).addTo(map);

      // Add a Feature Layer
      // const fl = new FeatureLayer({
      //   url:
      //     "https://sampleserver6.arcgisonline.com/arcgis/rest/services/SampleWorldCities/MapServer/0",
      // }).addTo(map);

      // fl.bindPopup(function (layer) {
      //   return `<p><strong>${
      //     layer.feature.properties.CITY_NAME
      //   }</strong><br /> Population: ${layer.feature.properties.POP.toLocaleString("en")}</p>`;
      // });
    }

    return () => {
      if(mapRefCurrent) {
        mapRefCurrent.innerHTML = '';
      }
    }
  }, [mapRef]);

  return <div className="map" ref={mapRef}></div>;
}

export default MapComponent;