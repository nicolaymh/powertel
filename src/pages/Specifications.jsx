import React from "react";
import caracteristicas from "../assets/image/caracteristicas2.webp";

const Specifications = () => {
  return (
    <div className="">
      <div className="mb-16 md:mb-32">
        <div className="md:relative">
          <p className="text-5xl my-6 text-gray-700 md:absolute top-20">
            Redmi Note{" "}
            <span className="text-red-500 font-bold shadow-inner ">12</span>
          </p>
          <img
            src={caracteristicas}
            alt="Powertel venta de celulares y accesorios originales y garantizados"
            className="object-contain w-full max-h-screen"
          />
        </div>
        <div className="flex justify-evenly mt-5 mb-10">
          <div className="flex items-center flex-col md:flex-row justify-center">
            <div className="bg-gradient-to-bl to-gray-950 from-gray-700 md:mr-3 shadow-xl rounded-full h-10 w-10" />
            <p className="text-lg text-sky-950">Gris Ónix</p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-center">
            <div className="bg-gradient-to-bl to-sky-600 from-sky-100 md:mr-3 shadow-xl rounded-full h-10 w-10" />
            <p className="text-lg text-sky-950">Azul Hielo</p>
          </div>
          <div className="flex items-center flex-col md:flex-row justify-center">
            <div className="bg-gradient-to-bl to-green-900 from-sky-100 md:mr-3 shadow-xl rounded-full h-10 w-10" />
            <p className="text-lg text-sky-950">Verde Menta</p>
          </div>
        </div>
      </div>
      <div className="p-8 md:p-16">
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Pantalla
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3">Pantalla AMOLED DotDisplay de 6,67&quot;</li>
            <li className="mb-3">Material: E2 Pro</li>
            <li className="mb-3">Frecuencia de actualización: 120 Hz</li>
            <li className="mb-3">Velocidad de muestreo táctil: hasta 240 Hz</li>
            <li className="mb-3">
              Brillo: 450 nits (típ), HBM de 700 nits (típ), brillo máximo de
              1200 nits
            </li>
            <li className="mb-3">Relación de contraste: 4500 000:1</li>
            <li className="mb-3">8 bits</li>
            <li className="mb-3">Amplia gama de colores de DCI-P3</li>
            <li className="mb-3">Resolución: 2400 x 1080</li>
            <li className="mb-3">PPI 395</li>
            <li className="mb-3">Visualización con luz solar</li>
            <li className="mb-3">Modo de lectura</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">Diseño</p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3">165,66*75,96*7,85 mm</li>
            <li className="mb-3">183,5 g</li>
            <li className="mb-3">Gris Ónix, Verde Menta, Azul Hielo</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Camara Trasera
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 font-bold">Cámara principal de 50 MP</li>
            <li className="mb-3">Samsung JN1</li>
            <li className="mb-3">50 MP</li>
            <li className="mb-3">f/1.8</li>
            <li className="mb-3">0,64 μm （4 en 1 1,28 μm）</li>
            <li className="mb-3">Tamaño del sensor de 1/2,76&quot;</li>
            <li className="mb-3">Lente de 5P</li>
            <li className="my-3 font-bold">
              Cámara ultra gran angular de 8 MP
            </li>
            <li className="mb-3">OV08D</li>
            <li className="mb-3">Tamaño de sensor de 1/4&quot;</li>
            <li className="mb-3">1.12μm</li>
            <li className="mb-3">f/2.2</li>
            <li className="mb-3">120°</li>
            <li className="mb-3">Lente de 5P</li>
            <li className="my-3 font-bold">Cámara macro de 2 MP</li>
            <li className="mb-3">f/2.4</li>
            <li className="mb-3">Lente de 3P</li>
            <li className="my-3 font-bold">
              Grabación de video de la cámara trasera
            </li>
            <li className="mb-3">1080p de 1920 x 1080 | 30 fps</li>
            <li className="mb-3">720p de 1280 x 720 | 30 fps</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Camara Frontal
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 font-bold">Cámara frontal de 13 MP</li>
            <li className="mb-3">Tamaño de sensor de 1/3.0&quot;</li>
            <li className="mb-3">f/2.45</li>
            <li className="mb-3">Lente de 5P</li>
            <li className="mb-3">Lente de 5p</li>
            <li className="my-3 font-bold">
              Grabación de video de la cámara frontal
            </li>
            <li className="mb-3">1080p de 1920 x 1080 | 30 fps</li>
            <li className="mb-3">720p de 1280 x 720 | 30 fps</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Conjunto de chips
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">Snapdragon® 685</li>
            <li className="mb-3 ">
              CPU: CPU de ocho núcleos, de hasta 2,8 GHz
            </li>
            <li className="mb-3 ">GPU: Adreno 610</li>
            <li className="mb-3 ">Proceso de fabricación de 6 nm</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Memoria
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">4 + 128 GB</li>
            <li className="mb-3 ">LPDDR4X + UFS 2.2</li>
            <li className="mb-3 ">Almacenamiento ampliable de hasta 1 TB</li>
            <li className="mb-3 text-xs ">
              * El almacenamiento disponible y la RAM son menores que el total
              de memoria indicado debido al almacenamiento del sistema operativo
              y del software preinstalado en el dispositivo. ** La
              compatibilidad real de las tarjetas de memoria puede variar entre
              cada fabricante.
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Batería
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">5000 mAh (típ)</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">Carga</p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">Carga rápida de 33 W</li>
            <li className="mb-3 ">Cargador incluido de 33 W</li>
            <li className="mb-3 ">USB-C</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Sistema de refrigeración
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">Grafito</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Seguridad y autenticación
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">Sensor lateral de huellas digitales</li>
            <li className="mb-3 ">Desbloqueo facial mediante IA</li>
          </ul>
        </div>

        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Conectividad
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">SIM dual + microSD</li>
            <li className="mb-3 ">2G: GSM: 850 900 1800 1900MHz</li>
            <li className="mb-3 ">3G: WCDMA:1/2/4/5/6/8/19</li>
            <li className="mb-3 ">
              4G: LTE FDD:1/2/3/4/5/7/8/12/13/17/18/19/26/28/66
            </li>
            <li className="mb-3 ">4G: LTE TDD:38/40/41</li>
            <li className="mb-3 ">Bluetooth 5.0</li>
            <li className="mb-3 ">Protocolo de Wi-Fi: 802.11a/b/g/n/ac</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Motor de vibración
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">Motor de vibración tipo moneda</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Resistencia al agua y al polvo
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">IP53</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Navegación
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">
              GPS: L1 | GLONASS: G1 | Brújula: B1 | Galileo E1
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">Audio</p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">Entrada de auriculares de 3,5 mm</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">Sensor</p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">
              Sensor de proximidad | Sensor de luz ambiental | Acelerómetro |
              Brújula electrónica | Infrarrojos | Giroscopio
            </li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Interfaz de usuario y sistema
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">MIUI 14 con tecnología Android 13</li>
          </ul>
        </div>
        <div className="h-[1px] bg-gradient-to-l to-sky-400 from-fuchsia-600 w-full my-20 shadow-sm" />
        <div className="grid grid-cols-1 md:grid-cols-3">
          <p className="text-3xl font-bold text-sky-950 my-6 md:my-0">
            Package contents
          </p>
          <ul className="col-span-2 text-sky-900 md:text-xl ">
            <li className="mb-3 ">
              Redmi note 12 / Adapter / USB Type-C Cable / SIM Eject Tool /
              Protective Case / Quick Start Guide / Warranty Card
            </li>
          </ul>
        </div>
        <div className="fixed bottom-16 right-3 animate-bounce">
          <a
            href={`https://wa.me/3144093953?text=Hola Powertel, me interesa adquirir el Xiaomi Note 12, mi nombre es:`}
            target="_blank"
            className=" bg-gradient-to-r hover:bg-gradient-to-l  from-sky-400 to-fuchsia-600 py-3 px-16 rounded-xl font-semibold text-white
            hover:shadow-lg hover:scale-105 transition-all ease-in-out"
          >
            Comprar ahora
          </a>
        </div>
      </div>
    </div>
  );
};

export default Specifications;
