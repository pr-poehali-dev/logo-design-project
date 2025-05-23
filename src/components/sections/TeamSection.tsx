import Icon from "@/components/ui/icon";

const TeamSection = () => {
  const team = [
    {
      name: "Анна",
      role: "Главный HR-партнёр",
      description:
        "Знает, как выглядит идеальный кандидат для e-commerce, производства и других отраслей. Сопровождает клиентов на всех этапах — от первой заявки до выхода нового сотрудника в офис.",
      icon: "Crown",
    },
    {
      name: "Светлана",
      role: "Специалист по кадровому аудиту",
      description:
        "Проверяет кадровые документы, помогает наладить HR-процессы и минимизировать риски. Работает в команде на проектной основе.",
      icon: "FileCheck",
    },
    {
      name: "Дмитрий",
      role: "Эксперт по оценке персонала",
      description:
        "Разрабатывает индивидуальные схемы оценки, проводит ассессмент-центры и помогает выявлять таланты внутри команды клиентов.",
      icon: "Target",
    },
    {
      name: "Мария",
      role: "Координатор проектов",
      description:
        "Следит за тем, чтобы все процессы шли гладко, а встречи проходили вовремя. Улыбка — обязательная часть её рабочего процесса.",
      icon: "Calendar",
    },
  ];

  return (
    <section
      id="team"
      className="px-6 py-16 bg-gradient-to-br from-violet-50 to-green-50"
    >
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-gray-900 mb-4">
            Наша команда ✨
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Небольшая, но зато каждая встреча с нами — это внимание,
            вовлечённость и результат
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {team.map((member, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-6 shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="w-16 h-16 bg-gradient-to-br from-violet-500 to-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                <Icon name={member.icon} className="w-8 h-8 text-white" />
              </div>
              <h3 className="text-xl font-bold text-gray-900 mb-2 text-center">
                {member.name}
              </h3>
              <p className="text-violet-600 font-semibold mb-3 text-center">
                {member.role}
              </p>
              <p className="text-gray-600 text-sm">{member.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 bg-white rounded-2xl p-8 shadow-lg">
          <h3 className="text-2xl font-bold text-gray-900 mb-4 text-center">
            Немного о нас 🚀
          </h3>
          <p className="text-lg text-gray-600 text-center max-w-4xl mx-auto">
            Мы работаем гибко: основная команда — это наше ядро, а под проекты
            мы привлекаем проверенных специалистов. Благодаря этому наши клиенты
            получают внимание небольшого агентства и возможности большой
            команды.
          </p>
        </div>
      </div>
    </section>
  );
};

export default TeamSection;
