import Image from "next/image";

export default function EventCard({ name, year, date, description, url }) {
  return (
    <div className="flex justify-center items-center m-[20px]">
      <div className="w-full h-[400px] border border-gray-200 rounded-lg shadow bg-gray-800 border-gray-700">
        <div className="p-5 h-full flex flex-col items-center">
          <Image
            src={url}
            width={0}
            height={0}
            sizes="100vw"
            style={{ width: "200px", height: "200px" }}
            className="rounded-full"
          />
          <h1 className="text-2xl text-white p-2">{name}</h1>
          <p className="text-gray-500 text-sm mb-2">{year}</p>
          <p className="text-gray-500 text-sm mb-2">{date}</p>
          <p className="text-gray-500 text-sm mb-4 overflow-y-auto max-h-20">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
}
