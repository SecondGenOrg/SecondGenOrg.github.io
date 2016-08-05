import { default as React, Component } from "react";
import { default as update } from "react-addons-update";

import { default as canUseDOM } from "can-use-dom";
import { default as _ } from "lodash";

import * as Colors from 'material-ui/styles/colors'

import { GoogleMapLoader, GoogleMap, Marker } from "react-google-maps";
import { triggerEvent } from "react-google-maps/lib/utils";
import mapStyles from '../../../constants/chaptersMapStyles.json'
import chaptersData from '../../../constants/chaptersData.json'

export default class ChaptersMap extends Component {
  constructor(props, context) {
    super(props, context);
    this.handleWindowResize = _.throttle(this.handleWindowResize.bind(this), 500);
    this.state = {
	    markers: chaptersData
	  }
  }

  componentDidMount() {
    if (!canUseDOM) {
      return;
    }
    window.addEventListener(`resize`, this.handleWindowResize);
  }

  componentWillUnmount() {
    if (!canUseDOM) {
      return;
    }
    window.removeEventListener(`resize`, this.handleWindowResize);
  }

  handleWindowResize() {
    console.log(`handleWindowResize`, this._googleMapComponent);
    triggerEvent(this._googleMapComponent, `resize`);
  }

  /*
   * This is called when you click on the map.
   * Go and try click now.
   */

  handleMarkerClick(index, event) {
    let { markers } = this.state;
    alert(markers[index].key);
  }

  render() {
    return (
      <GoogleMapLoader
        containerElement={
          <div
            {...this.props}
          />
        }
        googleMapElement={
          <GoogleMap
            ref={(map) => (this._googleMapComponent = map) && console.log(map.getZoom())}
            defaultZoom={3}
            defaultCenter={{ lat: 40, lng: -29.044922 }}
            defaultOptions={{ 
              backgroundColor: Colors.green500,
              styles: mapStyles,
              mapTypeControl: false,
              streetViewControl: false,
              zoomControl: false,
              maxZoom: 3,
              minZoom: 3,
              scrollwheel: false
            }}
          >
            {this.state.markers.map((marker, index) => {
              return (
                <Marker
                  {...marker}
                  onClick={this.handleMarkerClick.bind(this, index)}
                  defaultOptions={{
                    icon: '/img/misc/map-marker-icon.png',
                    animation: google.maps.Animation.BOUNCE
                  }}
                />
              );
            })}
          </GoogleMap>
        }
      />
    );
  }
}