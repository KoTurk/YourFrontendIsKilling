import { Image } from '@mantine/core';

export const Introduction = () => {
    return (
        <Image
            radius="md"
            h={800}
            src="images/stickers.png"
            // src="images/stickers.jpg"
            w={1540}
            alt="Introduction"
            // add padding of 20px and box-sizing="border-box"
            style={{ paddingLeft: 20 }}
        />
    );
}