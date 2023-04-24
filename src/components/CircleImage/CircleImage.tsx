import { Image, Text, View } from "react-native";
import { Avatar } from "react-native-elements";
import styles from "./styles";
import { ImageStyle } from "expo-image";

interface CircleImageProps {
  imageUrl: string;
  size?: 'small' | 'medium' | 'large';
  containerStyle?: object;
  avatarStyle?: ImageStyle;
}

const CircleImage: React.FC<CircleImageProps> = ({ imageUrl, size = 'small'}) => {
    return (
      <View style={styles.container}>
        <Image resizeMode='cover' style={styles.image} source={require('../../../assets/imagens/Foto_gustavo2.jpg')}></Image>
      </View>
    );
  }


export default CircleImage;