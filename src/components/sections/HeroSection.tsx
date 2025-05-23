import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const HeroSection = () => {
  return (
    <section className="px-6 py-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
          В мире, где все меняется с
          <span className="text-violet-600 block mt-2">
            космической скоростью 🚀
          </span>
        </h1>
        <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
          TeamLink — ваш надежный HR-партнер с 2020 года 🔥 Мы знаем, как найти
          тех, кто сделает ваш бизнес еще круче! 🙌
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
          <Button
            size="lg"
            className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3"
          >
            <Icon name="Users" className="mr-2" />
            Найти таланты
          </Button>
          <Button variant="outline" size="lg" className="px-8 py-3">
            <Icon name="Play" className="mr-2" />
            Посмотреть видео
          </Button>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
