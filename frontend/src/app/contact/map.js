"use client";

import { useEffect, useState } from "react";
import "leaflet/dist/leaflet.css";
import { FaLocationDot } from "react-icons/fa6";
import ReactDOMServer from "react-dom/server";

export default function Map() {
  const [MapComponent, setMapComponent] = useState(null);

  useEffect(() => {
    import("react-leaflet").then((RL) => {
      import("leaflet").then((leaflet) => {
        // Create custom icon with react-icons
        const customIcon = leaflet.divIcon({
          html: ReactDOMServer.renderToString(
            <FaLocationDot style={{ color: "red", fontSize: "28px" }} />
          ),
          className: "", // remove default styles
          iconSize: [28, 28],
          iconAnchor: [14, 28],
        });

        setMapComponent(() => {
          const { MapContainer, TileLayer, Marker, Popup } = RL;
          return () => (
            <div className="flex justify-center items-center my-14">
              <div className=" w-full lg:w-[85%] h-96 sm:h-[500px] rounded-lg overflow-hidden">
                <MapContainer
                  center={[30.803628, 73.436027]}
                  zoom={13}
                  scrollWheelZoom={false}
                  style={{ height: "100%", width: "100%" }}
                >
                  <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                  />
                  <Marker position={[30.803628, 73.436027]} icon={customIcon}>
                    <Popup>Hello from Lahore!</Popup>
                  </Marker>
                </MapContainer>
              </div>
            </div>
          );
        });
      });
    });
  }, []);

  if (!MapComponent) return <p>Loading map...</p>;
  return <MapComponent />;
}
