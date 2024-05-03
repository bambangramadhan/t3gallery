import Link from "next/link";

const mockUrls = [
  "https://utfs.io/f/889cf59b-7a34-439d-97ae-82b97f226005-9fx5tr.jpeg",
  "https://utfs.io/f/74bfa499-50d0-490d-905b-c532b349a1b8-9xa0r1.jpeg",
  "https://utfs.io/f/57bc681b-0ab3-424d-ae07-da4b6dfa216b-hvrogw.jpeg",
  "https://utfs.io/f/98822bfd-0b6f-4a9b-b1ca-7b5c64e53749-r3vejg.webp",
];

const mockImages = mockUrls.map((url, index) => ({
  id: index + 1,
  url,
}));

export default function HomePage() {
  return (
    <main className="">
      <div className="flex flex-wrap gap-4">
        {[...mockImages, ...mockImages, ...mockImages].map((image) => (
          <div key={image.id} className="w-48">
            <img src={image.url} />
          </div>
        ))}
      </div>
      Hello (gallery in progress)
    </main>
  );
}
