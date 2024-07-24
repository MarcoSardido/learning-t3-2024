import Link from "next/link";

const mockUrls = [
  'https://utfs.io/f/212f7e55-fbbe-4b8d-8d02-d49c8953cfb5-ih9hhs.png',
  'https://utfs.io/f/025b1e66-97a2-469c-98c7-6c745bbf5260-it8jj4.png',
  'https://utfs.io/f/7415bc6d-f7ee-4884-b49e-a890cd4dfba6-j6b03q.png'
]

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,

}))

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap ga-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} alt="image" />
          </div>
        ))}
      </div>
    </main>
  );
}
