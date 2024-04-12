import { FaVirus } from "react-icons/fa";
import { CiSearch } from "react-icons/ci";
import { TbVaccine } from "react-icons/tb";

const Header = () => {
  return (
    <header className="flex bg-zinc-900 text-white py-5 px-5 md:px-20 justify-between items-center">
      <div className="flex items-center gap-2">
        <FaVirus className="text-green-500 text-xl" />
        <h1 className="font-mono whitespace-nowrap font-semibold text-lg md:text-2xl">
          COVİD Takip
        </h1>
      </div>

      <form className="flex items-center border outline-none  rounded ">
        <input
          className="bg-transparent px-1 py-1 md:px-5"
          type="text"
          placeholder="Ülke İsmine Göre Ara"
        />
        <button className="bg-green-500 text-xl p-1 md:p-2 w-full h-full rounded transition hover:bg-green-600">
          <CiSearch />
        </button>
      </form>

      <div className="flex items-center gap-3 max-md:hidden">
        <p className="flex flex-col text-sm">
          <span>Vaccinated Today</span>
          <span className="text-gray-400">(123,456)</span>
        </p>
        <TbVaccine className="text-xl text-green-500" />
      </div>
    </header>
  );
};

export default Header;
