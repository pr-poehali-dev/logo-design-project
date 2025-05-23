import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-50">
      {/* Header */}
      <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-b">
        <div className="max-w-6xl mx-auto flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Л</span>
            </div>
            <span className="text-xl font-semibold text-gray-800">
              Ваш Логотип
            </span>
          </div>
          <nav className="hidden md:flex space-x-8">
            <a
              href="#about"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              О нас
            </a>
            <a
              href="#services"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Услуги
            </a>
            <a
              href="#contact"
              className="text-gray-600 hover:text-violet-600 transition-colors"
            >
              Контакты
            </a>
          </nav>
        </div>
      </header>

      {/* Hero Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in">
            Добро пожаловать в
            <span className="text-violet-600 block mt-2">Будущее Бизнеса</span>
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-3xl mx-auto animate-fade-in">
            Мы предоставляем инновационные решения для роста вашего бизнеса.
            Профессиональный подход, современные технологии и результат, который
            превосходит ожидания.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in">
            <Button
              size="lg"
              className="bg-violet-600 hover:bg-violet-700 text-white px-8 py-3"
            >
              <Icon name="Rocket" className="mr-2" />
              Начать проект
            </Button>
            <Button variant="outline" size="lg" className="px-8 py-3">
              <Icon name="Play" className="mr-2" />
              Посмотреть видео
            </Button>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section id="services" className="px-6 py-16 bg-white">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold text-gray-900 mb-4">
              Наши преимущества
            </h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Почему тысячи клиентов выбирают нас для реализации своих проектов
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Zap" className="w-8 h-8 text-violet-600" />
                </div>
                <CardTitle>Быстрый результат</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Запускаем проекты в кратчайшие сроки благодаря отлаженным
                  процессам и опытной команде
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Shield" className="w-8 h-8 text-green-600" />
                </div>
                <CardTitle>Надёжность</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Гарантируем стабильность и безопасность всех решений с
                  долгосрочной поддержкой
                </CardDescription>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow duration-300">
              <CardHeader className="text-center">
                <div className="w-16 h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Icon name="Users" className="w-8 h-8 text-blue-600" />
                </div>
                <CardTitle>Команда экспертов</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-center">
                  Профессионалы с многолетним опытом в различных отраслях и
                  технологиях
                </CardDescription>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="px-6 py-16 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold text-gray-900 mb-6">
                О нашей компании
              </h2>
              <p className="text-lg text-gray-600 mb-6">
                Мы — команда профессионалов, которая уже более 10 лет помогает
                бизнесу расти и развиваться с помощью современных технологий и
                инновационных подходов.
              </p>
              <p className="text-lg text-gray-600 mb-8">
                Наша миссия — делать сложные вещи простыми, а невозможное —
                возможным. Каждый проект для нас — это возможность создать
                что-то уникальное.
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

      {/* Contact Section */}
      <section id="contact" className="px-6 py-16 bg-white">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Свяжитесь с нами
          </h2>
          <p className="text-xl text-gray-600 mb-12">
            Готовы обсудить ваш проект? Мы всегда на связи!
          </p>

          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Phone" className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Телефон</h3>
              <p className="text-gray-600">+7 (999) 123-45-67</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="Mail" className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Email</h3>
              <p className="text-gray-600">info@company.ru</p>
            </div>

            <div className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name="MapPin" className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">Адрес</h3>
              <p className="text-gray-600">Москва, ул. Примерная, 123</p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white px-6 py-12">
        <div className="max-w-6xl mx-auto text-center">
          <div className="flex items-center justify-center space-x-2 mb-6">
            <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
              <span className="text-white font-bold text-lg">Л</span>
            </div>
            <span className="text-xl font-semibold">Ваша Компания</span>
          </div>
          <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
            Создаем будущее вместе с вами. Инновации, качество и надёжность —
            основа нашей работы.
          </p>
          <div className="flex justify-center space-x-6">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Facebook" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Twitter" className="w-6 h-6" />
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name="Linkedin" className="w-6 h-6" />
            </a>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8">
            <p className="text-gray-400">
              © 2024 Ваша Компания. Все права защищены.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;
