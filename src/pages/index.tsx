import React, { useState, useEffect } from 'react';
import BigLogo from "@/components/BigLogo/BigLogo";
import CartSections from "@/components/CartSections/CartSections";
import Footer from "@/components/Footer/Footer";
import HashTagBar from "@/components/HashTagBar/HashTagBar";
import Navbar from "@/components/Navbar/Navbar";
import SearchBar from "@/components/SearchBar/SearchBar";
import { HashtagAllData, MenuAllData } from "@/services/MenuService";
import { GetWeekDate } from "@/services/SettingsService";
import { Menu, Hashtag, OpeningHours } from "@/types/auth";
import { GetServerSidePropsContext } from "next";
import LoadingPage from '@/components/Shared/Loading/Loading';
import useSearch from '@/hooks/useSearch';
interface MenuProps {
  menuData: Menu[];
  hashtagData: Hashtag[];
  wasSearched: boolean;
  WeekData: OpeningHours;
}
export default function Home(props: MenuProps) {
  const [isLoading, setIsLoading] = useState(true);
  const { searchTerm, setSearchTerm, filteredData, filteredHashtags } = useSearch({ menuData: props.menuData, hashtagData: props.hashtagData });
  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 2000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return <LoadingPage />;
  }
  console.log(props.WeekData)
  return (
    <div className="">
      <Navbar />
      <BigLogo regularHours={props.WeekData.regularHours} />
      <SearchBar searchTerm={searchTerm} setSearchTerm={setSearchTerm} />
      <HashTagBar Hashtag={filteredHashtags} />
      {filteredData.length === 0 ? (
        <div className="text-center text-titleColor mb-40">
          <p>چیزی که دنبالشیو نداریم</p>
        </div>
      ) : (
        <CartSections Data={filteredData} Hashtag={filteredHashtags} />
      )}
      <Footer WeekData={props.WeekData} />
    </div>
  );
}
export const getServerSideProps = async (context: GetServerSidePropsContext) => {
  try {
    const hashtagData = await HashtagAllData();
    const menuData = await MenuAllData();
    const WeekData = await GetWeekDate();
    if (!menuData) {
      throw new Error('Failed to fetch menu data');
    }
    return { props: { menuData: menuData.data, hashtagData, WeekData } };
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