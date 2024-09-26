export const createPostPrompt = (subject: string) => `
  Crie uma postagem altamente envolvente para o LinkedIn sobre um tópico inovador relacionado à área de ${subject}.
  A postagem deve:
  - Explorar uma tendência ou tecnologia emergente que esteja moldando o futuro do setor.
  - Fornecer exemplos práticos de como isso já está impactando profissionais e empresas.
  - Oferecer insights valiosos para ajudar os leitores a entenderem os desafios e oportunidades relacionados a essa inovação.
  - Promover o engajamento dos leitores com uma chamada para ação, incentivando-os a compartilhar suas opiniões ou fazer perguntas.
  - Terminar com uma provocação instigante, como: "Como você está se preparando para essa transformação na área de ${subject}? Compartilhe nos comentários!"
  - Use um tom profissional, mas convidativo, próprio para uma audiência de LinkedIn, e mantenha o texto com até 1000 palavras.
`;
