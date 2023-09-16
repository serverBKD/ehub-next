interface Text {
    title: string;
    H5: string;
    numGRID: number;
}

interface Data {
  id: number;
  fullname: string;
  price: number;
  description: string;
  image: string;
}

type StyleX = 'Style0' | 'Style1';

type width = 220 | 320 | 420
type height = 'auto' | 220 | 320 | 420

interface SizeX {
    width: width,
    height:height
}

export type { Text,Data,StyleX,SizeX }