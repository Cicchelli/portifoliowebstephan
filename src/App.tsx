import React, { useState, useEffect } from 'react';
import { useInView } from 'react-intersection-observer';
import { Sun, Moon, Github, Linkedin, Mail, Phone, MapPin, BriefcaseIcon, GraduationCap, Code, Wrench, Award, LineChart, Factory, Brain } from 'lucide-react';

// Components
const Section = ({ children, className = '' }: { children: React.ReactNode; className?: string }) => {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  return (
    <section
      ref={ref}
      className={`transition-all duration-1000 ${
        inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-10'
      } ${className}`}
    >
      {children}
    </section>
  );
};

const ExperienceCard = ({ title, company, period, description }: { 
  title: string;
  company: string;
  period: string;
  description: string;
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
    <h3 className="text-xl font-bold">{title}</h3>
    <p className="text-blue-600 dark:text-blue-400">{company} | {period}</p>
    <div className="mt-4 text-gray-600 dark:text-gray-300 space-y-2">
      {description.split('\n').map((item, index) => (
        <p key={index}>{item}</p>
      ))}
    </div>
  </div>
);

const ServiceCard = ({ icon: Icon, title, items }: {
  icon: React.ElementType;
  title: string;
  items: string[];
}) => (
  <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-all">
    <Icon className="w-12 h-12 text-blue-600 mb-4" />
    <h3 className="text-xl font-bold mb-4">{title}</h3>
    <ul className="list-disc list-inside text-gray-600 dark:text-gray-300 space-y-2">
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </ul>
  </div>
);

function App() {
  const [darkMode, setDarkMode] = useState(false);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className="min-h-screen bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-white transition-colors duration-300">
      {/* Header */}
      <header className="fixed w-full bg-white dark:bg-gray-800 shadow-md z-50">
        <nav className="container mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <h1 className="text-2xl font-bold">Stephan Cicchelli</h1>
            <button
              onClick={() => setDarkMode(!darkMode)}
              className="p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-700"
            >
              {darkMode ? <Sun className="w-6 h-6" /> : <Moon className="w-6 h-6" />}
            </button>
          </div>
        </nav>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-6 pt-24 pb-12">
        {/* Hero Section */}
        <Section className="flex flex-col md:flex-row items-center justify-between gap-12 mb-20">
          <div className="flex-1">
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Stephan Valderrama de Queiroz Cicchelli
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8">
              Engenheiro de Produção | Especialista em Normas Regulamentadoras | Coordenador de Projetos
            </p>
            <div className="flex gap-4">
              <a href="https://www.linkedin.com/in/stephancicchelli/" target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:text-blue-800">
                <Linkedin className="w-6 h-6" />
              </a>
              <a href="mailto:stephan.cicchelli@outlook.com" className="text-blue-600 hover:text-blue-800">
                <Mail className="w-6 h-6" />
              </a>
            </div>
          </div>
          <div className="flex-1">
            <img
              src="https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&w=800"
              alt="Stephan Cicchelli"
              className="rounded-lg shadow-2xl"
            />
          </div>
        </Section>

        {/* Sobre Mim */}
        <Section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Sobre Mim</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Profissional com mais de 15 anos de experiência em coordenação de projetos, gestão de processos, 
              melhoria contínua e engenharia de segurança do trabalho. Atuo na liderança de equipes interdisciplinares, 
              implementação de estratégias para otimização de processos e desenvolvimento de soluções inovadoras com 
              foco em sustentabilidade, segurança e eficiência operacional.
            </p>
            <p className="text-lg text-gray-600 dark:text-gray-300 leading-relaxed">
              Certificações em Lean Six Sigma (Black Belt), Engenharia de Segurança do Trabalho e Desenvolvimento FullStack 
              complementam minha formação e ampliam minha capacidade de solução de problemas complexos.
            </p>
          </div>
        </Section>

        {/* Serviços */}
        <Section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Serviços Oferecidos</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <ServiceCard
              icon={BriefcaseIcon}
              title="Coordenação de Projetos"
              items={[
                "Planejamento e gestão de cronogramas e orçamentos",
                "Liderança de equipes interdisciplinares",
                "Implementação de inovação e sustentabilidade",
                "Monitoramento de KPIs e melhoria contínua"
              ]}
            />
            <ServiceCard
              icon={Wrench}
              title="Consultoria em Segurança"
              items={[
                "Avaliação e adequação às NRs",
                "Análise de riscos e medidas corretivas",
                "Elaboração de planos de segurança",
                "Auditorias de conformidade"
              ]}
            />
            <ServiceCard
              icon={LineChart}
              title="Melhoria Contínua"
              items={[
                "Diagnóstico de processos produtivos",
                "Implementação de metodologias Lean",
                "Redução de desperdícios",
                "Treinamento de equipes"
              ]}
            />
            <ServiceCard
              icon={Factory}
              title="Engenharia de Processos"
              items={[
                "Desenvolvimento e inovação",
                "Análise de viabilidade econômica",
                "Controle de CAPEX/OPEX",
                "Redução de custos"
              ]}
            />
            <ServiceCard
              icon={Brain}
              title="Soluções Tecnológicas"
              items={[
                "Ferramentas digitais para gestão",
                "Desenvolvimento fullstack",
                "Análise de dados",
                "Automação de processos"
              ]}
            />
          </div>
        </Section>

        {/* Experiência */}
        <Section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Experiência Profissional</h2>
          <div className="space-y-8">
            <ExperienceCard
              title="Coordenador de Projetos"
              company="Unilever"
              period="2025 - Atual"
              description="Atuação na unidade da Unilever, uma fábrica modelo da Indústria 4.0, com foco em inovação e sustentabilidade. Experiência consolidada na liderança de equipes interfuncionais, fomentando a colaboração entre diferentes stakeholders para garantir a integração eficaz das iniciativas. Forte competência no planejamento e execução de cronogramas, controle orçamentário e asseguramento da qualidade das entregas."
            />
            <ExperienceCard
              title="Coordenador de Projetos"
              company="General Mills"
              period="2024"
              description="Coordenação de projetos multidisciplinares: atuando em diferentes setores com foco em inovação e sustentabilidade. Habilidade comprovada na liderança de equipes diversas e interfuncionais, promovendo a colaboração eficaz entre as partes interessadas. Expertise no gerenciamento de cronogramas, controle de custos e garantia da qualidade nas entregas."
            />
            <ExperienceCard
              title="Engenheiro"
              company="Vale"
              period="2020-2022"
              description="Gestão de Projetos de Manutenção: Condução da implantação de processos de Planejamento e Controle da Manutenção nas Usinas de S11D.\nCoordenação de Melhoria Contínua: Liderança de projetos utilizando ferramentas de Lean Manufacturing e Six Sigma.\nPromoção da Excelência Operacional: Difusão do Vale Production System (VPS) para promover a cultura de excelência operacional."
            />
            <ExperienceCard
              title="Engenheiro de Melhoria Contínua"
              company="Newell Brands"
              period="2017-2020"
              description="Coordenação de projetos de melhoria contínua utilizando Lean Manufacturing e Six Sigma.\nImplementação e monitoramento do sistema de eficiência operacional (OEE).\nEstudo da viabilidade econômica de novos processos, incluindo análise de valor (VA/VE) e controle de CAPEX/OPEX.\nDesenvolvimento de tecnologias e componentes para máquinas, resultando em economias de R$ 4.000.000,00/ano."
            />
          </div>
        </Section>

        {/* Certificações */}
        <Section className="mb-20">
          <h2 className="text-3xl font-bold mb-8">Certificações e Qualificações</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <Award className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Black Belt Lean Six Sigma</h3>
              <p className="text-gray-600 dark:text-gray-300">FEPI</p>
            </div>
            <div className="bg-white dark:bg-gray-800 p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow">
              <GraduationCap className="w-8 h-8 text-blue-600 mb-4" />
              <h3 className="text-xl font-bold mb-2">Engenharia de Segurança do Trabalho</h3>
              <p className="text-gray-600 dark:text-gray-300">IF Sul de Minas Gerais</p>
            </div>
          </div>
        </Section>

        {/* Contato */}
        <Section>
          <h2 className="text-3xl font-bold mb-8">Contato</h2>
          <div className="bg-white dark:bg-gray-800 p-8 rounded-lg shadow-lg">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <MapPin className="w-6 h-6 text-blue-600" />
                  <span>Pouso Alegre - MG</span>
                </div>
                <div className="flex items-center gap-4">
                  <Mail className="w-6 h-6 text-blue-600" />
                  <a href="mailto:stephan.cicchelli@outlook.com" className="hover:text-blue-600">
                    stephan.cicchelli@outlook.com
                  </a>
                </div>
                <div className="flex items-center gap-4">
                  <Phone className="w-6 h-6 text-blue-600" />
                  <span>(35) 99176-1212</span>
                </div>
                <div className="flex items-center gap-4">
                  <Linkedin className="w-6 h-6 text-blue-600" />
                  <a
                    href="https://www.linkedin.com/in/stephancicchelli/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="hover:text-blue-600"
                  >
                    LinkedIn
                  </a>
                </div>
              </div>
              <form className="space-y-4">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Nome
                  </label>
                  <input
                    type="text"
                    id="name"
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Mensagem
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-2 rounded-lg border dark:bg-gray-700 dark:border-gray-600"
                  ></textarea>
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 text-white py-2 px-4 rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Enviar Mensagem
                </button>
              </form>
            </div>
          </div>
        </Section>
      </main>

      {/* Footer */}
      <footer className="bg-white dark:bg-gray-800 py-8">
        <div className="container mx-auto px-6 text-center">
          <p className="text-gray-600 dark:text-gray-300">
            © 2024 Stephan Cicchelli. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
}

export default App;