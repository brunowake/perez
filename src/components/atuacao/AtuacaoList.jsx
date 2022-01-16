import React from 'react'
import './AtuacaoList.css'
import AtuacaoRow from './AtuacaoRow'
import img from '../../img/bg.jpg'
import { CSSTransition } from 'react-transition-group';

export default props => {

    const atuacoesList =
        [[{
            title: 'Direito',
            subTitle: 'Civil ',
            Img: img,
            text: 'É o ramo do Direito privado que orienta e regulamenta as relações dos cidadãos em face de particulares, ou seja, impõem direitos e obrigações, por exemplo: Defesa e cobrança em inadimplência, responsabilidade civil - indenização por danos morais, materiais, lucros cessantes e perdas e danos em geral, obrigação de fazer, não fazer e dar, direito de vizinhança. São apenas alguns exemplos entre vários.'
        },
        {
            title: 'Direito',
            subTitle: 'Do Consumidor',
            Img: img,
            text: 'É o ramo que deriva do Direito Civil, sendo assim, atua nas relações que caracteriza como de consumo, tendo como núcleo a proteção do hipossuficiente, ou seja, o consumidor. Podemos definir consumidor como sendo o destinatário final de serviços ou bens.'
        },
        {
            title: 'Direito',
            subTitle: 'de Família',
            Img: img,
            text: 'É um ramo do Direito que cuida de litígios que envolve a unidade familiar, assim, regula certas normas de convivência, bem como a sua estrutura, organização e proteção da família. Podemos citar alguns exemplos: Pensão alimentícia (revisão, execução, fixação e exoneração), alimentos gravídicos, ação de guarda de menor, divórcio, reconhecimento e dissolução de união estável, inventário, alvarás e entre outros.'
        },
        {
            title: 'Direito',
            subTitle: 'Trabalhista',
            Img: img,
            text: ' É um ramo do Direito composto por princípios e regras, ou seja, regulam a relação de trabalho entre empregado e empregador para uma tutela mínima de trabalho digno, bem como evitar arbitrariedade de ambas as partes. Exemplo de conflitos: Férias, adicional de insalubridade, adicional de periculosidade, adicional noturno, intervalo intrajornada e interjornada, estabilidade e entre outros exemplos.'
        }],
        [{
            title: 'Direito ',
            subTitle: 'Previdenciário',
            Img: img,
            text: 'É um dos ramos do Direito Público relacionada a previdência social, regulamentando o acesso aos benefícios, seja para segurado ou dependentes, trata-se dos direitos sociais previsto na Constituição Federal de 1988. Podemos citar alguns exemplos: Auxílios reclusão, doença, acidente, aposentadoria por invalidez, pensão por morte, aposentadoria por idade, aposentadoria por tempo de contribuição, licença maternidade e entre outros.'
        },
        {
            title: 'Locação',
            subTitle: '',
            Img: img,
            text: 'Trata-se de um negócio jurídico realizado entre duas partes, sendo locador e locatário, ou seja, a primeira ira se obrigar em entregar uma coisa, seja imóvel ou móvel à outra, ao passo que o locatário estará obrigado a realizar o pagamento em razão de possuir a coisa. Exemplo: Contrato de locação de imóvel.'
        },
        {
            title: 'Direito ',
            subTitle: 'Criminal',
            Img: img,
            text: 'É o ramo do Direito que regula o jus puniendi, sendo assim, possuindo uma grande quantidade de normas positivadas e disciplinando-as na sociedade, garantindo o bem-estar, paz social e proteção do bem jurídico. Podemos citar algumas áreas de atuação do advogado frente a esta disciplina: Acompanhamento na Delegacia de Polícia, Acompanhar Flagrante Delito, Defesa Prévia, Apelação, Recurso em Sentido Estrito e entre outros'
        },
        {
            title: 'Consultoria ',
            subTitle: 'Jurídica',
            Img: img,
            text: 'O consultor jurídico presta serviço de apoio, informações, opiniões e aconselha o cliente com relações cotidianas, assim, resolvendo e evitando problemas futuros, seja pessoa física ou jurídica.'
        }]
        ]




    let rows = []

    atuacoesList.map((atuacoes, index) => {
        let createRows = atuacoes.map((atuacao) => {

            return <AtuacaoRow atuacoes={atuacao} key={atuacao.subTitle + index } />
        })

        rows.push(createRows)
        createRows = []
    })
    return (
        <div className="atuacao_content">
            <CSSTransition
                in={props.showContent}
                timeout={500}
                classNames="content"
                appear
            >
                <div>
                    {rows[0]}
                </div>
            </CSSTransition>
            <CSSTransition
                in={props.showContent}
                timeout={700}
                classNames="content"
                appear
            >
                <div>
                    {rows[1]}
                </div>
            </CSSTransition>


        </div>
    )
}