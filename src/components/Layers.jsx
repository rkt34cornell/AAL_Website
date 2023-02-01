import React, { useState } from 'react'
import { 
  useMapEvents, 
  TileLayer, 
  LayersControl,
  LayerGroup,
  GeoJSON, 
  Marker, 
  Popup 
} from 'react-leaflet'
import L from 'leaflet'
import WY from '../constants/Wyoming.json'
import MT from '../constants/Montana.json'
import ND from '../constants/NorthDakota.json'
import SD from '../constants/SouthDakota.json'

const Layers = () => {
  const [borderData, setBorderData] = useState([ND, MT, SD, WY])

  const map = useMapEvents({
    zoomend: () => {
      console.log(map.getZoom())
    },
    moveend: () => {
      console.log(map.getBounds())
    }
  })

  const getMarkerPosition = (state_name) => {
    switch (state_name) {
      case 'Montana':
        return L.latLng(46.8797, -110.3626)
      case 'Wyoming':
        return L.latLng(43.0760, -107.2903)
      case 'North Dakota':
        return L.latLng(47.5515, -101.0020)
      case 'South Dakota':
        return L.latLng(43.9695, -99.9018)
      default: return
    }
  }

  const onMouseEvent = (event, type) => {
    switch (type) {
      case 'over':
        event.target.setStyle({ fillOpacity: 0.5 })
        break
      case 'out':
        event.target.setStyle({ fillOpacity: 0.0 })
        break
      default:
        break
    }
  }

  return (
    <>
      <LayersControl position="topright">
        <LayersControl.BaseLayer checked name="Basic Map">
          <TileLayer
            attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        <LayersControl.BaseLayer name="Topo Map">
          <TileLayer
            attribution='Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
            url="https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png"
          />
        </LayersControl.BaseLayer>
        {borderData.map((data) => {
          const geojson = data.features[0].geometry
          const state_name = data.features[0].properties.display_name.split(',')[0]
          
          return (
            <>
              <LayersControl.Overlay checked name={state_name}>
                <LayerGroup>
                <GeoJSON 
                  key={state_name} 
                  data={geojson} 
                  pathOptions={{ color: 'blue' }}
                  eventHandlers={{
                    mouseover: (event, type) => onMouseEvent(event, 'over'),
                    mouseout: (event, type) => onMouseEvent(event, 'out'),
                  }}
                >
                  <Marker position={getMarkerPosition(state_name)}>
                    <Popup>
                      <p variant='subtitle2'>
                        {state_name}
                      </p>
                      <p variant='body2' style={{ margin: 3 }}>
                        Lat: {JSON.stringify(getMarkerPosition(state_name).lat)}
                      </p>
                      <p variant='body2' style={{ margin: 3 }}>
                        Lng: {JSON.stringify(getMarkerPosition(state_name).lng)}
                      </p>
                    </Popup>
                  </Marker>
                </GeoJSON>
                </LayerGroup>
              </LayersControl.Overlay>
            </>
          )
        })}
      </LayersControl>
    </>
  )
}

export default Layers