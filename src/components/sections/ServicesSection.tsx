import ServiceCard from "@/components/ui/ServiceCard";

const ServicesSection = () => {
  const services = [
    {
      icon: "UserSearch",
      iconColor: "text-violet-600",
      bgColor: "bg-violet-100",
      title: "Подбор персонала 👨‍💻👩‍💼",
      description:
        "Найдем именно тех, кто нужен вашему бизнесу. От линейных сотрудников до руководителей — только лучшие!",
    },
    {
      icon: "ClipboardCheck",
      iconColor: "text-green-600",
      bgColor: "bg-green-100",
      title: "Кадровый аудит 📊",
      description:
        "Разберем все процессы и поможем настроить идеальную систему управления персоналом",
    },
    {
      icon: "TrendingUp",
      iconColor: "text-blue-600",
      bgColor: "bg-blue-100",
      title: "Оценка персонала 🚀",
      description:
        "Выявим сильные стороны ваших сотрудников и поможем им стать еще эффективнее!",
    },
  ];

  return (
    <section id="services" className="px-6 py-16 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Что мы предлагаем 🎯
          </h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Удобные пакетные решения, чтобы все ваши HR-задачи решались легко и
            без головной боли
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
