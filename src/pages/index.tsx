import BigLogo from "@/components/BigLogo/BigLogo";
import CartSections from "@/components/CartSections/CartSections";
import Footer from "@/components/Footer/Footer";
import HashTagBar from "@/components/HashTagBar/HashTagBar";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { HashtagAllData, MenuAllData } from "@/services/MenuService";
import { SearchMenu } from "@/services/SearchService";
import { Menu, Hashtag } from "@/types/auth";
import { GetServerSidePropsContext } from "next";
interface MenuProps {
  menuData: Menu[];
  hashtagData: Hashtag[];
  wasSearched: boolean;
}
export default function Home(props: MenuProps) {
  return (
    <div className="">
      <Navbar />
      <BigLogo />
      <SearchBar />
      <HashTagBar Hashtag={props.hashtagData} />
      {props.wasSearched && props.menuData.length === 0 ? (
        <div className="text-center text-titleColor mb-40">
          <p>چیزی که دنبالشیو نداریم</p>
        </div>
      ) : (
        <CartSections Data={props.menuData} Hashtag={props.hashtagData} />
      )}
      <Footer />
    </div>
  );
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  const searchTerm = context.query.term;
  let wasSearched = false;
  try {
    let menusData;
    let hashtagData = await HashtagAllData();
    if (searchTerm) {
      menusData = await SearchMenu(searchTerm);
      const searchHashtags = new Set();
      menusData.data.forEach((menu: { hashtags: any[]; }) => {
        menu.hashtags.forEach(tag => {
          searchHashtags.add(tag);
        });
      });
      hashtagData = hashtagData.filter(({ hashtag }: any) => searchHashtags.has(hashtag));
      wasSearched = true;
    } else {
      menusData = await MenuAllData();
    }
    if (!menusData) {
      throw new Error('Failed to fetch menu data');
    }
    return { props: { menuData: menusData.data, hashtagData, wasSearched } };
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