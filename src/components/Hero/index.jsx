import React from "react";
import { Container, Section, Flex, Subhead, Heading, Kicker, Button } from "../ui";

const Hero = () => {
    return (
        <Section>
            <Container>
                <Flex gap={4} variant="columnStart">
                    <Heading>
                        Synergy – the bonus that <br /> is achieved when things <br /> work together harmoniously.
                    </Heading>
                     <Kicker>
                        If everyone is moving forward together, <br />then success takes care of itself.
                    </Kicker>
                    <Button variant="primary" to={'/dashboard'}>Get Started</Button>
                </Flex>
            </Container>
        </Section>
    );
}

export default Hero;