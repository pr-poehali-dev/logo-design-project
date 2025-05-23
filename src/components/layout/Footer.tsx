import Icon from "@/components/ui/icon";

const Footer = () => {
  const socialLinks = [
    { icon: "Facebook", href: "#" },
    { icon: "Twitter", href: "#" },
    { icon: "Linkedin", href: "#" },
  ];

  return (
    <footer className="bg-gray-900 text-white px-6 py-12">
      <div className="max-w-6xl mx-auto text-center">
        <div className="flex items-center justify-center space-x-2 mb-6">
          <div className="w-10 h-10 bg-violet-600 rounded-lg flex items-center justify-center">
            <span className="text-white font-bold text-lg">Л</span>
          </div>
          <span className="text-xl font-semibold">TeamLink</span>
        </div>
        <p className="text-gray-400 mb-6 max-w-2xl mx-auto">
          Создаем будущее вместе с вами. Инновации, качество и надёжность —
          основа нашей работы.
        </p>
        <div className="flex justify-center space-x-6">
          {socialLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="text-gray-400 hover:text-white transition-colors"
            >
              <Icon name={link.icon} className="w-6 h-6" />
            </a>
          ))}
        </div>
        <div className="border-t border-gray-800 mt-8 pt-8">
          <p className="text-gray-400">
            © 2024 Ваша Компания. Все права защищены.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
