import ArrowDown from "../ArrowDown";
import Container from "../Container";
import SocialMedias from "../SocialMedias";

function MainBanner() {
  return (
    <Container className="bg-slate-800">
        <div>
            <h1 className="font-OleoScript text-5xl text-white text-center sm:text-9xl">LUCAS GABRIEL</h1>
        </div>
        <div>
            <h2 className="text-2xl text-neutral-500 font-OleoScript text-center sm:text-5xl">Dev Full Stack</h2>
        </div>
        <div>
            <SocialMedias />
        </div>

        <ArrowDown className={"text-white"}/>
    </Container>
  );
}

export default MainBanner;
