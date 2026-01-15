import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import Icon from "@/components/ui/icon";
import { useState } from "react";

const Index = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({ name: "", contact: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    setTimeout(() => {
      toast({
        title: "Заявка отправлена!",
        description: "Аксиния свяжется с вами в ближайшее время.",
      });
      setFormData({ name: "", contact: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const services = [
    {
      icon: "Plane",
      title: "Туры по всему миру",
      description: "Пляжный отдых, экскурсии, горнолыжные курорты"
    },
    {
      icon: "Hotel",
      title: "Подбор отелей",
      description: "От эконом до премиум класса под любой бюджет"
    },
    {
      icon: "Ship",
      title: "Круизы",
      description: "Морские и речные путешествия по лучшим маршрутам"
    },
    {
      icon: "Palmtree",
      title: "Экзотические направления",
      description: "Мальдивы, Бали, Сейшелы и другие райские уголки"
    },
    {
      icon: "Mountain",
      title: "Горнолыжные туры",
      description: "Альпы, Кавказ, лучшие склоны Европы и России"
    },
    {
      icon: "Ticket",
      title: "Авиабилеты и визы",
      description: "Полное сопровождение от бронирования до вылета"
    }
  ];

  const advantages = [
    {
      icon: "Clock",
      title: "На связи 24/7",
      description: "Всегда готова помочь и ответить на вопросы"
    },
    {
      icon: "Shield",
      title: "Безопасность",
      description: "Работаю с надежными туроператорами в реестре"
    },
    {
      icon: "Heart",
      title: "Забота о каждом",
      description: "Сопровождение от обращения до возвращения домой"
    },
    {
      icon: "Sparkles",
      title: "Индивидуальный подход",
      description: "Подберу тур именно под ваши желания и бюджет"
    }
  ];



  return (
    <div className="min-h-screen">
      <header className="fixed top-0 w-full bg-white/95 backdrop-blur-sm shadow-sm z-50">
        <nav className="container mx-auto px-4 py-4 flex justify-between items-center">
          <div className="flex items-center gap-2">
            <Icon name="Palmtree" className="text-primary" size={28} />
            <span className="font-bold text-xl">LadyOnTravel</span>
          </div>
          <div className="hidden md:flex gap-6">
            <button onClick={() => scrollToSection("services")} className="hover:text-primary transition">
              Услуги
            </button>
            <button onClick={() => scrollToSection("about")} className="hover:text-primary transition">
              Обо мне
            </button>

            <button onClick={() => scrollToSection("contact")} className="hover:text-primary transition">
              Контакты
            </button>
          </div>
          <Button onClick={() => window.location.href = "tel:+79057973311"} className="hidden md:flex">
            <Icon name="Phone" size={18} className="mr-2" />
            Позвонить
          </Button>
        </nav>
      </header>

      <section className="pt-32 pb-20 px-4 bg-gradient-to-br from-primary/10 via-secondary/10 to-accent/30 animate-fade-in">
        <div className="container mx-auto text-center">
          <div className="mb-8 inline-block">
            <img 
              src="https://cdn.poehali.dev/files/IMG_5099.png"
              alt="Аксиния"
              className="w-32 h-32 rounded-full object-cover mx-auto shadow-2xl border-4 border-white"
            />
          </div>
          <h1 className="text-5xl md:text-6xl font-bold mb-6 bg-gradient-to-r from-primary via-secondary to-primary bg-clip-text text-transparent">
            Аксиния — ваш личный турагент
          </h1>
          <p className="text-lg md:text-xl mb-8 text-gray-700 max-w-3xl mx-auto">
            Помогу найти идеальный тур, забронирую отель мечты и буду рядом 24/7
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button 
              size="lg" 
              onClick={() => window.location.href = "tel:+79057973311"}
              className="text-lg hover-scale bg-gradient-to-r from-primary to-secondary hover:opacity-90"
            >
              <Icon name="Phone" size={20} className="mr-2" />
              Позвонить сейчас
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              onClick={() => scrollToSection("services")}
              className="text-lg hover-scale border-2"
            >
              <Icon name="Sparkles" size={20} className="mr-2" />
              Узнать больше
            </Button>
          </div>
        </div>
      </section>

      <section id="services" className="py-20 px-4 bg-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-4">Услуги</h2>
          <p className="text-center text-gray-600 mb-12 max-w-2xl mx-auto">
            Подберу идеальный отдых под любой запрос и бюджет
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <Card key={index} className="hover-scale cursor-pointer border-2 hover:border-primary transition-all">
                <CardContent className="p-6">
                  <div className="w-16 h-16 bg-gradient-to-br from-primary to-secondary rounded-2xl flex items-center justify-center mb-4">
                    <Icon name={service.icon as any} size={32} className="text-white" />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
                  <p className="text-gray-600">{service.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section id="about" className="py-20 px-4 bg-gradient-to-br from-accent/20 to-primary/5">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-4xl font-bold mb-6">Обо мне</h2>
              <p className="text-lg text-gray-700 mb-6">
                Меня зовут Аксиния, я работаю в турагентстве <span className="font-semibold text-primary">LadyOnTravel</span> и помогаю людям воплощать мечты о путешествиях в реальность.
              </p>
              <p className="text-lg text-gray-700 mb-8">
                Моя миссия — не просто продать тур, а создать незабываемые впечатления. Я забочусь о каждой детали вашего путешествия и всегда остаюсь на связи.
              </p>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {advantages.map((adv, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center flex-shrink-0">
                      <Icon name={adv.icon as any} size={24} className="text-primary" />
                    </div>
                    <div>
                      <h4 className="font-semibold mb-1">{adv.title}</h4>
                      <p className="text-sm text-gray-600">{adv.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <img 
                src="https://cdn.poehali.dev/projects/9aef2231-d61e-4f9e-ac76-4dfe8e28a393/files/0701d665-d9f6-4742-9d25-4c4a9ed4f79d.jpg"
                alt="Туризм"
                className="rounded-3xl shadow-2xl"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-gradient-to-br from-secondary to-primary rounded-3xl opacity-20 blur-2xl -z-10"></div>
            </div>
          </div>
        </div>
      </section>



      <section id="contact" className="py-20 px-4 bg-gradient-to-br from-primary via-secondary to-primary text-white">
        <div className="container mx-auto">
          <h2 className="text-4xl font-bold text-center mb-6">Свяжитесь со мной</h2>
          <p className="text-xl text-center mb-12 max-w-2xl mx-auto">
            Готова ответить на все вопросы и подобрать для вас идеальное путешествие
          </p>
          
          <div className="grid md:grid-cols-2 gap-12 max-w-5xl mx-auto">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Оставьте заявку</h3>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <Input
                    placeholder="Ваше имя"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  />
                </div>
                <div>
                  <Input
                    placeholder="Телефон или email"
                    value={formData.contact}
                    onChange={(e) => setFormData({ ...formData, contact: e.target.value })}
                    required
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white"
                  />
                </div>
                <div>
                  <Textarea
                    placeholder="Расскажите о желаемом путешествии"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    required
                    rows={5}
                    className="bg-white/10 border-white/30 text-white placeholder:text-white/60 focus:border-white resize-none"
                  />
                </div>
                <Button 
                  type="submit"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full bg-white text-primary hover:bg-white/90 text-lg"
                >
                  {isSubmitting ? "Отправка..." : "Отправить заявку"}
                </Button>
              </form>
            </div>

            <div className="flex flex-col justify-center">
              <h3 className="text-2xl font-semibold mb-6">Или свяжитесь напрямую</h3>
              <div className="space-y-4">
                <Button 
                  size="lg" 
                  variant="secondary"
                  onClick={() => window.location.href = "tel:+79057973311"}
                  className="w-full text-lg hover-scale bg-white text-primary hover:bg-white/90"
                >
                  <Icon name="Phone" size={20} className="mr-2" />
                  +7 (905) 797-33-11
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  onClick={() => window.open("https://wa.me/79057973311", "_blank")}
                  className="w-full text-lg hover-scale bg-transparent border-2 border-white text-white hover:bg-white/10"
                >
                  <Icon name="MessageCircle" size={20} className="mr-2" />
                  WhatsApp
                </Button>
              </div>
              <div className="space-y-3 mt-8">
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Icon name="ShieldCheck" size={18} />
                  <span>Работаю с надежными туроператорами в едином реестре</span>
                </div>
                <div className="flex items-center gap-2 text-sm opacity-90">
                  <Icon name="Badge" size={18} />
                  <span>Реестровый номер агентства: РТА 1 162</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <footer className="bg-gray-900 text-white py-8 px-4">
        <div className="container mx-auto text-center">
          <div className="flex items-center justify-center gap-2 mb-4">
            <Icon name="Palmtree" size={24} />
            <span className="font-bold text-xl">LadyOnTravel</span>
          </div>
          <p className="text-gray-400">© 2024 Аксиния. Турагентство LadyOnTravel</p>
        </div>
      </footer>
    </div>
  );
};

export default Index;