import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();
import ProductsScreen from '../screens/ProductsScreen';
import ProductSelect from '../screens/ProductSelect';

export default function SecondaryNavigation() {
  return (
    <Stack.Navigator>
      <Stack.Screen name="Nos produits" component={ProductsScreen} />
      <Stack.Screen name="Retour" component={ProductSelect} />
    </Stack.Navigator>
  );
};