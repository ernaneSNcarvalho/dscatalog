import HeaderClient from "../../components/HeaderClient";
import computerImg from "../../assets/computer.png";

import "./styles.css";
import SearchBar from "../../components/SearchBar";
import CatalogCard from "../../components/CatalogCard";
import ButtonNextPage from "../../components/ButtonNextPage";

export default function Catalog() {
  const cards = Array.from({ length: 12 });

  return (
    <>
      <HeaderClient />
      <main>
        <section id="catalog-section" className="dsc-container">
          <SearchBar />

          <div className="dsc-catalog-cards dsc-mb20 dsc-mt20">
            {cards.map((_, index) => (
              <CatalogCard key={index} />
            ))}
          </div>

          <ButtonNextPage />
        </section>
      </main>
    </>
  );
}
