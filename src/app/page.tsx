import { db } from "~/server/db";

export const dynamic = "force-dynamic"

export default async function HomePage() {

  const images = await db.query.images.findMany({
    orderBy: (model, { desc }) => desc(model.id), // sort by id in descending order
  });

  return (
    <main className="">
      <div className="flex flex-wrap ga-4">
        {images.map((image) => (
          <div key={image.id} className="w-48 flex flex-col">
            <img src={image.url} alt="image" />
            <div className="text-center">{image.name}</div>
          </div>
        ))}
      </div>
    </main>
  );
}
