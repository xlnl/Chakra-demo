import { 
    Stack, 
    Input, 
    FormControl, 
    Icon, 
    InputLeftElement, 
    InputGroup, 
    Button, 
    FormHelperText } 
from "@chakra-ui/core"

const LoginForm = () => {
    return (
        <form action="submit">
        <Stack spacing={4}>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="email" />} />
                <Input 
                    type="email"
                    placeholder="Email"
                    aria-label="Email"
                />
                </InputGroup>
            </FormControl>

            <FormControl isRequired>
                <InputGroup>
                <InputLeftElement children={<Icon name="lock" />} />
                <Input 
                    type="password"
                    placeholder="Password"
                    aria-label="Password"
                />
                </InputGroup>
            </FormControl>

            <Button
                type="submit"
                variant="solid"
                variantColor="red"
                boxShadow="small"
                _hover={{ boxShadow:"lg"}}
                _active={{ boxShadow: "lg"}}
                >
                    Login
            </Button>

            <FormHelperText textAlign="center">
                Welcome Home!
                <br/>
                🏠
            </FormHelperText>
        </Stack>
    </form>
    )
}

export default LoginForm
