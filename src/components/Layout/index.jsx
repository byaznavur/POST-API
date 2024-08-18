import Footer from "../Footer";
import Header from "../Header";
import Intro from "./Intro";

const Layout = () => {
  return (
    <div>
      <Header />
      <main className="min-h-[calc(100vh-50px)] container py-6">
        <Intro />
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
