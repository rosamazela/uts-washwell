import { Header } from "../components";
import { ImageBackground } from 'react-native';
import { Box, HStack, ScrollView, VStack, Text, Image, Button } from "native-base";

const RiwayatPesanan = ({ navigation }) => {
    const Rating = () => {
        navigation.navigate("Rating");
    };
    return (
        <ImageBackground
            source={require('../assets/bgrating.png')} // Ganti dengan path gambar Anda
            style={{ flex: 1 }}>
            <Header title={"RIWAYAT"} />
            <ScrollView flex={1}>
                <Box p={4} flex={1}>
                    <Box alignSelf={"center"} w={350} h={170} backgroundColor={"white"} borderWidth={2} borderColor={"#a3a3a3"}>
                        <VStack>
                            <HStack justifyContent="space-between">
                                <Text pt={2} pl={4}>0045</Text>
                                <Text pt={2} pr={4} color={"red.600"}>Process</Text>
                            </HStack>
                            <HStack paddingTop={5} paddingLeft={4}>
                                <Image
                                    source={require("../assets/mesincuci.png")}
                                    width={"50px"}
                                    height={16}
                                    alt="mesin cuci"
                                />
                                <VStack>
                                    <Text fontSize={"sm"} bold paddingLeft={4}> Cuci Kering</Text>
                                    <Text paddingLeft={4}> 2 Produk</Text>
                                    <HStack paddingTop={1} paddingLeft={5} justifyContent="space-between" w={300}>
                                        <Button backgroundColor={"yellow.200"} h={7} w={20} >
                                            <Text color={"black"} mt={-2}>Detail</Text>
                                        </Button>
                                        <Text paddingRight={8} bold>Rp 72.000</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box mt={10} alignSelf={"center"} w={350} h={170} backgroundColor={"white"} borderWidth={2} borderColor={"#a3a3a3"}>
                        <VStack>
                            <HStack justifyContent="space-between">
                                <Text pt={2} pl={4}>0033</Text>
                                <Text pt={2} pr={4} color={"red.600"}>Selesai</Text>
                            </HStack>
                            <HStack paddingTop={5} paddingLeft={4}>
                                <Image
                                    source={require("../assets/mesincuci.png")}
                                    width={"50px"}
                                    height={16}
                                    alt="mesin cuci"
                                />
                                <VStack>
                                    <Text fontSize={"sm"} bold paddingLeft={4}> Cuci Basah</Text>
                                    <Text paddingLeft={4}> 13 Produk</Text>
                                    <HStack paddingTop={1} paddingLeft={5} justifyContent="space-between" w={300}>
                                        <Button backgroundColor={"yellow.200"} h={7} w={20} >
                                            <Text color={"black"} mt={-2}>Detail</Text>
                                        </Button>
                                        <Text paddingRight={8} bold>Rp 35.000</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <HStack paddingTop={2} paddingLeft={5} justifyContent="space-between" w={335}>
                                <Text fontSize={12}>Rating produk sebelum tanggal 12-09-23</Text>
                                <Button backgroundColor={"yellow.200"} h={7} w={20} onPress={Rating} >
                                    <Text color={"black"} mt={-2}>Nilai</Text>
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box mt={10} alignSelf={"center"} w={350} h={170} backgroundColor={"white"} borderWidth={2} borderColor={"#a3a3a3"}>
                        <VStack>
                            <HStack justifyContent="space-between">
                                <Text pt={2} pl={4}>0022</Text>
                                <Text pt={2} pr={4} color={"red.600"}>Selesai</Text>
                            </HStack>
                            <HStack paddingTop={5} paddingLeft={4}>
                                <Image
                                    source={require("../assets/mesincuci.png")}
                                    width={"50px"}
                                    height={16}
                                    alt="mesin cuci"
                                />
                                <VStack>
                                    <Text fontSize={"sm"} bold paddingLeft={4}> Cuci Express</Text>
                                    <Text paddingLeft={4}> 1 Produk</Text>
                                    <HStack paddingTop={1} paddingLeft={5} justifyContent="space-between" w={300}>
                                        <Button backgroundColor={"yellow.200"} h={7} w={20} >
                                            <Text color={"black"} mt={-2}>Detail</Text>
                                        </Button>
                                        <Text paddingRight={8} bold>Rp 35.000</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <HStack paddingTop={2} paddingLeft={5} justifyContent="space-between" w={335}>
                                <Text fontSize={12}>Rating produk sebelum tanggal 12-09-23</Text>
                                <Button backgroundColor={"yellow.200"} h={7} w={20} onPress={Rating} >
                                    <Text color={"black"} mt={-2}>Nilai</Text>
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                    <Box mt={10} alignSelf={"center"} w={350} h={170} backgroundColor={"white"} borderWidth={2} borderColor={"#a3a3a3"}>
                        <VStack>
                            <HStack justifyContent="space-between">
                                <Text pt={2} pl={4}>0033</Text>
                                <Text pt={2} pr={4} color={"red.600"}>Selesai</Text>
                            </HStack>
                            <HStack paddingTop={5} paddingLeft={4}>
                                <Image
                                    source={require("../assets/mesincuci.png")}
                                    width={"50px"}
                                    height={16}
                                    alt="mesin cuci"
                                />
                                <VStack>
                                    <Text fontSize={"sm"} bold paddingLeft={4}> Cuci VIP</Text>
                                    <Text paddingLeft={4}> 1 Produk</Text>
                                    <HStack paddingTop={1} paddingLeft={5} justifyContent="space-between" w={300}>
                                        <Button backgroundColor={"yellow.200"} h={7} w={20} >
                                            <Text color={"black"} mt={-2}>Detail</Text>
                                        </Button>
                                        <Text paddingRight={8} bold>Rp 35.000</Text>
                                    </HStack>
                                </VStack>
                            </HStack>
                            <HStack paddingTop={2} paddingLeft={5} justifyContent="space-between" w={335}>
                                <Text fontSize={12}>Rating produk sebelum tanggal 12-09-23</Text>
                                <Button backgroundColor={"yellow.200"} h={7} w={20} onPress={Rating}>
                                    <Text color={"black"} mt={-2}>Nilai</Text>
                                </Button>
                            </HStack>
                        </VStack>
                    </Box>
                </Box>
            </ScrollView>
        </ImageBackground>
    );
};

export default RiwayatPesanan;