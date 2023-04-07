interface Mappable {
  location: {
    lat: number;
    lng: number;
  };
  markerContent(): string;
}

export class CustomMap {
  map: google.maps.Map;
  constructor(divId: string) {
    this.map = new google.maps.Map(
      document.getElementById(divId) as HTMLElement,
      {
        zoom: 1,
        center: {
          lat: 0,
          lng: 0,
        },
      }
    );
  }

  addMarker = (mappable: Mappable): void => {
    const marker = new google.maps.Marker({
      map: this.map,
      position: {
        lat: mappable.location.lat,
        lng: mappable.location.lng,
      },
    });
    const infowindow = new google.maps.InfoWindow({
      content: mappable.markerContent(),
    });

    marker.addListener("click", () => {
      infowindow.open({
        anchor: marker,
      });
    });
  };
}
