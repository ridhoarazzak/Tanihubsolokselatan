import { Product } from './types';

export const CATEGORIES = ['Semua', 'Beras', 'Kopi', 'Rempah', 'Sayuran'];

export const SAMPLE_PRODUCTS: Product[] = [
  {
    id: '1',
    name: 'Beras Solok Anak Daro (Premium)',
    price: 16500,
    unit: 'kg',
    category: 'Beras',
    image: 'https://picsum.photos/seed/beras/400/300',
    farmer: 'Pak Herman',
    location: 'Muara Labuh',
    description: 'Beras putih pulen asli Solok Selatan, varietas Anak Daro. Tanpa pemutih dan pengawet. Panen terbaru.'
  },
  {
    id: '2',
    name: 'Kopi Arabika Solok Selatan',
    price: 85000,
    unit: '250g',
    category: 'Kopi',
    image: 'https://picsum.photos/seed/kopi/400/300',
    farmer: 'Koperasi Tani Maju',
    location: 'Sangir',
    description: 'Biji kopi pilihan dari dataran tinggi Sangir. Notes: Spices, Citrus, Brown Sugar. Roasting level: Medium.'
  },
  {
    id: '3',
    name: 'Kulit Manis (Casia Vera) Grade A',
    price: 45000,
    unit: 'kg',
    category: 'Rempah',
    image: 'https://picsum.photos/seed/kulitmanis/400/300',
    farmer: 'Ibu Ratna',
    location: 'Pauh Duo',
    description: 'Kulit manis kering kualitas ekspor. Bersih, gulungan rapat, dan aroma kuat.'
  },
  {
    id: '4',
    name: 'Cabai Merah Keriting Lado',
    price: 35000,
    unit: 'kg',
    category: 'Sayuran',
    image: 'https://picsum.photos/seed/cabe/400/300',
    farmer: 'Uda Roni',
    location: 'Sungai Pagu',
    description: 'Cabai merah segar baru petik. Pedas mantap, cocok untuk masakan Padang.'
  },
  {
    id: '5',
    name: 'Jahe Merah Segar',
    price: 25000,
    unit: 'kg',
    category: 'Rempah',
    image: 'https://picsum.photos/seed/jahe/400/300',
    farmer: 'Kelompok Tani Sejahtera',
    location: 'Sangir Jujuan',
    description: 'Jahe merah organik, sangat baik untuk kesehatan dan minuman herbal.'
  },
  {
    id: '6',
    name: 'Beras Merah Organik',
    price: 22000,
    unit: 'kg',
    category: 'Beras',
    image: 'https://picsum.photos/seed/berasmerah/400/300',
    farmer: 'Ibu Siti',
    location: 'Muara Labuh',
    description: 'Beras merah pecah kulit, kaya serat dan rendah gula. Cocok untuk diet.'
  }
];

export const SYSTEM_INSTRUCTION_TEXT = `Anda adalah asisten AI ahli pertanian bernama "AgriBot" yang dikhususkan untuk wilayah Solok Selatan, Sumatera Barat. 
Pengetahuan Anda mencakup:
1. Komoditas unggulan Solok Selatan: Beras (Anak Daro, Cisokan), Kopi Arabika, Kulit Manis (Casia Vera), Karet, dan Sawit.
2. Kondisi geografis: Daerah pegunungan dan dataran tinggi yang subur.
3. Budaya lokal: Gunakan bahasa Indonesia yang sopan, bersahabat, dan sesekali boleh menyelipkan sapaan khas Minang seperti "Uda", "Uni", "Bapak/Ibu Tani".
4. Tugas utama: Membantu mendiagnosa penyakit tanaman dari deskripsi atau gambar, memberikan saran pemupukan, dan prediksi cuaca/masa tanam.

Jika pengguna bertanya di luar topik pertanian, arahkan kembali ke pertanian dengan sopan.`;