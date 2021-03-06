import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

import Header from '../Header';
import KindergartenArticle from "../_articles/KindergartenArticle";
import SchoolArticle from "../_articles/SchoolArticle";
import StradinaArticle from "../_articles/StradinaArticle";
import BotanicalGardenArticle from '../_articles/BotanicalGardenArticle'
import BridgeArticle from "../_articles/BridgeArticle";
import HedgehogArticle from "../_articles/HedgehogArticle";
import StatueArticle from "../_articles/StatueArticle";
import HeaderContextProvider from '../../context/Header.context';
import Footer from '../Footer/Footer.component';

const en = require('../../i18n/en_US.json');
const lv = require('../../i18n/lv_LV.json');

i18n
  .use(initReactI18next)
  .init({
    resources: {
      en,
      lv
    },
    lng: 'en',

    interpolation: {
      escapeValue: false // ! ?
    }
  });

const articleIds = {
  Kindergarten: 'Kindergarten',
  School: 'School',
  Stradina: 'Stradina',
  Botanical: 'Botanical',
  Hedgehog: 'Hedgehog',
  Bridge: 'Bridge',
  Statue: 'Statue'
};

function App() {
  return (
    <HeaderContextProvider>
      <Header articleIds={articleIds} />
      <main>
        <KindergartenArticle id={articleIds.Kindergarten} />
        <SchoolArticle id={articleIds.School} />
        <StradinaArticle id={articleIds.Stradina} />
        <BotanicalGardenArticle id={articleIds.Botanical} />
        <HedgehogArticle id={articleIds.Hedgehog} />
        <BridgeArticle id={articleIds.Bridge} />
        <StatueArticle id={articleIds.Statue} />
      </main>
      <Footer />
    </HeaderContextProvider>
  );
}

export default App;
