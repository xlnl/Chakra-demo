import { Image, Box, useColorMode, Tabs, TabList, Tab, TabPanels, TabPanel } from "@chakra-ui/core"

import SignUpForm from "../components/SignUpForm"
import LoginForm from "../components/LoginForm"

const form = () => {
    const { colorMode } = useColorMode()
    return (
        <Box w="350px" bg={ colorMode === "light" ? "gray.200" : "gray.600" } p={4} boxShadow="sm" rounded="lg">
            <Image src="./security.png" w="100px" mx="auto" my={4}/>
            <Tabs variant="enclosed-colored" m={4} isFitted>
                <TabList>
                    <Tab>Sign Up</Tab>
                    <Tab>Login</Tab>
                </TabList>     
                <TabPanels p={3}>
                    <TabPanel>
                        <SignUpForm/>
                    </TabPanel>
                    <TabPanel>
                        <LoginForm/>
                    </TabPanel>
                </TabPanels>       
            </Tabs>
        </Box>
    )
}

export default form
