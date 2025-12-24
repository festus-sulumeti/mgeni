import { BlurFade } from "@/components/ui/blur-fade"

// Import your local images
import img1 from "../../assets/Gallery /1.jpeg"
import img2 from "@/assets/Gallery /2.jpeg"
import img3 from "@/assets/Gallery /3.jpeg"
import img4 from "@/assets/Gallery /4.jpeg"
import img5 from "@/assets/Gallery /5.jpeg"
import img6 from "@/assets/Gallery /6.jpeg"
// import img7 from "@/assets/Gallery /7.jpeg"
// import img8 from "@/assets/Gallery /8.jpeg"
// import img9 from '@/assets/Gallery /9.jpeg';


// Put them in an array
const images = [img1, img2, img3, img4, img5, img6]

export default function HotelGallery() {
  return (
    <section id="photos" className="py-10">
      <div className="columns-2 gap-4 sm:columns-3">
        {images.map((imageUrl, idx) => (
          <BlurFade key={idx} delay={0.25 + idx * 0.05} inView>
            <img
              className="mb-4 w-full rounded-lg object-cover"
              src={imageUrl}
              alt={`RenderCon Kenya photo ${idx + 1}`}
            />
          </BlurFade>
        ))}
      </div>
    </section>
  )
}