import { Header, Hero, Experience, Projects, Contacts } from "..";

const Home = () => {
  return (
    <section style={{ backgroundColor: "#656565" }}>
      <Header />
      <Hero />
      <Experience />
      <Projects />
      <Contacts />
    </section>
  );
};

export default Home;
