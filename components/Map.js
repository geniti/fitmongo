import { Component } from 'react';
import ReactMapGL from 'react-map-gl';

class Map extends Component {
  state = {
    viewport: {
      width: '100vw',
      height: '35vh',
      latitude: 52.092876,
      longitude: 5.104480,
      zoom: 9
    }
  };

  render() {
    return (
      <ReactMapGL
        mapStyle="mapbox://styles/mapbox/streets-v9"
        mapboxApiAccessToken="pk.eyJ1IjoiZ2VuaXRpaSIsImEiOiJja24wbXd3dXcwZTB6Mm9scmloemYzMm45In0.mMWqO6sKCVg3jrkpql3EjA"
        onViewportChange={(viewport) => this.setState({ viewport })}
        {...this.state.viewport}
      />
    );
  }
}

export default Map;