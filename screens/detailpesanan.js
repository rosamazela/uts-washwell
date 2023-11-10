import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, Center, HStack, Heading, Text, VStack, Image, Divider } from "native-base";

const DetailPesanan = () => {
    return (
        <ImageBackground
        source={require('../assets/bgrating.png')} 
        style={{ flex: 1 }}>
            <Header title={"PESANAN"} withBack="true" />
            <Box p={4} flex={1}>
                <Box alignSelf="center" shadow={3} justifyContent="center" borderColor={"#a3a3a3"} borderWidth={2} borderRadius={10} backgroundColor={"white"} h={16} w={350}>
                    <VStack>
                        <Text paddingRight={2} paddingLeft={2}>Order Processed, Thank You for entrusing "WashWell" as your choice</Text>
                    </VStack>
                </Box>
                <Box mt={5} alignSelf="center" borderColor={"#a3a3a3"} borderWidth={2} borderRadius={10} backgroundColor={"white"} h={550} w={350}>
                    <Center>
                        <Heading paddingTop={4}>CLAUDIA</Heading>
                    </Center>
                    <Text p={3} fontSize={"lg"} bold>Pesanan</Text>
                    <VStack>
                        <Box alignSelf="center" shadow={3} borderColor={"#a3a3a3"} borderWidth={2} borderRadius={10} backgroundColor={"white"} h={210} w={330}>
                            <Text paddingLeft={4} paddingTop={2} fontSize={"sm"} bold>Cuci Kering</Text>
                            <VStack>
                                <HStack paddingTop={2} paddingLeft={4}>
                                    <Image
                                        source={require("../assets/mesincuci.png")}
                                        width={10}
                                        height={12}
                                        alt="mesin cuci"
                                    />
                                    <VStack>
                                        <Text bold paddingLeft={4}> Baju Atasan dan Celana Kain</Text>
                                        <Text paddingLeft={4}> 30x</Text>
                                    </VStack>
                                </HStack>
                                <HStack paddingLeft={4} paddingTop={2}>
                                    <Image
                                        source={require("../assets/mesincuci.png")}
                                        width={10}
                                        height={12}
                                        alt="mesin cuci"
                                    />
                                    <VStack>
                                        <Text bold paddingLeft={4}> Jeans</Text>
                                        <Text paddingLeft={4}> 5x</Text>
                                    </VStack>
                                </HStack>
                                <Divider marginTop={2} w={290}  alignSelf="center" justifyContent="center"/>
                                <VStack>
                                    <HStack paddingTop={1}  justifyContent="space-between">
                                        <Text bold paddingLeft={5}>PENGIRIMAN</Text>
                                        <Text paddingRight={5}>Rp. 12.000</Text>
                                    </HStack>
                                    <HStack paddingTop={1}  justifyContent="space-between">
                                        <Text bold paddingLeft={5}>TOTAL</Text>
                                        <Text paddingRight={5}>Rp. 72.000</Text>
                                    </HStack>
                                </VStack>
                            </VStack>
                        </Box>
                        <Box mt={5} alignSelf="center" shadow={3} borderColor={"#a3a3a3"} borderWidth={2} borderRadius={10} backgroundColor={"white"} h={16} w={330}>
                            <VStack>
                            <Text paddingLeft={4} paddingTop={1} bold fontSize={"lg"}>Metode Pembayaran</Text>
                            <Text paddingLeft={4}>BNI</Text>
                            </VStack>
                        </Box>
                        <Box mt={5} alignSelf="center" shadow={3} borderColor={"#a3a3a3"} borderWidth={2} borderRadius={10} backgroundColor={"white"} h={90} w={330}>
                            <VStack>
                                <HStack paddingRight={4} paddingLeft={4} paddingTop={2} justifyContent="space-between">
                                    <Text>Nomor Pesanan</Text>
                                    <Text>0045</Text>
                                </HStack>
                                <HStack paddingRight={4} paddingLeft={4} justifyContent="space-between">
                                    <Text>Waktu Pemesanan</Text>
                                    <Text>22 Okt 2023 | 09.00</Text>
                                </HStack>
                                <HStack paddingRight={4} paddingLeft={4} justifyContent="space-between">
                                    <Text>Waktu Pemesanan Selesai</Text>
                                    <Text>23 Okt 2023 | 10.00</Text>
                                </HStack>
                            </VStack>
                        </Box>
                    </VStack>
                </Box>
            </Box>
        </ImageBackground>
    );
};
export default DetailPesanan;