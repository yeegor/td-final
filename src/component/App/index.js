import Header from '../Header';
import KindergartenArticle from "../KindergartenArticle";
import SchoolArticle from "../SchoolArticle";
import StradinaArticle from "../StradinaArticle";
import BotanicalGardenArticle from '../BotanicalGardenArticle'
import BridgeArticle from "../BridgeArticle";
import HedgehogArticle from "../HedgehogArticle";
import StatueArticle from "../StatueArticle";
import HeaderContextProvider from '../../context/Header.context';

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
      <main>
        <Header articleIds={articleIds} />
        <KindergartenArticle id={articleIds.Kindergarten} />
        <SchoolArticle id={articleIds.School} />
        <StradinaArticle id={articleIds.Stradina} />
        <BotanicalGardenArticle id={articleIds.Botanical} />
        <HedgehogArticle id={articleIds.Hedgehog} />
        <BridgeArticle id={articleIds.Bridge} />
        <StatueArticle id={articleIds.Statue} />
      </main>
    </HeaderContextProvider>
  );
}

export default App;
