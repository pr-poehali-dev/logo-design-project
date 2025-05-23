import { Button } from "@/components/ui/button";
import Icon from "@/components/ui/icon";

const AboutSection = () => {
  return (
    <section id="about" className="px-6 py-16 bg-gray-50">
      <div className="max-w-6xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl font-bold text-gray-900 mb-6">
              О TeamLink 🌟
            </h2>
            <p className="text-lg text-gray-600 mb-6">
              Наша миссия — не просто найти "тех самых" людей, но и создать
              крутую среду, где каждый сможет раскрыться, расти и творить
              историю вместе с вашей компанией! 💼✨
            </p>
            <p className="text-lg text-gray-600 mb-8">
              Мы верим, что успех бизнеса начинается с сильной команды. А
              сильная команда — это не только таланты, но и правильные условия
              для развития. 🌱
            </p>
            <div className="flex space-x-8">
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600">500+</div>
                <div className="text-gray-600">Проектов</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600">10+</div>
                <div className="text-gray-600">Лет опыта</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-violet-600">98%</div>
                <div className="text-gray-600">Довольных клиентов</div>
              </div>
            </div>
          </div>
          <div className="lg:pl-8">
            <div className="bg-gradient-to-br from-violet-500 to-purple-600 rounded-2xl p-8 text-white">
              <h3 className="text-2xl font-bold mb-4">Готовы начать?</h3>
              <p className="text-violet-100 mb-6">
                Расскажите нам о своем проекте, и мы предложим лучшее решение
              </p>
              <Button className="bg-white text-violet-600 hover:bg-violet-50">
                <Icon name="MessageCircle" className="mr-2" />
                Связаться с нами
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
