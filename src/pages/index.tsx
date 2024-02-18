import BigLogo from "@/components/BigLogo/BigLogo";
import CartSections from "@/components/CartSections/CartSections";
import HashTagBar from "@/components/HashTagBar/HashTagBar";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";

export default function Home() {
  return (
    <div className="">
      <Navbar />
      <BigLogo/>
      <SearchBar/>
      <HashTagBar/>
      <CartSections/>
    </div>
  );
}
