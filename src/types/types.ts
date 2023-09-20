interface Data {
  id: number;
  fullname: string;
  price: number;
  description: string;
  image: string;
}
interface Text {
    title: string;
    H5: string;
    numGRID: number;
    TBH: number;
    TBText: number;
    OL: string;
}

type StyleX = 'Style0' | 'Style1';

type width = '220px' | '320px' | '420px'
type height = 'auto' | '220px' | '320px' | '420px'
interface SizeX {
  width: width,
  height:height
}

export type { Text,Data,StyleX,SizeX }