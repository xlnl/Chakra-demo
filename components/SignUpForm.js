import { 
    Stack, 
    Input, 
    FormControl, 
    Icon, 
    InputLeftElement, 
    InputGroup, 
    Button, 
    Divider, 
    FormHelperText } 
from "@chakra-ui/core"

// FormControl allow you to control what is required and what is disabled

const SignUpForm = () => {
    return (
        <form action="submit">
            <Stack spacing={4}>

                <FormControl isRequired>
                    <InputGroup>
                    <InputLeftElement children={<Icon name="info" />} />
                        <Input 
                            type="name"
                            placeholder="First name"
                            aria-label="First name"
                        />
                    </InputGroup>
                </FormControl>

                <FormControl isRequired>
                    <InputGroup>
                    <InputLeftElement children={<Icon name="info" />} />
                    <Input 
                        type="name"
                        placeholder="Last name"
                        aria-label="Last name"
                    />
                    </InputGroup>
                </FormControl>

                <Divider borderColor="gray.300"/>

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
                        Sign Up!
                </Button>

                <FormHelperText textAlign="center">
                    We will never share your email!
                    <br/>
                    🤞🏻
                </FormHelperText>

            </Stack>
        </form>
    )
}

export default SignUpForm
