import { Text, View, Image, ScrollView } from "react-native";
import styles from "./styles";
import Header from "../../components/Header/Header";
import { LinearGradient } from "expo-linear-gradient";
import { Fragment } from "react";

const Home = () => {
  const images = [
    {
      id: 0,
      url: require("../../../assets/icons/logo_html.png"),
    },
    {
      id: 1,
      url: require("../../../assets/icons/icon_css.png"),
    },
    {
      id: 2,
      url: require("../../../assets/icons/icon_js.png"),
    },
    {
      id: 3,
      url: require("../../../assets/icons/icon_ts.png"),
    },
    {
      id: 4,
      url: require("../../../assets/icons/icon_tailwind.png"),
    },
    {
      id: 5,
      url: require("../../../assets/icons/icon_bootstrap.png"),
    },
    {
      id: 6,
      url: require("../../../assets/icons/icon_ionic2.png"),
    },
    {
      id: 7,
      url: require("../../../assets/icons/icon_react.png"),
    },
  ];

  const itemViews = [];
  for (let i = 0; i < images.length; i++) {
    const item = images[i];
    itemViews.push(
      <LinearGradient colors={["#FFFFFF", "#000000"]} key={item.id} style={styles.boxIcones}><Image style={styles.icones} source={item.url}></Image></LinearGradient>
    );
  }

  return (
    <>
      <LinearGradient
        colors={["#FFFFFF", "#000000"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 0.5 }}
      >
        <Header></Header>
        <View style={styles.container}>
          <View style={styles.introduction}>
            <Text style={styles.textCareer}>Desenvolvedor Front-End</Text>
            <Text style={styles.textMessage}>Sempre pensando na melhor experiência para o usuário</Text>
          </View>
          <View style={styles.containerImages}>
            {itemViews}
            {/* <Image source={require('../../../assets/icons/icon_react.png')}></Image>
                <Image source={require('../../../assets/icons/icon_angular.png')}></Image> */}
          </View>
        </View>
      </LinearGradient>
    </>
  );
};

export default Home;
