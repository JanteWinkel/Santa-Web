/* eslint-disable @next/next/no-img-element */
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

const CarouselSanta = () => {
    const images = [
       
        { id: 2, src: "/images/santa-2.jpg", alt: "Santa" },
        { id: 3, src: "/images/santa-3.jpg", alt: "Ho Ho Ho" },
        { id: 4, src: "/images/santa-4.jpg", alt: "Santa Posando" },
        { id: 5, src: "/images/santa-5.jpg", alt: "Shhhhh" },
      ];
    return ( 
            <div id="carousel" className="sm:px-16 pt-8 m-2">
              <Carousel className="text-primary">
                <CarouselContent className="-ml-2 md:-ml-4 ">
                  {images.map((image) => (
                    <CarouselItem key={image.id} className="md:basis-1/2 lg:basis-1/3 group">
                      <img
                        src={image.src}
                        alt={image.alt}
                        className="rounded-lg"
                      />
                    </CarouselItem>
                  ))}
                </CarouselContent>
                <CarouselPrevious className="text-primary hidden sm:flex" />
                <CarouselNext className="text-primary hidden sm:flex" />
              </Carousel>
            </div>
          );
}
 
export default CarouselSanta;