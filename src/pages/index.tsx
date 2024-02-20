import BigLogo from "@/components/BigLogo/BigLogo";
import CartSections from "@/components/CartSections/CartSections";
import Footer from "@/components/Footer/Footer";
import HashTagBar from "@/components/HashTagBar/HashTagBar";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { HashtagAllData, MenuAllData } from "@/services/MenuService";
import { Menu, Hashtag } from "@/types/auth";
import { GetServerSidePropsContext } from "next";
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
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const menuData = await MenuAllData();
    const hashtagData = await HashtagAllData();
    if (!menuData) {
      throw new Error('Failed to fetch courses data');
    }
    return { props: { menuData: menuData.data, hashtagData: hashtagData.data } };
  } catch (error) {
    const originalUrl = context.resolvedUrl;
    return {
      redirect: {
        destination: `/500?redirect=${encodeURIComponent(originalUrl)}`,
        permanent: false,
      },
    };
  }
};