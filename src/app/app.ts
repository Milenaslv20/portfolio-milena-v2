import { Component, signal, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';

export type Lang = 'pt' | 'en';

export interface Project {
  name: string;
  description: string;
  tags: string[];
}

export interface Translation {
  nav: { about: string; projects: string; contact: string; thanks: string };
  hero: { subtitle: string; cta: string; ctaLink: string };
  about: { title: string; lang: string; paragraphs: string[]; skills: string };
  projects: { title: string; subtitle: string; items: Project[] };
  contact: { title: string; subtitle: string; emailLabel: string; phoneLabel: string; locationLabel: string; linkedinLabel: string };
  thanks: { title: string; message: string; cta: string };
  footer: string;
}

export const TRANSLATIONS: Record<Lang, Translation> = {
  pt: {
    nav: { about: 'Sobre Mim', projects: 'Projetos', contact: 'Contato', thanks: 'Agradecimento' },
    hero: {
      //title: 'Olá, eu sou Milena Medeiros',
      subtitle: 'Olá! Sou Milena, desenvolvedora de sistemas em constante evolução. Neste portfólio, compartilho projetos que refletem meu aprendizado e busca por soluções eficientes e inovadoras.',
      cta: 'Sobre Mim',
      ctaLink: '#sobre-mim'
    },
    about: {
      title: 'Sobre Mim',
      lang: 'Idiomas',
      paragraphs: [
        'Profissional em Análise e Desenvolvimento de Sistemas com experiência no desenvolvimento de aplicações web fullstack, visualização e modelagem de bancos de dados. Entusiasta de tecnologia, resolução de problemas e otimização de processos, em busca de aprendizado contínuo.',
      ],
      skills: 'Tecnologias'
    },
    projects: {
      title: 'Projetos',
      subtitle: 'Alguns trabalhos e projetos que desenvolvi.',
      items: [
        { name: 'E-commerce Moderno', description: 'Loja virtual completa com carrinho de compras, filtros avançados e checkout integrado.', tags: ['Angular', 'TypeScript', 'SCSS'] },
        { name: 'Dashboard Analytics', description: 'Painel de métricas em tempo real com gráficos interativos e exportação de relatórios.', tags: ['Angular', 'Charts', 'REST API'] },
        { name: 'App de Tarefas', description: 'Gerenciador de tarefas com modo offline, notificações e sincronização em nuvem.', tags: ['TypeScript', 'PWA', 'Firebase'] },
        { name: 'Blog Pessoal', description: 'Plataforma de publicação com editor rico, busca por tags e modo de leitura confortável.', tags: ['Angular', 'Markdown', 'SEO'] },
        { name: 'App de Chat', description: 'Mensageiro em tempo real com conversas privadas, notificações e envio de arquivos.', tags: ['TypeScript', 'WebSocket', 'Firebase'] },
        { name: 'App do Clima', description: 'Previsão do tempo com geolocalização, gráficos semanais e temas claro/escuro.', tags: ['Angular', 'API', 'PWA'] }
      ]
    },
    contact: {
      title: 'Contato',
      subtitle: 'Vamos conversar? Fale comigo pelos canais abaixo.',
      emailLabel: 'E-mail',
      phoneLabel: 'Telefone',
      locationLabel: 'Localização',
      linkedinLabel: 'LinkedIn'
    },
    thanks: {
      title: 'Obrigada!',
      message: 'Agradeço por dedicar seu tempo para conhecer meu trabalho. Seu interesse é muito importante para mim.',
      cta: 'Voltar ao topo'
    },
    footer: '© 2026 Milena Medeiros — Desenvolvido com Angular.'
  },

  en: {
    nav: { about: 'About Me', projects: 'Projects', contact: 'Contact', thanks: 'Thank You' },
    hero: {
      //title: 'Hi, I am Milena Medeiros',
      subtitle: 'Frontend Developer passionate about creating modern, accessible and elegant digital experiences.',
      cta: 'See Projects',
      ctaLink: '#projects'
    },
    about: {
      title: 'About Me',
      lang: 'Languages',
      paragraphs: [
        'I work with web development building responsive, performant applications with a strong focus on accessibility.',
        'I have experience with Angular, TypeScript, HTML, CSS and SCSS, always pursuing best practices and clean code.',
        'I believe technology transforms lives, and every project is an opportunity to make a difference.'
      ],
      skills: 'Technologies'
    },
    projects: {
      title: 'Projects',
      subtitle: 'Some of the work and projects I have developed.',
      items: [
        { name: 'Modern E-commerce', description: 'Full online store with shopping cart, advanced filters and integrated checkout.', tags: ['Angular', 'TypeScript', 'SCSS'] },
        { name: 'Analytics Dashboard', description: 'Real-time metrics panel with interactive charts and report export.', tags: ['Angular', 'Charts', 'REST API'] },
        { name: 'Task Manager', description: 'Task manager with offline mode, notifications and cloud sync.', tags: ['TypeScript', 'PWA', 'Firebase'] },
        { name: 'Personal Blog', description: 'Publishing platform with rich editor, tag search and comfortable reading mode.', tags: ['Angular', 'Markdown', 'SEO'] },
        { name: 'Chat App', description: 'Real-time messenger with private conversations, notifications and file sharing.', tags: ['TypeScript', 'WebSocket', 'Firebase'] },
        { name: 'Weather App', description: 'Weather forecast with geolocation, weekly charts and light/dark themes.', tags: ['Angular', 'API', 'PWA'] }
      ]
    },
    contact: {
      title: 'Contact',
      subtitle: 'Let’s talk? Reach me through the channels below.',
      emailLabel: 'E-mail',
      phoneLabel: 'Phone',
      locationLabel: 'Location',
      linkedinLabel: 'LinkedIn'
    },
    thanks: {
      title: 'Thank You!',
      message: 'I appreciate you taking the time to learn about my work. Your interest means a lot to me.',
      cta: 'Back to top'
    },
    footer: '© 2026 Milena Medeiros — Built with Angular.'
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
            observer.unobserve(entry.target);
          }
        }
      },
      { threshold: 0.15 }
    );

    document.querySelectorAll('.reveal').forEach((el) => observer.observe(el));
  }

  protected toggleLang(): void {
    this.lang.update((current) => (current === 'pt' ? 'en' : 'pt'));
  }

  protected scrollTo(id: string): void {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  }
}
