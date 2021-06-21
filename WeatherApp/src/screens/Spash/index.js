import React, {Component} from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import {View, Image, SafeAreaView, Text} from 'react-native';
import {CommonActions} from '@react-navigation/native';

// import components
import styles from './styles';
import images from '../../common/helper/Images';
import {TextComponent} from '../../components';

class Splash extends Component {
  constructor(props) {
    super(props);
    this.state = {
      value: '',
    };
  }

  componentDidMount() {
    setTimeout(() => {
      this.goToNextView('Home');
    }, 2000);
  }

  goToNextView = (nextView = null) => {
    this.props.navigation.dispatch(
      CommonActions.reset({
        index: 0,
        routes: [{name: nextView}],
      }),
    );
    return;
  };

  render() {
    return (
      <SafeAreaView style={styles.info}>
        <Image
          source={images.img_splash}
          style={styles.styleLogo}
          resizeMode="contain"></Image>
        <Text style={styles.appName}>Weather App</Text>
      </SafeAreaView>
    );
  }
}

//---- Connect to props functions and values -----//
function mapStateToProps(state) {
  return {};
}

function mapDispatchToProps(dispatch) {
  return {};
}

export default connect(mapStateToProps, mapDispatchToProps)(Splash);
