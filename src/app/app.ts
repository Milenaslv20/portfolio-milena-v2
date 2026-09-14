import { Component, signal, AfterViewInit, HostListener } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Lang = 'pt' | 'en';

export interface Project {
  name: string;
  description: string;
  tags: string[];
  liveUrl?: string;
  repoUrl?: string;
  bgImage?: string;
}

export interface Translation {
  nav: { about: string; projects: string; contact: string; thanks: string };
  hero: { title: string; subtitle: string; cta: string; ctaLink: string };
  about: { title: string; lang: string; paragraphs: string[]; skills: string; langs: string };
  projects: { title: string; items: Project[] };
  contact: { title: string; subtitle: string; emailLabel: string; phoneLabel: string; locationLabel: string; linkedinLabel: string };
  thanks: { title: string; message: string; cta: string };
  footer: string;
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    nav: { about: 'Sobre Mim', projects: 'Projetos', contact: 'Contato', thanks: 'Agradecimento' },
    hero: {
      title: 'Desenvolvedora de sistemas',
      subtitle: 'Neste portfólio, compartilho projetos que refletem meu aprendizado e busca por soluções eficientes e inovadoras. Seja bem-vindo(a) e fique à vontade!',
      cta: 'Sobre Mim',
      ctaLink: '#sobre'
    },
    about: {
      title: 'Sobre Mim',
      lang: 'Idiomas',
      langs: 'Inglês',
      paragraphs: [
        'Profissional em Análise e Desenvolvimento de Sistemas com experiência no desenvolvimento de aplicações web fullstack, visualização e modelagem de bancos de dados. Atuo na aplicação de soluções eficientes e otimização de processos, combinando conhecimento técnico e aprendizado contínuo.',
      ],
      skills: 'Tecnologias'
    },
    projects: {
      title: 'Projetos',
      items: [
        { name: 'E-commerce Moderno', description: 'Loja virtual completa com carrinho de compras, filtros avançados e checkout integrado.', tags: ['Angular', 'TypeScript', 'SCSS'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Dashboard Analytics', description: 'Painel de métricas em tempo real com gráficos interativos e exportação de relatórios.', tags: ['Angular', 'Charts', 'REST API'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'App de Tarefas', description: 'Gerenciador de tarefas com modo offline, notificações e sincronização em nuvem.', tags: ['TypeScript', 'PWA', 'Firebase'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Blog Pessoal', description: 'Plataforma de publicação com editor rico, busca por tags e modo de leitura confortável.', tags: ['Angular', 'Markdown', 'SEO'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'App de Chat', description: 'Mensageiro em tempo real com conversas privadas, notificações e envio de arquivos.', tags: ['TypeScript', 'WebSocket', 'Firebase'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'App do Clima', description: 'Previsão do tempo com geolocalização, gráficos semanais e temas claro/escuro.', tags: ['Angular', 'API', 'PWA'], bgImage: 'images/project-bg/mountain.png' }
      ]
    },
    contact: {
      title: 'Contato',
      subtitle: 'Para dúvidas, sugestões ou apenas para dizer olá, sinta-se à vontade para entrar em contato',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      linkedinLabel: 'LinkedIn'
    },
    thanks: {
      title: 'Obrigada!',
      message: 'Agradeço sua visita! A tecnologia tem o poder de conectar pessoas, transformar ideias em realidade e criar soluções que fazem a diferença. Cada projeto compartilhado representa uma oportunidade de aprendizado e evolução. Agradeço por acompanhar meu trabalho e opiniões e sugestões são sempre muito bem-vindas!',
      cta: 'Voltar ao topo'
    },
    footer: '© 2026 Por Milena Medeiros'
  },

  en: {
    nav: { about: 'About Me', projects: 'Projects', contact: 'Contact', thanks: 'Thank You' },
    hero: {
      title: 'System Developer',
      subtitle: 'In this portfolio, I share projects that reflect my learning and search for efficient and innovative solutions. Welcome and feel free to explore!',
      cta: 'About Me',
      ctaLink: '#sobre'
    },
    about: {
      title: 'About Me',
      lang: 'Languages',
      langs: 'English',
      paragraphs: [
        'Professional with experience in analysis and development of full-stack applications, data visualization and modeling. I work on applying efficient solutions and process optimization, combining technical knowledge and continuous learning.',
      ],
      skills: 'Technologies'
    },
    projects: {
      title: 'Projects',
      items: [
        { name: 'Modern E-commerce', description: 'Full online store with shopping cart, advanced filters and integrated checkout.', tags: ['Angular', 'TypeScript', 'SCSS'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Analytics Dashboard', description: 'Real-time metrics panel with interactive charts and report export.', tags: ['Angular', 'Charts', 'REST API'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Task Manager', description: 'Task manager with offline mode, notifications and cloud sync.', tags: ['TypeScript', 'PWA', 'Firebase'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Personal Blog', description: 'Publishing platform with rich editor, tag search and comfortable reading mode.', tags: ['Angular', 'Markdown', 'SEO'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Chat App', description: 'Real-time messenger with private conversations, notifications and file sharing.', tags: ['TypeScript', 'WebSocket', 'Firebase'], bgImage: 'images/project-bg/mountain.png' },
        { name: 'Weather App', description: 'Weather forecast with geolocation, weekly charts and light/dark themes.', tags: ['Angular', 'API', 'PWA'], bgImage: 'images/project-bg/mountain.png' }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Did you like what you see or have a question? Feel free to reach out! You can find me on the following channels',
      emailLabel: 'E-mail',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      linkedinLabel: 'LinkedIn'
    },
    thanks: {
      title: 'Thanks',
      message: 'Thanks for your visit! Technology has the power to connect people, turn ideas into reality and create solutions that make a difference. Each shared project represents an opportunity to learn and grow. Thanks for following my work — opinions and suggestions are always welcome!',
      cta: 'Back to top'
    },
    footer: '© 2026 By Milena Medeiros'
  }
};

@Component({
  selector: 'app-root',
  imports: [CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements AfterViewInit {
  protected readonly lang = signal<Lang>('pt');
  protected readonly menuOpen = signal(false);
  protected readonly translations = TRANSLATIONS;
  protected readonly skills = ['Angular', 'NodeJS', 'HTML', 'CSS', 'SQL', 'JavaScript', 'React'];

  protected get t(): Translation {
    return this.translations[this.lang()];
  }

  ngAfterViewInit(): void {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('revealed');
          }
        }
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));

    const sectionIds = ['inicio', 'sobre', 'projetos', 'contato', 'agradecimento'];
    const navLinks = document.querySelectorAll('.nav a');

    const sectionObserver = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            const id = entry.target.getAttribute('id');
            navLinks.forEach((link) => {
              const href = link.getAttribute('href');
              link.classList.toggle('active', href === `#${id}`);
            });
          }
        }
      },
      { threshold: 0.3, rootMargin: '-80px 0px -40% 0px' }
    );

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (el) sectionObserver.observe(el);
    });
  }

  protected toggleLang(): void {
    this.lang.update((current) => {
      const next = current === 'pt' ? 'en' : 'pt';
      document.documentElement.setAttribute('lang', next);
      return next;
    });
  }

  protected toggleMenu(): void {
    this.menuOpen.update((open) => !open);
  }

  protected closeMenu(): void {
    this.menuOpen.set(false);
  }

  @HostListener('document:keydown.escape')
  protected closeMenuWithEscape(): void {
    this.closeMenu();
  }

  protected scrollTo(id: string): void {
    this.closeMenu();
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
