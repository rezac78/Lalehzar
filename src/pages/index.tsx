import BigLogo from "@/components/BigLogo/BigLogo";
import CartSections from "@/components/CartSections/CartSections";
import Footer from "@/components/Footer/Footer";
import HashTagBar from "@/components/HashTagBar/HashTagBar";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { HashtagAllData, MenuAllData } from "@/services/MenuService";
import { Menu, Hashtag } from "@/types/auth";
interface MenuProps {
  menuData: Menu[];
  hashtagData: Hashtag[]
}
export default function Home(props: MenuProps) {
  return (
    <div className="">
      <Navbar />
      <BigLogo />
      <SearchBar />
      <HashTagBar Hashtag={props.hashtagData} />
      <CartSections Data={props.menuData} Hashtag={props.hashtagData} />
      <Footer />
    </div>
  );
}
export const getServerSideProps = async () => {
  const menuData = await MenuAllData();
  const hashtagData = await HashtagAllData();
  return { props: { menuData: menuData.data, hashtagData: hashtagData.data } };
};