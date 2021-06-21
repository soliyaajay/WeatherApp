import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  Image,
  Text,
  StyleSheet,
  StatusBar
} from 'react-native';
import MapView, {Marker, PROVIDER_GOOGLE} from 'react-native-maps';
// import components
import styles from './styles';
import images from '../../common/helper/Images';


class Map extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mapDetail: this.props.route.params.item,
      initialPosition: {
        latitude: this.props.route.params.item.coord.lat,
        longitude: this.props.route.params.item.coord.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
      },
      latitude: this.props.route.params.item.coord.lat,
      longitude: this.props.route.params.item.coord.lon,
      latitudeDelta: 0.5,
      longitudeDelta: 0.5,
    };
  }

  async componentDidMount() {
    console.log('item', this.props.route.params.item);
    this.setState({
      initialPosition: {
        latitude: this.props.route.params.item.coord.lat,
        longitude: this.props.route.params.item.coord.lon,
        latitudeDelta: 0.0922,
        longitudeDelta: 0.0922,
      },
    });
  }

  renderBottomView = () => {
    const {mapDetail} = this.state;
    return (
      <View style={styles.bottomView}>
        <View>
          <Text style={styles.headingBoldText}>{mapDetail.name}</Text>
          <View style={{marginTop: '10%'}}>
            <Text style={styles.headingDataText}>
              {mapDetail.weather[0].main}
            </Text>

            <Text style={styles.headingDataText}>
              Humidity: {mapDetail.main.humidity}
            </Text>

            <Text style={styles.headingDataText}>
              Wind Speed: {mapDetail.wind.speed}
            </Text>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.headingDataText}>Max. Temp.: </Text>
              <View>
                <Text style={styles.headingDataText}>
                  {Number(mapDetail.main.temp_max - 273.15).toFixed(0)}˚ C
                </Text>
              </View>
            </View>

            <View style={{flexDirection: 'row', alignItems: 'center'}}>
              <Text style={styles.headingDataText}>Min. Temp.: </Text>
              <View>
                <Text style={styles.headingDataText}>
                  {Number(mapDetail.main.temp_min - 273.15).toFixed(0)}˚ C
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{alignItems: 'center'}}>
          <View>
            <Text style={{fontSize: 30}}>
              {Number(mapDetail.main.temp - 273.15).toFixed(0)}˚ C
            </Text>
          </View>
          <Image
            resizeMode="stretch"
            source={images.cloud}
            style={styles.cloudImage}></Image>
        </View>
      </View>
    );
  };

  backPress = () => {
    this.props.navigation.goBack();
  };

  render() {
    const {initialPosition, mapDetail} = this.state;
    return (
      <SafeAreaView style={styles.info}>
          <StatusBar
        translucent 
        backgroundColor={Color.PRIMARY} 
        
         />
        <MapView
          initialRegion={initialPosition}
          mapRef={ref => (this.mapView = ref)}
          // zoomEnabled={true}
          style={{
            ...StyleSheet.absoluteFillObject,
          }}
          provider={Platform.OS === 'android' ? PROVIDER_GOOGLE : ''}
          rotateEnabled={false}
          zoomEnabled={false}
          scrollEnabled={true}>
          <Marker
            coordinate={{
              latitude: initialPosition.latitude,
              longitude: initialPosition.longitude,
            }}
            onPress={e => {}}
            title={`${mapDetail.name}`}>
            <Image
              source={images.location}
              style={styles.pinImage}
              resizeMode="cover"></Image>
          </Marker>
        </MapView>
        <View style={styles.header}>
          <TouchableOpacity
            onPress={() => this.backPress()}>
            <Image source={images.back} style={styles.headerImg}></Image>
          </TouchableOpacity>
          <Text style={styles.topHearderText}>WeatherApp</Text>
          <View />
        </View>
        {this.renderBottomView()}
      </SafeAreaView>
    );
  }
}

//---- Connect to props functions and values -----//
function mapStateToProps({CityListReducer}) {}

const mapDispatchToProps = dispatch => bindActionCreators({}, dispatch);

export default connect(mapStateToProps, mapDispatchToProps)(Map);
