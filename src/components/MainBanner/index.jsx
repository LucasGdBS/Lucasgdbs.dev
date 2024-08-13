import SocialMedias from "../SocialMedias";

function MainBanner() {
  return (
    <div className="bg-slate-800 h-screen flex items-center justify-center py-16 overflow-x-hidden flex-col gap-5">
        <div>
            <h1 className="font-Lobster text-5xl text-white text-center sm:text-9xl">LUCAS GABRIEL</h1>
        </div>
        <div>
            <h2 className="text-2xl text-neutral-500 font-Lobster text-center sm:text-5xl">Dev Full Stack</h2>
        </div>
        <div>
            <SocialMedias />
        </div>
    </div>
  );
}

export default MainBanner;
