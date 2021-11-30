/* eslint-disable */

export const displayMap = (locations) => {
  mapboxgl.accessToken =
    'pk.eyJ1IjoiZGFtdHJpeCIsImEiOiJja3Z2Yng4OWowMnhlMm9vZW1pY2tjZ242In0.P96DCGDMT7tZL0fzCBMDDg';

  var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/damtrix/ckvvc8fjo3tkg14l5kihd2qd1',
    scrollZoom: false,
    //   center: [-118.113491, 34.111745],
    //   zoom: 10,
    //   interactive: false,
  });

  const bounds = new mapboxgl.LngLatBounds();

  locations.forEach((loc) => {
    //Create marker
    const el = document.createElement('div');
    el.className = 'marker';

    //Add Marker
    new mapboxgl.Marker({
      element: el,
      anchor: 'bottom',
    })
      .setLngLat(loc.coordinates)
      .addTo(map);

    //Add popup
    new mapboxgl.Popup({
      offset: 30,
    })
      .setLngLat(loc.coordinates)
      .setHTML(`<p>Day ${loc.day} : ${loc.description}</p>`)
      .addTo(map);

    //Extend the map bounds to include the current location
    bounds.extend(loc.coordinates);
  });

  map.fitBounds(bounds, {
    padding: {
      top: 200,
      buttom: 150,
      left: 100,
      right: 100,
    },
  });
};
