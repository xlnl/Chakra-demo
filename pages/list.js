import { Box, Image, Divider } from "@chakra-ui/core"
import { HStack } from "@chakra-ui/react"

const list = () => {
    const list = {
        usabilityURL: "./icon.png",
        imageAlt1: "diamond icon",
        paralaxURL: "./icon2.png",
        imageAlt2: "three stacked rectangle icon with up and down arrows on top right",
        colorsURL: "./icon3.png",
        imageAlt3: "color palette with water drop in middle"
    }
    return (
        <Box w="900px" p={5} boxShadow="md" backgroundColor="gray.100" rounded="lg">
            <HStack spacing="36px" p={2}>
                <Box>
                    <HStack spacing="6px">
                        <Image src={list.usabilityURL} alt={list.imageAlt1} />
                        <Box>
                            <strong>Usability</strong>
                            <p>Sometimes the simples things are the hardest to find. So we created a new line for everday life.</p>
                        </Box>
                    </HStack>
                </Box>

                <Box>
                    <HStack>
                        <Divider orientation="vertical" borderColor="gray.300" h="150px"/>
                    </HStack>
                </Box>
                
                <Box>
                    <HStack spacing="6px">
                        <Image src={list.paralaxURL} alt={list.imageAlt2} />
                        <Box>
                            <strong>Parralax Effect</strong>
                            <p>Sometimes the simples things are the hardest to find. So we created a new line for everday life.</p>
                        </Box>
                    </HStack>
                </Box>

                <Box>
                    <HStack>
                        <Divider orientation="vertical" borderColor="gray.300" h="150px"/>
                    </HStack>
                </Box>

                <Box>
                    <HStack spacing="6px">
                        <Image src={list.colorsURL} alt={list.imageAlt3} />
                        <Box>
                            <strong>Unlimited Colors</strong>
                            <p>Sometimes the simples things are the hardest to find. So we created a new line for everday life.</p>
                        </Box>
                    </HStack>
                </Box>
            </HStack>
        </Box>
    )
}

export default list
