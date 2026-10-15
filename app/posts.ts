export type Post = {
  slug: string;
  title: string;
  dek: string;
  readingMinutes: number;
  date: string;
  tags: string[];
  sections: { heading: string; paragraphs: string[] }[];
  takeaway: string;
};

export const posts: Post[] = [
  {
    slug: "microbioma-oral",
    title: "O ecossistema invisível dentro da sua boca",
    dek: "Bilhões de micróbios moram entre os seus dentes — e a maioria deles está do seu lado.",
    readingMinutes: 4,
    date: "2026-10-15",
    tags: ["Microbioma", "Saúde bucal"],
    sections: [
      {
        heading: "Uma cidade microscópica atrás dos lábios",
        paragraphs: [
          "Toda vez que você passa a língua pelos dentes, atravessa um dos ambientes mais densamente povoados do corpo humano. A boca abriga centenas de espécies de bactérias, além de fungos e vírus, que juntos formam o que chamamos de microbioma oral. Não é sujeira nem descuido: é um ecossistema que começa a se montar nos primeiros dias de vida e nos acompanha até o fim.",
          "Como pesquisador que passou anos olhando essas comunidades no microscópio, confesso que ainda me encanto com a organização delas. Os micróbios não flutuam soltos na saliva. Eles se agarram às superfícies, se empilham em camadas e constroem estruturas coletivas chamadas biofilmes — aquela película que você sente nos dentes ao acordar é o exemplo mais cotidiano.",
        ],
      },
      {
        heading: "Nem todo micróbio é inimigo",
        paragraphs: [
          "A ideia de que bactéria na boca é sempre coisa ruim é um dos maiores mal-entendidos da saúde bucal. Na verdade, uma boca saudável é uma boca cheia de micróbios — só que em equilíbrio. Essas comunidades ajudam a ocupar espaço que patógenos poderiam tomar, participam do metabolismo de substâncias que ingerimos e mantêm uma espécie de trégua negociada com o nosso sistema imune.",
          "Um dos personagens que estudo de perto é o Streptococcus sanguinis. Ele costuma ser um dos primeiros a colonizar a superfície limpa do dente e tem um papel pacificador: sua presença está associada a ambientes mais estáveis e menos propensos à cárie. Em outras palavras, certos moradores antigos ajudam a manter a vizinhança em ordem.",
        ],
      },
      {
        heading: "Quando o equilíbrio se rompe",
        paragraphs: [
          "O problema raramente é a presença de bactérias — é o desequilíbrio. Quando a dieta fica rica em açúcar, a higiene afrouxa ou a saliva diminui, algumas espécies produtoras de ácido ganham vantagem e passam a dominar. Esse deslize na composição da comunidade é o que abre caminho para a cárie e para a doença periodontal, que inflama e destrói o tecido ao redor do dente.",
          "Nos últimos anos, a ciência também vem ligando a saúde da boca a processos que acontecem longe dela. Micróbios e moléculas inflamatórias de origem bucal podem alcançar a corrente sanguínea, e há evidência crescente de associação entre doença periodontal e condições como doenças cardiovasculares e diabetes. A boca, afinal, não é um compartimento isolado: é uma porta de entrada para o resto do corpo.",
        ],
      },
      {
        heading: "Cuidar da boca é cuidar de um ecossistema",
        paragraphs: [
          "Isso muda um pouco a forma de pensar a higiene. O objetivo não é esterilizar a boca — seria impossível e nem desejável. É manter a comunidade microbiana em harmonia, favorecendo os moradores que trabalham a nosso favor e evitando dar combustível demais aos oportunistas.",
          "Escovação e uso do fio controlam o acúmulo de biofilme; reduzir o excesso de açúcar tira o principal combustível das espécies que acidificam o ambiente; e a saliva, que muitas vezes ignoramos, é uma aliada poderosa de proteção e reparo. Pequenos hábitos constantes fazem mais pela sua boca do que qualquer gesto heroico de vez em quando.",
        ],
      },
    ],
    takeaway:
      "Sua boca não precisa ficar livre de bactérias — precisa ficar equilibrada. Cuidar do microbioma oral todos os dias é um dos investimentos mais simples que você pode fazer pela saúde do corpo inteiro.",
  },
  {
    slug: "bacteria-da-boca-coracao",
    title: "A bactéria da boca que chega ao coração",
    dek: "Como um morador silencioso da sua gengiva pode, em raras ocasiões, se infiltrar no sangue e atacar uma válvula cardíaca.",
    readingMinutes: 4,
    date: "2026-10-13",
    tags: ["S. sanguinis", "Saúde sistêmica"],
    sections: [
      {
        heading: "Um morador discreto",
        paragraphs: [
          "Dentro da sua boca vive uma multidão. Bilhões de bactérias colonizam os dentes, a língua e a gengiva, e a grande maioria delas não é inimiga: faz parte de um ecossistema que ajuda a manter o equilíbrio. O Streptococcus sanguinis é um desses habitantes antigos. Ele chega cedo, costuma ser um dos primeiros a grudar no esmalte limpo e, na boca, raramente causa problema.",
          "O nome, no entanto, entrega uma pista. 'Sanguinis' vem de sangue — a bactéria foi batizada assim porque os pesquisadores a encontravam, com frequência estranha, no sangue de pessoas com uma doença cardíaca específica. Como um habitante tão pacífico da boca acabava num lugar tão distante e tão delicado?",
        ],
      },
      {
        heading: "A passagem para o sangue",
        paragraphs: [
          "A resposta está numa fronteira mais frágil do que parece: a gengiva. Quando ela está inflamada, sangra com facilidade — e cada ponto de sangramento é uma porta aberta. Escovar os dentes, usar fio dental, mastigar com vigor ou passar por um procedimento odontológico pode empurrar algumas bactérias da boca para dentro da corrente sanguínea. Isso acontece com todo mundo, o tempo todo, em pequena escala.",
          "Na maioria das vezes, não dá em nada. O sistema imune patrulha o sangue e elimina esses invasores em minutos. O problema aparece quando a bactéria encontra, lá dentro, um ponto onde consiga se agarrar e se esconder — e o coração, em certas condições, oferece exatamente isso.",
        ],
      },
      {
        heading: "Por que o coração?",
        paragraphs: [
          "As válvulas do coração têm superfícies lisas, feitas para o sangue deslizar sem turbulência. Mas uma válvula já danificada, malformada ou substituída por uma prótese pode ter microlesões onde se formam pequenos coágulos. Esse terreno áspero é um porto seguro: a bactéria que passa por ali consegue aderir, se multiplicar e montar uma colônia protegida, chamada vegetação.",
          "É a endocardite infecciosa. Uma doença rara, mas grave, em que a infecção corrói a válvula e pode lançar fragmentos para o resto do corpo. O S. sanguinis é um dos protagonistas clássicos desse enredo justamente porque combina duas qualidades: mora na boca de quase todo mundo e é especialista em grudar em superfícies. A mesma habilidade que o fixa no dente o ajuda a se fixar numa válvula ferida.",
          "Há ainda um detalhe que torna essa bactéria interessante para quem a estuda: ela não é só hábil em se agarrar — é hábil em sobreviver. Parte da pesquisa sobre o S. sanguinis investiga como ele dribla as defesas do sangue, entre elas o sistema complemento, um conjunto de proteínas que funciona como uma linha de frente contra micróbios. Entender esses truques de escape é entender por que, em algumas pessoas, o imune não consegue encerrar a invasão a tempo.",
        ],
      },
      {
        heading: "A boca não termina nos dentes",
        paragraphs: [
          "Nada disso é motivo para pânico. A endocardite continua rara, e boa parte das pessoas com válvulas saudáveis nunca precisará se preocupar com ela. Mas a história do S. sanguinis ilustra algo que a medicina vem levando cada vez mais a sério: a boca não é um compartimento isolado do resto do corpo. O que acontece na gengiva conversa, pela via do sangue, com órgãos distantes.",
          "Por isso certas pessoas com condições cardíacas específicas recebem orientação para cuidados especiais antes de procedimentos odontológicos, e por isso a saúde da gengiva importa além do sorriso. Uma gengiva que não sangra é, literalmente, uma porta fechada.",
        ],
      },
    ],
    takeaway:
      "Cuidar da gengiva não é vaidade: manter a boca saudável fecha a principal porta de entrada que bactérias como o S. sanguinis usam para alcançar o sangue — e, em casos raros, o coração.",
  },
  {
    slug: "biofilme-bacteria-em-bando",
    title: "Biofilme: por que a bactéria é mais forte em bando",
    dek: "Sozinha, uma bactéria é frágil; organizada numa comunidade grudenta, ela resiste a antibióticos e engana o próprio sistema imune.",
    readingMinutes: 3,
    date: "2026-10-10",
    tags: ["Biofilme", "Microbiologia"],
    sections: [
      {
        heading: "A bactéria raramente vive sozinha",
        paragraphs: [
          "Quando imaginamos uma bactéria, pensamos quase sempre num ser solitário boiando num líquido, à mercê de qualquer remédio. Essa imagem está certa só uma fração do tempo. Na natureza, e dentro de nós, a esmagadora maioria das bactérias prefere viver grudada a uma superfície, reunida em comunidades densas e organizadas que chamamos de biofilmes.",
          "Um biofilme não é um amontoado aleatório. As bactérias se fixam, se multiplicam e passam a secretar uma espécie de gosma que as envolve — uma matriz feita de açúcares, proteínas e até pedaços de DNA. Pense numa cidade onde as casas são as bactérias e o concreto que as une é essa matriz. É esse concreto que muda tudo.",
        ],
      },
      {
        heading: "A placa dos seus dentes é o exemplo perfeito",
        paragraphs: [
          "Você convive com um biofilme todos os dias e provavelmente passa a língua nele agora. A placa dental é exatamente isso: uma comunidade bacteriana que se instala sobre uma finíssima película de proteínas da saliva que recobre o esmalte, e ali constrói sua matriz grudenta, camada sobre camada.",
          "É por isso que placa não sai com bochecho. Um enxágue leva embora as bactérias soltas, mas não arranca a comunidade ancorada — ela está protegida pela própria gosma que produziu. Só a fricção mecânica da escova e do fio dental quebra essa estrutura. E é por isso também que a placa deixada em paz vira cárie e inflamação da gengiva: o biofilme amadurece e passa a agir como um organismo coletivo.",
        ],
      },
      {
        heading: "Por que o antibiótico tem tanta dificuldade",
        paragraphs: [
          "A primeira linha de defesa do biofilme é física. A matriz funciona como um muro poroso: o antibiótico até entra, mas devagar e em concentração cada vez menor conforme penetra, de modo que as bactérias do fundo recebem só uma fração da dose que mataria uma célula isolada.",
          "A segunda defesa é mais sutil e mais engenhosa. Dentro do biofilme há gradientes — na superfície sobra oxigênio e alimento, no interior falta quase tudo. As bactérias do miolo entram num estado quase adormecido, crescendo pouco ou nada. Como a maioria dos antibióticos ataca justamente processos de bactérias em plena divisão, essas células lentas simplesmente não oferecem alvo. O remédio passa por elas sem causar dano, e quando o tratamento acaba, elas acordam e repovoam tudo.",
        ],
      },
      {
        heading: "E por que o sistema imune também se frustra",
        paragraphs: [
          "Nossas células de defesa, como os fagócitos, são especialistas em engolir bactérias uma a uma. Diante de um biofilme, elas encontram uma estrutura grande demais para engolir e envolta numa matriz que não conseguem atravessar. Os pesquisadores chamam esse impasse de fagocitose frustrada: a célula de defesa chega, tenta, e não consegue fechar o bote.",
          "A matriz ainda atrapalha anticorpos e outros mensageiros imunes, abafando o reconhecimento e protegendo as bactérias do contato direto. O resultado é um empate tenso: o corpo mantém a inflamação ligada tentando resolver o problema, mas não consegue eliminar a fonte. Essa inflamação crônica, aliás, costuma machucar mais o nosso tecido do que o próprio micróbio.",
        ],
      },
    ],
    takeaway:
      "Contra biofilme, remédio sozinho raramente basta: é preciso quebrar a comunidade fisicamente. No dia a dia, isso tem um nome simples — escovar e passar fio dental é remover o biofilme na marra, antes que ele fique forte demais.",
  },
  {
    slug: "peptideos-antimicrobianos",
    title: "Peptídeos antimicrobianos: o antibiótico do futuro?",
    dek: "Seu corpo fabrica armas contra bactérias desde antes de você nascer — e elas podem ser a saída para a era pós-antibiótico.",
    readingMinutes: 3,
    date: "2026-10-06",
    tags: ["Peptídeos", "Resistência antimicrobiana"],
    sections: [
      {
        heading: "Uma arma que você já carrega",
        paragraphs: [
          "Antes de qualquer antibiótico de farmácia existir, a natureza já havia resolvido o problema de se defender de micróbios. A prova está na sua própria pele, na saliva, nas lágrimas e no muco que reveste o nariz e o intestino: ali circulam os peptídeos antimicrobianos, pequenas cadeias de aminoácidos que funcionam como a primeira linha de defesa do organismo.",
          "Eles fazem parte da chamada imunidade inata — a resposta rápida, de prontidão, que não precisa aprender a reconhecer um invasor para agir. Famílias como as defensinas e as catelicidinas são produzidas por células da pele, das mucosas e por glóbulos brancos no exato momento em que uma ameaça aparece. É uma tecnologia antiga, moldada por centenas de milhões de anos de evolução, e está ativa em você neste instante.",
        ],
      },
      {
        heading: "Como eles matam a bactéria",
        paragraphs: [
          "A maioria desses peptídeos tem uma característica curiosa: carregam uma carga elétrica positiva e são atraídos pela superfície das bactérias, que costuma ser negativa. É uma questão de afinidade física, quase como um ímã encontrando o polo oposto.",
          "Uma vez grudados, muitos deles atacam diretamente a membrana que envolve o micróbio — perfuram, desestabilizam, abrem buracos. A célula bacteriana perde seu conteúdo e morre. Esse mecanismo bruto e físico contrasta com o de boa parte dos antibióticos tradicionais, que precisam acertar um alvo bioquímico específico dentro da bactéria para funcionar.",
        ],
      },
      {
        heading: "Por que isso importa agora",
        paragraphs: [
          "A resistência aos antibióticos é hoje um dos problemas de saúde mais sérios e reconhecidos do mundo. Bactérias que antes cediam a tratamentos simples vêm aprendendo a sobreviver a eles, e o ritmo de descoberta de remédios novos não acompanha essa corrida. Infecções corriqueiras voltam a ser perigosas quando os medicamentos de sempre param de responder.",
          "É aí que os peptídeos antimicrobianos despertam tanto interesse. Como atacam a estrutura física da membrana, e não um único ponto frágil do metabolismo bacteriano, a aposta é que seja mais difícil para o micróbio criar resistência contra eles. Difícil, note bem — não impossível: a evolução é engenhosa, e a ciência trata essas moléculas com entusiasmo cauteloso, não como bala de prata.",
        ],
      },
      {
        heading: "Da bancada para a clínica",
        paragraphs: [
          "Transformar uma molécula que funciona no corpo em um remédio de prateleira é outro desafio. Peptídeos podem ser degradados rápido pelo organismo, custar caro para produzir e, em dose errada, afetar também as nossas próprias células. Boa parte da pesquisa atual se dedica justamente a contornar esses obstáculos — desenhando versões mais estáveis, mais seletivas e mais baratas.",
          "Vale lembrar que a inspiração não vem só de humanos. Peptídeos de defesa aparecem em anfíbios, insetos, plantas e até em outras bactérias, num arsenal químico vastíssimo que mal começamos a catalogar. Cada espécie guarda suas próprias soluções para o mesmo problema que nos aflige.",
        ],
      },
    ],
    takeaway:
      "Peptídeos antimicrobianos não são promessa de ficção científica — são defesas que seu corpo já usa, e uma das linhas de pesquisa mais sérias contra a resistência bacteriana. Vale acompanhar o campo com interesse, e sem exageros.",
  },
];

export function getPost(slug: string) {
  return posts.find((p) => p.slug === slug);
}
