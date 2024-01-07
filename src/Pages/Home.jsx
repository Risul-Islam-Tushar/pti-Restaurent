import Cover from "./Cover";
import Footer from "./Footer";
import Header from "./Header";
import Items from "./Items";
import RecommandedItems from "./RecommandedItems";

const Home = () => {
  return (
    <div className="bg-slate-200">
      <Header></Header>
      <Cover></Cover>
      <Items></Items>
      <RecommandedItems></RecommandedItems>
      <Footer></Footer>
    </div>
  );
};

export default Home;
