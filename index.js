let map;

async function initMap() {
  const { Map, InfoWindow } = await google.maps.importLibrary("maps");
  const { AdvancedMarkerElement } = await google.maps.importLibrary("marker")

  const infoWindow = new InfoWindow();

  const map = new google.maps.Map(document.getElementById('map'), {
    center: { lat: 38.0336, lng: -78.5080 },
    zoom: 16,
    mapId: 'abcde',
  });

  const greenBin = document.createElement("img");
  greenBin.src =
    "./images/favicon.ico";

  const marker = new google.maps.marker.AdvancedMarkerElement({
    map,
    position: { lat: 38.0336, lng: -78.5080 },
    title: "trashcan1",
    content: greenBin,
  });

  marker.addListener("click", () => {
    console.log("clicked");
    infoWindow.close()
    infoWindow.setContent(marker.title);
    infoWindow.open(marker.map, marker);
  });
}

initMap();