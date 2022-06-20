import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import { CursosProvider } from '../../providers/cursos/cursos';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  cursosArr;
  cursosA;

  constructor(public navCtrl: NavController, public cursosProvider: CursosProvider) {
    this.cursosArr = 

    [
      {
          id: 1,
          nome: "Lógica de Programação",
          img_icon: "https://enotas.com.br/blog/wp-content/uploads/2021/02/linguagem-de-programa%C3%A7%C3%A3o.jpg",
          professor: "Larissa",
          dt_realizacao: "29/11/2021",
          carga_horaria: 120,
          conteudo: [
            "Fundamentos da Computação",
            "Introdução a Lógica de Programação e Algoritmos",
            "Estrutura de Dados Básica",
            "Estruturas de Controle de Fluxo",
            "Estruturas de Dados Homogêneas",
            "Estruturas de Dados Heterogêneas",
            "Estrutura de Dados Avançadas"
          ]
      },
  
      {
          id: 2,
          nome: "Introdução ao Computador",
          professor: "Victor",
          dt_realizacao: "20/12/2021",
          carga_horaria: 80,
          img_icon: "https://s3-us-west-2.amazonaws.com/cursandotecnico/imagens/box_produtos/profissionalizante/desenho-tecnico-auxiliado-por-computador-e-processos-de-fabricacao.jpg",
          conteudo: [
            "Componentes do Computador",
            "Hardware",
            "Software",
            "Terminal do Linux"
          ]  
      },
  
      {
          id: 3,
          nome: "Eletricidade",
          professor: "Diego",
          dt_realizacao: "20/12/2021",
          carga_horaria: 80,
          img_icon: "https://institucional-and-info-production.s3.us-east-2.amazonaws.com/images/0864d7d3-c686-476e-8020-265a69ef80eb/consumo-nacional-de-eletricidade-tem-queda-de-1-3-em-outubro-aponta-ccee-POST.jpg",
          conteudo: [
            "Medição",
            "Eletricidade Básica",
            "Componentes Eletrônicos",
            "Medidas Elétricas e Teste de Componentes",
            "Ferramentas e Equipamentos"
          ]  
      },
  
      {
          id: 4,
          nome: "Java",
          professor: "Felipe",
          dt_realizacao: "25/08/2021",
          carga_horaria: 80,
          img_icon: "https://i2.wp.com/www.softsell.com.br/wp-content/uploads/2018/04/java_logo_640.jpg",
          conteudo: [
            "Conceitos Introdutórios",
            "Estrutura de Seleção",
            "Estruturas de Repetição",
            "Vetor, Matriz e Array",
            "Classe e Objeto",
            "Construtores e Métodos",
            "Encapsulamento e Sobrecarga",
            "Herança e Polimorfismo"
          ]  
      }
    ];

    this.cursosA = 

    [
        
  
    {
          id: 5,
          nome: "Linux para Programadores",
          professor: "Rogério",
          dt_realizacao: "21/06/2022",
          carga_horaria: 60,
          img_icon: "https://img.visie.com.br/visie/wp-content/uploads/2017/08/Linux-1200x675.jpg",
          "conteudo": [
              "Introdução ao Linux",
              "Metodos de Navegação",
              "Terminal"
          ]  
      },
  
      {
          id: 6,
          nome: "Astronomia",
          professor: "Jânio",
          dt_realizacao: "21/06/2022",
          carga_horaria: 120,
          img_icon: "https://i0.wp.com/jornal.usp.br/wp-content/uploads/2021/05/20210511_00_astronomia_planetas_terra4.jpg?fit=800%2C420&ssl=1",
          conteudo: [
            "Física",
            "Astronomia: Uma Visão Geral",
            "Cálculo Diferencial e Integral",
            "Introdução à Física da Terra e do Universo",
            "Mecânica",
            "Física Quântica",
            "Astronomia de Posição"
          ]  
      },
  
      {
          id: 7,
          nome: "Psicologia da Educação",
          professor: "Leandro",
          dt_realizacao: "22/06/2022",
          carga_horaria: 60,
          img_icon: "https://i.pinimg.com/736x/d1/d1/59/d1d1599eeaf467a5b0b35ccd0ecdedd5.jpg",
          conteudo: [
            "As relações entre a Psicologia e a Educação e sua importância para a formação do professor",
            " Desenvolvimento humano e educação: bases epistemológicas",
            " Principais abordagens ao estudo do desenvolvimento e da aprendizagem",
            " Desenvolvimento e aprendizagem de conteúdos das Ciências Sociais",
            " Processo ensino-aprendizagem e contexto social"
          ]  
      },
  
      {
          id: 8,
          nome: "Inglês",
          professor: "Ailton",
          dt_realizacao: "23/06/2022",
          carga_horaria: 40,
          img_icon: "https://cnsdbh.com.br/wordpress/wp-content/uploads/2020/05/Prancheta-02-1.png",
          conteudo: [
            "Técnica de leitura extensiva",
            " Scanning",
            " Skimming",
            " Estudo de aspectos morfossintáticos em contexto",
            " Aspectos linguísticos relevantes comuns à linguagem técnica em textos de computação",
            " Aspectos macro da estrutura do texto em inglês: ideias principais e de apoio"
          ]  
      }
  ]

    // this.cursosProvider.getCursosJson().subscribe(cursosArr => {
    //   console.log('cursos', cursosArr);

    //   this.cursosArr = cursosArr;
    // })

  }

  openPageDetalhes(curso) {
    this.navCtrl.push('DetalhesPage', {'key': curso});
  }

}
