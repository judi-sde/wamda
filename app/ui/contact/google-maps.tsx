// "use client"

// import { useEffect, useState } from 'react';

// import {
//   APIProvider,
//   Map,
//   useMapsLibrary,
//   useMap
// } from '@vis.gl/react-google-maps';

// const API_KEY = (process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY as string);

// export default function GoogleMaps() {
//   return (
//     <APIProvider apiKey={API_KEY}>
//       <Map
//         defaultCenter={{ lat: 43.65, lng: -79.38 }}
//         defaultZoom={9}
//         gestureHandling={'greedy'}
//         fullscreenControl={false}>
//         <Directions />
//       </Map>
//     </APIProvider>
//   );
// }

// function Directions() {
//   const map = useMap();
//   const routesLibrary = useMapsLibrary('routes');
//   const [directionsService, setDirectionsService] =
//     useState<google.maps.DirectionsService>();
//   const [directionsRenderer, setDirectionsRenderer] =
//     useState<google.maps.DirectionsRenderer>();
//   const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
//   const [routeIndex, setRouteIndex] = useState(0);
//   const selected = routes[routeIndex];
//   const leg = selected?.legs[0];

//   // Initialize directions service and renderer
//   useEffect(() => {
//     if (!routesLibrary || !map) return;
//     setDirectionsService(new routesLibrary.DirectionsService());
//     setDirectionsRenderer(
//       new routesLibrary.DirectionsRenderer({
//         draggable: true, // Only necessary for draggable markers
//         map
//       })
//     );
//   }, [routesLibrary, map]);

//   // Add the following useEffect to make markers draggable
//   useEffect(() => {
//     if (!directionsRenderer) return;

//     // Add the listener to update routes when directions change
//     const listener = directionsRenderer.addListener(
//       'directions_changed',
//       () => {
//         const result = directionsRenderer.getDirections();
//         if (result) {
//           setRoutes(result.routes);
//         }
//       }
//     );

//     return () => google.maps.event.removeListener(listener);
//   }, [directionsRenderer]);

//   // Use directions service
//   useEffect(() => {
//     if (!directionsService || !directionsRenderer) return;

//     directionsService
//       .route({
//         origin: '100 Front St, Toronto ON',
//         destination: '500 College St, Toronto ON',
//         travelMode: google.maps.TravelMode.DRIVING,
//         provideRouteAlternatives: true
//       })
//       .then(response => {
//         directionsRenderer.setDirections(response);
//         setRoutes(response.routes);
//       });

//     return () => directionsRenderer.setMap(null);
//   }, [directionsService, directionsRenderer]);

//   // Update direction route
//   useEffect(() => {
//     if (!directionsRenderer) return;
//     directionsRenderer.setRouteIndex(routeIndex);
//   }, [routeIndex, directionsRenderer]);

//   if (!leg) return null;

//   return (
//     <div className="directions">
//       <h2>{selected.summary}</h2>
//       <p>
//         {leg.start_address.split(',')[0]} to {leg.end_address.split(',')[0]}
//       </p>
//       <p>Distance: {leg.distance?.text}</p>
//       <p>Duration: {leg.duration?.text}</p>

//       <h2>Other Routes</h2>
//       <ul>
//         {routes.map((route, index) => (
//           <li key={route.summary}>
//             <button onClick={() => setRouteIndex(index)}>
//               {route.summary}
//             </button>
//           </li>
//         ))}
//       </ul>
//     </div>
//   );
// }

// // function ControlPanel() {
// //   return (
// //     <div className="control-panel">
// //       <h3>Directions</h3>
// //       <p>
// //         Loading the routes library to render directions on the map using
// //         DirectionsService and DirectionsRenderer.
// //       </p>

// //       <div className="links">
// //         <a
// //           href="https://codesandbox.io/s/github/visgl/react-google-maps/tree/main/examples/directions"
// //           target="_new">
// //           Try on CodeSandbox ↗
// //         </a>

// //         <a
// //           href="https://github.com/visgl/react-google-maps/tree/main/examples/directions"
// //           target="_new">
// //           View Code ↗
// //         </a>
// //       </div>
// //     </div>
// //   );
// // }