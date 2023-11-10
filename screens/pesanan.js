import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Button, Heading, ScrollView } from "native-base";

const Pesanan = ({navigation}) => {
  const DetailPesanan = () => {
    navigation.navigate("DetailPesanan");
};
    return (
      <ImageBackground
      source={require('../assets/bgrating.png')} 
      style={{ flex: 1 }}>
          <Header title={"PESANAN"} />
          <Box p={4} flex={1}>
            <Box flex={2} alignSelf="center" justifyContent="center">
            <Heading>HALAMAN PESANAN</Heading>
            <Button onPress={DetailPesanan}>
              Halaman Detail Pesanan
            </Button>
            </Box>
          </Box>
        </ImageBackground>
    );
};

export default Pesanan;