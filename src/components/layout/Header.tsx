import Icon from "@/components/ui/icon";

const Header = () => {
  return (
    <header className="w-full px-6 py-4 bg-white/80 backdrop-blur-sm border-b">
      <div className="max-w-6xl mx-auto flex items-center justify-between">
        <div className="flex items-center space-x-2">
          <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">T</span>
          </div>
          <span className="text-xl font-semibold text-gray-800">TeamLink</span>
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
  );
};

export default Header;
