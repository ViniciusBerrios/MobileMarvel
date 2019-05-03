import perfil from "./pages/perfil";
import personagem from "./pages/personagem";
import { createBottomTabNavigator, createAppContainer } from "react-navigation";

const perfilNavigator = createBottomTabNavigator(
    {
        personagem,
        perfil
    },
    {
        initialRouteName: "personagem",
        tabBarOptions: {
            showLabel: true,
            showIcon: true,
            inactiveBackgroundColor: "#42D35E",
            activeBackgroundColor: "white",
            style: {
                height:50
            }
        }
    }
);

export default createAppContainer(perfilNavigator);