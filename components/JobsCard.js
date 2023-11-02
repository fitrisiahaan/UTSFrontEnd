import React from 'react';
import { View } from 'react-native';
import { Box, Image, Stack, Center, Text, HStack, Badge } from 'native-base';

const JobsCard = ({ job }) => {
    return (
        <View>
            <Box alignSelf="center" width="85%" height="150px" maxW="85%" maxH="150px" borderRadius="md" 
                     mt={5} px={5} py={3} 
                    _text={{
                    fontSize: "md",
                    fontWeight: "medium",
                    color: "warmGray.50",
                    letterSpacing: "lg"
                    }} bg={["#FD3E3E", "#FD3E3E"]}>
                        <Stack direction="row" mb="2.5" mt="4" space={3}>
                            <Center size="70" rounded="sm">
                                <Image size={70} borderRadius={100} source={{uri: "https://wallpaperaccess.com/full/317501.jpg"}} alt="Alternate Text" />
                            </Center>
                            <Box w="200" h="100" maxH="100" rounded="md" mt={-1} >
                                    <Box w="full" >
                                            <Text color={"#FFFFFF"} bold fontSize="xs">Lead Designer</Text>
                                            <Text color={"#FFFFFF"} fontSize="xs">Google Inc, Surabaya, Indonesia </Text>
                                    </Box>
                                    <Box w="full" mt={2}>
                                                <HStack space={1}>
                                                    <Badge bg={'#D9D9D9'} rounded={10} variant={'solid'} alignSelf="center" size="">
                                                    <Text bold bg={'#D9D9D9'} fontSize="2xs">Fulltime</Text>
                                                    </Badge>
                                                    <Badge bg={'#D9D9D9'} rounded={10} variant={'solid'} alignSelf="center" size="">
                                                    <Text bold bg={'#D9D9D9'} fontSize="2xs">Leadership</Text>
                                                    </Badge>
                                                    <Badge bg={'#D9D9D9'} rounded={10} variant={'solid'} alignSelf="center" size="">
                                                    <Text bold bg={'#D9D9D9'} fontSize="2xs">Contract</Text>
                                                    </Badge>
                                                </HStack>
                                    </Box>
                                    <Box w="full" mt={4}>
                                        <Text color={"#FFFFFF"} fontSize="xs">24 Minute Ago </Text>
                                    </Box>
                            </Box>
                        </Stack>
            </Box>
        </View>
    );
};

export default JobsCard;