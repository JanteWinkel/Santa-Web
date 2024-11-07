import BannerContador from "@/components/banner-contador";
import BannerPerfil from "@/components/banner-perfil";
import EventCalendar from "@/components/calendar";
import CarouselSanta from "@/components/carousel-fotos";
import Contacto from "@/components/contacto";
import Empresas from "@/components/empresas";
import Eventos from "@/components/eventos";
import Footer from "@/components/footer";


export default function Home() {
  return (
   <main >
    <BannerPerfil />
    <CarouselSanta />
    <BannerContador />
    <EventCalendar />
    <Eventos />
    <Contacto />
    <Empresas />
    <Footer />
   </main>
  );
}
