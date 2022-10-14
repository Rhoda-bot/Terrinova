import Faqs from "../Faqs/faqs";
import Footer from "../Footer/footer";
import Opportunities from "../opportunities/opportunities";
import Partners from "../partners/partners";
import Products from "../products/products";
import OurSolutions from "../solutions";
import OurStory from "../story";
import Success from "../success/sucess";
import Teams from "../teams/teams";
import Header from "./header"

const Home = () => {
    return(
        <>
        <Header />
        <OurStory />
        <OurSolutions />
        <Opportunities />
        <Products />
        <Success />
        <Teams />
        <Partners />
        <Faqs />
        <Footer />
        </>
    );
}
export default Home;