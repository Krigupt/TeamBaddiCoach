import Image from "next/image"

const images = [
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%205.17.00%E2%80%AFPM-Hodq7IZDgEgKI8VsHVHwIyZxd5l70v.png",
    alt: "Badminton racket on dark surface",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%205.17.00%E2%80%AFPM-Hodq7IZDgEgKI8VsHVHwIyZxd5l70v.png",
    alt: "Tech visualization icon",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%205.17.00%E2%80%AFPM-Hodq7IZDgEgKI8VsHVHwIyZxd5l70v.png",
    alt: "Shuttlecock in motion",
  },
  {
    src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Screenshot%202025-01-19%20at%205.17.00%E2%80%AFPM-Hodq7IZDgEgKI8VsHVHwIyZxd5l70v.png",
    alt: "Player silhouette",
  },
]

export function ImageGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
      {images.map((image, index) => (
        <div key={index} className="relative aspect-square overflow-hidden rounded-lg">
          <Image
            src={image.src || "/placeholder.svg"}
            alt={image.alt}
            fill
            className="object-cover hover:scale-105 transition-transform"
          />
        </div>
      ))}
    </div>
  )
}

