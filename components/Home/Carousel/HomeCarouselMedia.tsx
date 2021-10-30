import media1 from "../../../public/img/carousel/image1.jpg";
import media2 from "../../../public/img/carousel/image3.jpg";
import media3 from "../../../public/img/carousel/image4.jpg";
import media4 from "../../../public/img/carousel/image5.jpg";


export const media = [media1, media2, media3, media4];
export const mediaByIndex = (index: number) => media[index % media.length];