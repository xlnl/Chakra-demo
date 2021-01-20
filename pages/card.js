import { Box, Button, Image, Badge } from "@chakra-ui/core"
import { StarIcon } from "@chakra-ui/icons"
import { Spacer } from "@chakra-ui/react"

const card = () => {
    const course = {
        imageUrl: "./thumb.png",
        imageAlt: "Introduction graphic for Chakra Mini Course",
        hours: 2,
        lectures: 12,
        title: "Introduction to chakra-ui",
        formattedPrice: "$20",
        reviewCount: 34,
        rating: 4,
    }
    return (
        <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden">
            <Image src={course.imageUrl} alt={course.imageAlt} />
    
            <Box p="6"  backgroundColor="gray.200">
                <Box d="flex" alignItems="baseline" >
                    <Badge borderRadius="full" px="2" variant="solid" color="white" variantColor="teal">
                    New!
                    </Badge>
                    <Badge borderRadius="full" px="2" variant="solid" color="white" variantColor="teal">
                    REACT
                    </Badge>
                    <Box
                    color="gray.500"
                    fontWeight="semibold"
                    letterSpacing="wide"
                    fontSize="xs"
                    textTransform="uppercase"
                    ml="2"
                    >
                    {course.hours} HOURS &bull; {course.lectures} LECTURES
                    </Box>
                </Box>
    
            <Box
                mt="1"
                fontWeight="semibold"
                as="h4"
                lineHeight="tight"
                isTruncated
                >
                {course.title}
            </Box>

            <Box>
            Adipisicing ea pariatur ullamco deserunt amet
            consequat reprehenderit in duis est velit tempor.
            Ipsum ea ad duis sint aliquip in ullamco in dolor
            reprehenderit duis ullamco. Irure tempor ullamco vo
            </Box>

            <Box as="span" d="flex" mt="3" alignItems="center">
                <Box d="flex" ml="2" alignItems="center">
                {course.formattedPrice}
                </Box>
                <Spacer />
                <Box d="flex" ml="2" alignItems="center">
                    <Box d="flex" mt="2" alignItems="center">
                        {Array(5)
                            .fill("")
                            .map((_, i) => (
                            <StarIcon
                                key={i}
                                color={i < course.rating ? "teal.500" : "gray.300"}
                            />
                            ))}
                        <Box as="span" ml="2" color="gray.600" fontSize="sm">
                            {course.reviewCount} reviews
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box mx="auto" p={2}>       
                <Button 
                    variant="solid"
                    variantColor="teal"
                    boxShadow="small"
                    _hover={{ boxShadow:"lg"}}
                    _active={{ boxShadow: "lg"}}
                >
                    Sign Up Now!
                </Button>
            </Box>         
            </Box>
        </Box>
    )
}

export default card
