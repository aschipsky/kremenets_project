import media1 from "./photo1.png";
import media2 from "./photo2.png";
import media3 from "./photo3.png";
import media4 from "./photo4.png";
import media5 from "./photo5.png";
import media6 from "./photo6.png";
import media7 from "./photo7.png";

export const media = [media1, media2, media3, media4, media5, media6, media7 ]
export const mediaByIndex = index => media[index % media.length];