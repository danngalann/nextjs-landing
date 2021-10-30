import media1 from "../../../public/img/carousel/image2.jpg";
import media2 from "../../../public/img/carousel/image1.jpg";
import media3 from "../../../public/img/carousel/image3.jpg";


export const media = [media1, media2, media3];
export const mediaByIndex = (index: number) => media[index % media.length];