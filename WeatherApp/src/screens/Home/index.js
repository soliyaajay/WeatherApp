import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {
  View,
  TouchableOpacity,
  SafeAreaView,
  FlatList,
  Text,
  StatusBar
} from 'react-native';
import {getCityListWatcher} from '../../store/action';
import Geolocation from '@react-native-community/geolocation';
import PushNotification from "react-native-push-notification";
// import components
import styles from './styles';
import {Color} from '../../common/styles';

class Home extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cityList: [],
      latitude: 21.1702,
    longitude: 72.8311,
    };
  }

  async componentDidMount() {
    this.InitNotification();
    this.getCityList();
    this.currentLocation();
  }

  getCityList = () => {
    this.props.getCityListWatcher(
      response => {
        this.stopLoading();
        if (response.cod == 200) {
          this.setState({cityList: response.list});
        };
      },
      error => {
        this.stopLoading();
      },
    );
  };

  InitNotification() {
    PushNotification.createChannel(
        {
          channelId: "fcm_notification_channel", // (required)
          channelName: "My channel", // (required)
          channelDescription: "A channel to categorise your notifications", // (optional) default: undefined.
          soundName: "default", // (optional) See `soundName` parameter of `localNotification` function
          importance: 4, // (optional) default: 4. Int value of the Android notification importance
          vibrate: true, // (optional) default: true. Creates the default vibration patten if true.
        },
        (created) => console.log(`createChannel returned '${created}'`) )  
  }

  startLoading() {
    this.setState({isLoading: true});
  }

  stopLoading() {
    this.setState({isLoading: false});
  }

  currentLocation = async () => {
        
    Geolocation.getCurrentPosition(
        //Will give you the current location
        (position) => {
              var lat = parseFloat(position.coords.latitude);
                var long = parseFloat(position.coords.longitude);
                this.getCurrentLocationTemp(lat,long);
                this.setState({latitude:lat, longitude: long})
        },
        (error) => {
          console.log("error",error);
        },
        {
          enableHighAccuracy: false,
          timeout: 20000,
          maximumAge: 1000
        },
      );
  };

  getCurrentLocationTemp = (lat,long) => {
    return fetch(`http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${long}&appid=f9e0fd2e2dc06663bd136c983700a0e9`)
      .then((response) => response.json())
      .then((json) => {
        console.log("json",json);
        PushNotification.localNotificationSchedule({
            title:'Weather App',
            date:new Date(new Date().getTime()+3000),
            message:'Current Temparature: '+`${Number(json.main.temp - 273.15).toFixed(0) + '°c'}`,
            allowWhileIdle:false,
            channelId: "fcm_notification_channel"
          });
      })
      .catch((error) => {
        console.error(error);
      });
  };

  goToMap = item => {
    this.props.navigation.navigate('Map', {item: item});
  };

  renderList = (item, index) => {
    return (
      <TouchableOpacity
        onPress={() => this.goToMap(item)}
        style={styles.listView}>
        <View>
          <Text style={styles.heading18Text}>{item.name}</Text>
          <Text>{item.weather[0].main}</Text>
        </View>
        <View>
          <Text style={{fontSize: 30}}>
            {Number(item.main.temp - 273.15).toFixed(0)}˚ C
          </Text>
        </View>
      </TouchableOpacity>
    );
  };

  render() {
    const {cityList} = this.state;
    return (
        <>
        <SafeAreaView style={{backgroundColor: Color.PRIMARY}} />
      <SafeAreaView style={styles.info}>
          <StatusBar
        translucent 
        backgroundColor={Color.PRIMARY} 
        
         />
        <View
          style={{
            height: 70,
            backgroundColor: Color.PRIMARY,
            width: '100%',
            alignItems: 'center',
            justifyContent: 'center',
          }}>
          <Text style={{color: Color.WHITE, fontSize: 18}}>WeatherApp</Text>
        </View>
        <FlatList
          data={cityList}
          renderItem={({item, index}) => this.renderList(item, index)}
          showsVerticalScrollIndicator={false}
        />
      </SafeAreaView>
      </>
    );
  }
}

//---- Connect to props functions and values -----//
function mapStateToProps({CityListReducer}) {
  const {cityData} = CityListReducer;
  return {cityData};
}

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      getCityListWatcher,
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps)(Home);
