import BigLogo from "@/components/BigLogo/BigLogo";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <BigLogo/>
      <SearchBar/>
    </div>
  );
}
