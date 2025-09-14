export function usePortfolioData() {
  const skills = [
    { name: "TypeScript", icon: "lucide:code-2" },
    { name: "Vue 3", icon: "lucide:triangle" },
    { name: "Nuxt 4", icon: "lucide:component" },
    { name: "Tailwind CSS", icon: "lucide:layers" },
    { name: "Node.js", icon: "lucide:server" },
    { name: "PostgreSQL", icon: "lucide:database" },
    { name: "Docker", icon: "lucide:boxes" },
    { name: "Git", icon: "lucide:git-branch" },
  ];

  const projects = [
    {
      title: "Project Alpha",
      description:
        "Full-stack app with real-time features and scalable architecture.",
      tags: ["Nuxt", "WebSocket", "PostgreSQL"],
      github: "https://github.com/yourname/project-alpha",
      demo: "#",
    },
    {
      title: "UI Component Library",
      description: "Reusable accessible components with Tailwind & Storybook.",
      tags: ["Tailwind", "Design System"],
      github: "https://github.com/yourname/ui-library",
      demo: "#",
    },
    {
      title: "DevOps Toolkit",
      description: "CLI + dashboard for deployment automation.",
      tags: ["Node", "Docker", "CI/CD"],
      github: "https://github.com/yourname/devops-toolkit",
      demo: "#",
    },
  ];

  const contacts = [
    {
      label: "GitHub",
      url: "https://github.com/yourname",
      icon: "lucide:github",
    },
    {
      label: "LinkedIn",
      url: "https://linkedin.com/in/yourname",
      icon: "lucide:linkedin",
    },
    { label: "Telegram", url: "https://t.me/yourname", icon: "lucide:send" },
    { label: "Email", url: "mailto:you@example.com", icon: "lucide:mail" },
  ];

  return { skills, projects, contacts };
}
