import {StyleSheet} from 'react-native';
import {Matrics, Fonts, Color} from '../../common/styles';
export default styles = {
  styleLogo: {
    width: Matrics.ScaleValue(100),
    height: Matrics.ScaleValue(100),
    resizeMode: 'contain',
  },
  info: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: Color.white,
  },
  bottomView: {
    width: Matrics.width,
    height: 200,
    position: 'absolute',
    backgroundColor: Color.backgroundColor,
    bottom: 0,
    padding: 20,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  map: {
    ...StyleSheet.absoluteFillObject,
  },
  overlay: {
    position: 'absolute',
    backgroundColor: 'rgba(255, 255, 255, 1)',
  },
  pinImage: {
    height: 50,
    width: 50,
    tintColor: Color.pinColor,
  },
  headingBoldText: {
    fontSize: 25,
    fontWeight: 'bold',
  },
  headingDataText: {
    fontSize: 18,
  },
  headingRowText: {
    fontSize: 18,
    marginVertical: 10,
  },
  cloudImage: {
    height: 60,
    width: 85,
  },
  header: {
    backgroundColor: Color.PRIMARY,
    alignItems: 'center',
    justifyContent: 'space-between',
    height: 70,
    width: Matrics.width,
    flexDirection: 'row',
    top: 0,
    position: 'absolute',
    paddingHorizontal: 20,
  },
  headerTouch: {
    position: 'absolute',
    left: 15,
    backgroundColor: 'red',
  },
  headerImg: {
    tintColor: Color.WHITE,
    height: 28,
    width: 28,
  },
  topHearderText: {
    fontSize: 18,
    color: Color.WHITE,
    fontWeight: '500',
  },
};
module.exports = styles;
