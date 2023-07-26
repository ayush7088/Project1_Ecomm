// import styled from "styled-components";
import HeroSection from "./components/HeroSection";
import Trusted from "./components/Trusted";
import Services from "./components/Services";
import FeatureProduct from "./components/FeatureProduct";


const Home = () => {
    const data = {
        name: "Kiraana Store"
    };
    return (
        <>
            <HeroSection myData={data} />
            <FeatureProduct />
            <Services />
            <Trusted />

        </>
    );
};

// const Wrapper = styled.section`
//   height: 100vh;
//   background-color: ${({ theme }) => theme.colors.bg};
// `;

export default Home;
