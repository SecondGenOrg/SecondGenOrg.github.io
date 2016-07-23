import Colors from 'material-ui/styles/colors';
import ColorManipulator from 'material-ui/utils/colorManipulator';
import Spacing from 'material-ui/styles/spacing';
import zIndex from 'material-ui/styles/zIndex';


// I grabbed these from a different project. Colors need to be changed
export default {
    spacing: Spacing,
    palette: {
        primary1Color: '#ffad0a', // Gold
        primary2Color: '#00af5b', // Green
        primary3Color: '#ee532c', // Red
        accent1Color: '#00af5b', // Green
        accent2Color: '#ee532c', // Red
        accent3Color: Colors.pinkA100,
        textColor: '#f5f0e5',
        alternateTextColor: '#201e1c',
        canvasColor: '#201e1c',
        borderColor: ColorManipulator.fade('#f5f0e5', 0.3),
        disabledColor: ColorManipulator.fade('#f5f0e5', 0.3),
        pickerHeaderColor: 'white',
        zIndex,
    }
};
