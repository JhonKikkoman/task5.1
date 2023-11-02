import './App.css';
import { GenealContent } from './components/PageApp/GeneralContent';
import { InnerContent } from './components/PageApp/InnerContent/InnerContent'
import { HeaderContent } from './components/PageApp/InnerContent/HeaderContent/HeaderContent'
import { MainContent } from './components/PageApp/InnerContent/MainContent/MainContent';
import { FooterContent } from './components/PageApp/InnerContent/FooterContent/FooterContent';

const obj1 = {
  // здесь будет нужный набор данных в зависимости от InnerContent'a header/main/footer
}



function App() {
  return (
    <>
      <GenealContent>
        <InnerContent>
          {/* Props передавать нужные данные во внутрь компонента из obj */}
          <HeaderContent/>
        </InnerContent>
        <InnerContent>
          {/* Props передавать нужные данные во внутрь компонента из obj */}
          <MainContent/>
        </InnerContent>
        <InnerContent>
          {/* Props передавать нужные данные во внутрь компонента из obj */}
          <FooterContent/>
        </InnerContent>
      </GenealContent>
    </>
  );

}

export default App;
