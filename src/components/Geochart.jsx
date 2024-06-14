import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import 'leaflet/dist/leaflet.css'

function Geochart () {
  const locations = [
    { name: "Nueva York", coordinates: [40.7128, -74.0060] }, 
    { name: "Los Ángeles", coordinates: [34.0522, -118.2437] }, 
    { name: "Chicago", coordinates: [41.8781, -87.6298] }, 
    { name: "Houston", coordinates: [29.7604, -95.3698] }, 
    { name: "Miami", coordinates: [25.7617, -80.1918] }, 
    { name: "Londres", coordinates: [51.5074, -0.1278] } 
  ];

  return (
    <MapContainer center={[40.7128, -74.0060]} zoom={4} style={{ height: "400px" }}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {locations.map((location, index) => (
        <Marker key={index} position={location.coordinates}>
          <Popup>{location.name}</Popup>
        </Marker>
      ))}
    </MapContainer>
  )
}
export default Geochart