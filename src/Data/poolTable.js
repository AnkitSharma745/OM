import PremiumPoolTable from "../assets/Products/Premium Pool Table.jpg";
import PremiumPoolTable1 from "../assets/Products/Premium Pool Table.jpg";
import AmericanPoolTable from "../assets/Products/AmericanPoolTable.jpg";
import AmericanPoolTable1 from "../assets/Products/AmericanPoolTable1.jpg";
import AmericanPoolTable2 from "../assets/Products/AmericanPoolTable2.jpg";
import AmericanPoolTable3 from "../assets/Products/AmericanPoolTable3.jpg";
import RoyalePoolTable from "../assets/Products/Royale_Pool_Table.webp";
import ClubPoolTable from "../assets/Products/ClubPoolTable.webp";
// import Tennis from '../assets/Products/TableTenniscumPoolTable.webp';

const PoolTable = [
  {
    id: 1,
    category: "Pool Table",
    name: "Premium Pool Table",
    description:
      "A timeless design with durable hardwood construction for optimal play. Built to last, offering a premium gaming experience.",
    img: PremiumPoolTable,
    details: {
      title: "Premium Pool Table",
      images: [
        { original: PremiumPoolTable1, thumbnail: PremiumPoolTable1 },
        { original: PremiumPoolTable1, thumbnail: PremiumPoolTable1 },
        { original: PremiumPoolTable1, thumbnail: PremiumPoolTable1 },
      ],
      size: ["8ft x 4ft"],
      price: {
        current: 49999,
        original: 80000,
      },
      discount: 30000,
      information: [
        "Size - L 8 Ft x W 4 Ft",
        "Room Size - L 18 Ft x W 14 Ft",
        "Imported Italian Style Slates",
        "Solid Hard Wood Body with Designer Legs in Melamine Finish",
        "Professional Quality Imported Cloth",
        "Premium Quality Rubber Cushions with Laminated Top",
        "Premium Imported Leather Inner Pocket Set",
        "1 Imported Pool Ball Set",
        "4 Imported Premium Ashwood Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 Cue Stand",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Pool Table Dust Cover",
      ],
    },
  },
  {
    id: 2,
    category: "Pool Table",
    name: "American Pool Table",
    description:
      "Sleek and stylish, the Modern Pool Table brings a contemporary touch to your game room. A perfect balance of style and function.",
    img: AmericanPoolTable,
    details: {
      id: 1,
      title: "American Pool Table",
      images: [
        {
          original: AmericanPoolTable,
          thumbnail: AmericanPoolTable,
        },
        {
          original: AmericanPoolTable2,
          thumbnail: AmericanPoolTable2,
        },
        {
          original: AmericanPoolTable3,
          thumbnail: AmericanPoolTable3,
        },
        {
          original: AmericanPoolTable1,
          thumbnail: AmericanPoolTable1,
        },
      ],
      size: ["4ft x 8ft"],
      price: {
        current: "1.5 Lac",
        original: 170000,
      },
      discount: 20000,
      information: [
        "Size - L 4 Ft x W 8 Ft",

        "Best Quality Authentic Stone Slates",
        "High Quality Automatic Ball return system with single point ball collection box",
        "High Quality Imported K55 Melin Rubber Cushion",
        "1 Premium Imported 2 1/4 ounce Pool Ball Set",
        "4 Premium Imported Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 Cue Stand",
        "1 Imported 3 Pc Rod Dome Light Set",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Pool Table Dust Cover",
      ],
    },
  },
  {
    id: 3,
    category: "Pool Table",
    name: "Royale Pool Table",
    description:
      "The epitome of luxury, this pool table combines craftsmanship with elegant design. Enjoy top-tier playability and aesthetics.",
    img: RoyalePoolTable,
    details: {
      title: "Royale Pool Table",
      images: [
        {
          original: RoyalePoolTable,
          thumbnail: RoyalePoolTable,
        },
        {
          original: RoyalePoolTable,
          thumbnail: RoyalePoolTable,
        },
        {
          original: RoyalePoolTable,
          thumbnail: RoyalePoolTable,
        },
      ],
      size: ["8ft x 4ft"],
      price: {
        current: "1.5 Lacs",
        original: "1.6 Lacs",
      },
      discount: 10000,
      information: [
        "Size - L 8 Ft x W 4 Ft",
        "Room Size - L 18 Ft x W 14 Ft",
        "Best Quality Authentic Stone Slates",
        "Solid Hard Wood Body with Premium V Design Legs",
        "Premium Duco with PU Polish finish completed with a coat of Lacquer in colour of choice",
        "Imported Premium American Style Pockets",
        "Latest Open Channel Ball Collection System",
        "High Quality Imported K55 Melin Rubber Cushion",
        "Professional Quality Imported Top Grade Speed Cloth (Red/Blue/Green/Black/Beige options available)",
        "1 Premium Imported 2 1/4 ounce Pool Ball Set",
        "4 Premium Imported Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 Cue Stand",
        "1 Imported 3 Pc Rod Dome Light Set",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "1 Pool Table Dust Cover",
      ],
    },
  },
  {
    id: 4,
    category: "Pool Table",
    name: "Club Pool Table",
    description:
      "This pool table withstands all elements without compromising on quality. Play anywhere, anytime.",
    img: ClubPoolTable,
    details: {
      title: "Club Pool Table",
      images: [
        {
          original: ClubPoolTable,
          thumbnail: ClubPoolTable,
        },
        {
          original: ClubPoolTable,
          thumbnail: ClubPoolTable,
        },
      ],
      size: ["8 x 4"],
      price: {
        current: 72000,
        original: 80000,
      },
      discount: 8000,
      information: [
        "Size - L 8 Ft x W 4 Ft",
        "Room Size - L 18 Ft x W 14 Ft",
        "Best Quality Authentic Stone Slates Bed",
        "Solid Hard Wood Body with Premium Designer Legs in Melamine Finish",
        "Standard Quality Imported British Style Cloth",
        "Premium Quality Rubber Cushions with Laminated Top",
        "Tournament Quality Imported Leather Inner Pocket Set",
        "1 Imported Pool Ball Set",
        "4 Imported Ashwood Pool Cues",
        "1 Pool Triangle",
        "1 Table Brush",
        "1 3 Pc Imported Premium 3 pc Dome Light Set",
        "1 Cue Stand",
        "12 Pc Chalk Set",
        "12 Pcs Cue Tip Set",
        "6 Pc Level Adjusters",
        "1 Pool Table Dust Cover",
      ],
    },
  },
];

export default PoolTable;
