import React, { useMemo } from 'react';
import Skeleton from '@mui/material/Skeleton';
import { MapContainer, TileLayer, GeoJSON } from 'react-leaflet';
// import * as L from 'leaflet';
import { feature } from 'topojson-client';
import { bbox } from 'topojson-client';
import { interpolateViridis } from 'd3-scale-chromatic';

function toKey(inputs) {
  Object.values(inputs).join('-');
}

export default function Map({ isLoading, topo, inputs, countryCode }) {
  const geojson = useMemo(
    () => !isLoading && feature(topo, topo.objects.foo),
    [isLoading, topo]
  );

  const bb = useMemo(() => !isLoading && bbox(topo), [isLoading, topo]);

  // console.log(topo);
  // console.log(geojson);

  const style = (feature) => {
    // areasqkm, areatsqkm, country_id, gaul_code, name, tarpop, totdeng, totpop
    const {
      properties: { totdenm },
    } = feature;
    return {
      fillColor: interpolateViridis((totdenm - 0.0214589) / 0.013216),
      weight: 1,
      opacity: 1,
      color: 'rgba(0, 0, 0, 0.5)',
      fillOpacity: 0.6,
    };
  };

  const onHover = (feature, layer) => {
    const name = feature.properties.name;
    layer.on('mouseover', function (e) {
      e.target.setStyle({ fillOpacity: 0.8, weight: 2 });
      layer.bindTooltip(name, { sticky: true }).openTooltip();
    });
    layer.on('mouseout', function (e) {
      e.target.setStyle({ fillOpacity: 0.6, weight: 1 });
    });
  };

  if (isLoading) {
    return <Skeleton variant="rectangular" width="100%" height={600} />;
  }

  return (
    <div style={{ height: 500, width: '100%' }}>
      <MapContainer
        key={countryCode}
        bounds={[
          [bb[1], bb[0]],
          [bb[3], bb[2]],
        ]}
        // maxBounds={[
        //   [bb[1], bb[0]],
        //   [bb[3], bb[2]],
        // ]}
        scrollWheelZoom={false}
        maxBoundsViscosity={1}
        // doubleClickZoom={true}
        attributionControl={false}
      >
        <TileLayer
          url={`https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}${
            isRetinaDisplay() ? '@2x.png' : '.png'
          }`}
          attribution='&copy; <a href="http://www.openstreetmap.org/copyright">OpenStreetMap</a>, &copy; <a href="https://carto.com/attributions">CARTO</a>'
          subdomains="abcd"
          maxZoom={20}
          minZoom={4}
        />
        <GeoJSON
          key={`${countryCode}-${inputs.POPDEN}-${geojson.features.length}`}
          data={geojson}
          style={style}
          onEachFeature={onHover}
        />
      </MapContainer>
    </div>
  );
}

function isRetinaDisplay() {
  if (window.matchMedia) {
    var mq = window.matchMedia(
      'only screen and (min--moz-device-pixel-ratio: 1.3), only screen and (-o-min-device-pixel-ratio: 2.6/2), only screen and (-webkit-min-device-pixel-ratio: 1.3), only screen  and (min-device-pixel-ratio: 1.3), only screen and (min-resolution: 1.3dppx)'
    );
    return (mq && mq.matches) || window.devicePixelRatio > 1;
  }
}