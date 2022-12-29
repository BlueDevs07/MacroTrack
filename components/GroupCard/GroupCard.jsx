import Link from "next/link";

function GroupCard({ data = {}, color = 1, route = "#" }) {
  return (
    <Link href={route}>
      <div
        className={` ${
          color ? "bg-[#A4D672]" : "bg-[#DBAEC6]"
        } w-72 m-12 h-36 rounded-md flex flex-col justify-center items-center cursor-pointer relative transition duration-500 shadow-2xl hover:scale-110`}
      >
        <img
          className="absolute left-0 bottom-0 shadow-inner-2xl"
          src="LargeCard/Rectangle.png"
        />
        <div className="text-4xl text-white z-10 pb-2 text-center">
          {data?.title}
        </div>
      </div>
    </Link>
  );
}
export default GroupCard;
