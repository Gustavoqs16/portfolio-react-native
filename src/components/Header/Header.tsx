import { Image, Text, View, TouchableOpacity } from "react-native";
import styles from "./styles";
import CircleImage from "../CircleImage/CircleImage";
import { useState } from "react";

const Header = () => {
  const [imageClicked, setImageClicked] = useState(false);

  const handleClick = () => {
    setImageClicked(!imageClicked);
  }

  return (
    <View style={styles.container}>
      <View style={styles.boxName}>
        <Text style={styles.textName}>Gustavo Queiróz</Text>
        <Image
          style={styles.icon}
          source={require("../../../assets/icons/icon_desktop.png")}
        ></Image>
      </View>
      <View style={styles.boxName}>
        <TouchableOpacity onPress={handleClick}>
          {!imageClicked ? <Image style={{ width: 24, height: 24 }} source={require("../../../assets/icons/icon_lampada.png")} ></Image> : 
          <Image style={{ width: 24, height: 24 }} source={require("../../../assets/icons/icon_escuro.png")} ></Image>
          }
        </TouchableOpacity>
        <CircleImage imageUrl="https://avatars.githubusercontent.com/u/48497751?s=400&u=e9d2d269cf684688977eeedc5715e9451ffcfdc2&v=4"></CircleImage>
      </View>
    </View>
  );
};

export default Header;
