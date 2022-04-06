// Copyright (c) 2022 YA-androidapp(https://github.com/YA-androidapp) All rights reserved.


const geojsonFile = "repos.geojson";
const githubUrl = "https://github.com/YA-androidapp/";
let map = L.map('map');
console.log('map', map)

const addGeoJSONLayer = (geojson) => {
    var geojsonLayer = L.geoJSON(geojson, {
        onEachFeature: onEachFeature
    });

    map.addLayer(geojsonLayer);
};

const addTileLayer = () => {
    L.tileLayer('https://cyberjapandata.gsi.go.jp/xyz/pale/{z}/{x}/{y}.png', {
        attribution: "<a href='https://maps.gsi.go.jp/development/ichiran.html' target='_blank'>地理院タイル</a>"
    }).addTo(map);
};

const getJSON = (jsonUrl) => {
    fetch(jsonUrl, {
        method: "GET"
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            addGeoJSONLayer(data);
        })
};

const initMap = () => {
    addTileLayer();
    getJSON(geojsonFile);

    map.setView([35.613065, 138.942796], 9);
}

const onEachFeature = (feature, layer) => {
    if (feature.properties && feature.properties.name) {
        const shortName = (feature.properties.name).replace('PowerPlatform-', '').replace('PowerApps-', '').replace('PowerAutomate-', '');
        const url = githubUrl + feature.properties.name.replace(' ', '#');
        const link = '<a href="' + url + '" target="_blank">' + url + '</a>';
        layer.bindPopup(link);

        layer.bindTooltip(
            shortName,
            {
                permanent: true,
                direction: 'center',
                className: 'place-label'
            }
        );
    }
};

window.addEventListener('DOMContentLoaded', (event) => {
    initMap();
});
