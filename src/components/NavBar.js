import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { TabRouter } from 'react-navigation';
import IndexScreen from '../screens/IndexScreen';
import NewDiaryEntry from './src/screens/NewDiaryEntry';
import History from './src/screens/History';

const NavBar = () => {
    return (
        <Tab.Navigator>
            <Tab.Screen name="Home" component {IndexScreen} />
            <Tab.Screen name="Home" component {NewDiaryEntry} />
            <Tab.Screen name="Home" component {History} />
        </Tab.Navigator>
    );
}

export default NavBar;