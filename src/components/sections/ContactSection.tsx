import Icon from "@/components/ui/icon";

const ContactSection = () => {
  const contacts = [
    {
      icon: "Phone",
      title: "Телефон",
      info: "+7 (999) 123-45-67",
    },
    {
      icon: "Mail",
      title: "Email",
      info: "info@company.ru",
    },
    {
      icon: "MapPin",
      title: "Адрес",
      info: "Москва, ул. Примерная, 123",
    },
  ];

  return (
    <section id="contact" className="px-6 py-16 bg-white">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl font-bold text-gray-900 mb-4">
          Свяжитесь с нами
        </h2>
        <p className="text-xl text-gray-600 mb-12">
          Готовы обсудить ваш проект? Мы всегда на связи!
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-12">
          {contacts.map((contact, index) => (
            <div key={index} className="text-center">
              <div className="w-16 h-16 bg-violet-100 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={contact.icon} className="w-8 h-8 text-violet-600" />
              </div>
              <h3 className="font-semibold text-gray-900 mb-2">
                {contact.title}
              </h3>
              <p className="text-gray-600">{contact.info}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactSection;
