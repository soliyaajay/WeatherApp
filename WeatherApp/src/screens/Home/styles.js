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
  listView: {
    height: Matrics.ScaleValue(70),
    borderTopWidth: 0.3,
    borderBottomWidth: 0.3,
    width: Matrics.width,
    borderColor: Color.PRIMARY,
    flexDirection: 'row',
    justifyContent: 'space-between',
    padding: Matrics.ScaleValue(15),
    alignItems: 'center',
  },
  heading18Text: {
    fontSize: 18,
    marginBottom: 15,
  },
};
module.exports = styles;
