import { useRef, useState } from "react";
function Tracking() {
  const { isLoaded } = useJsApiLoader({
    googleMapsApiKey: 
    libraries: ["places"],
  });
  return (
    <div>
      <h1>Tracking</h1>
    </div>
  );
}
export default Tracking;
