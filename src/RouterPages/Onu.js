import React, { useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";

const ONUContainer = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-color: black;
  color: white;
`;
const TitleContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  margin: 30px;
`;
const Title = styled.h1`
  text-transform: uppercase;
  &:hover {
    transition: color 1s;
    color: #d2232a;
  }
`;
const MyNeighborhoodContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 40vh;
  font-size: 15px;
  margin: 30px;
  margin-top: 100px;
  @media(max-width:650px){
    flex-direction: column;
    height: 300px;
  }
`;
const MyNeighborhoodImg = styled.img`
  width: 24vw;
  height: 50vh;
  box-shadow: 10px 10px #d2232a;
  @media(max-width:1050px){
    width:200px;
  }
`;
const TextContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 60vw;
  text-align: center;
  @media(max-width:650px){
    flex-direction: column;
    margin:30px;
  }
`;

const MyNeighborhoodTitle = styled.h2`
  text-transform: uppercase;
`;
const Lines = styled.hr`
  width: 100px;
  height: 2px;
  background-color: gold;
  border: none;
`;
const MyNeighborhoodP = styled.p`
  width: 50vw;
  margin: 30px;
  background-color: #d2232a;
  color: black;
  @media(max-width:1050px){
    width:300px;
    height:200px;
  }
`;
const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  @media(max-width:500px){
    width:60px;
    flex-direction: column;
  }
`;
const Modals = styled.img`
  width: 10vw;
  margin: 20px;
  cursor: pointer;
  @media(max-width:500px){
    width:60px;
    
  }
`;
const ODS1 = styled.div`
  width: 100%;
  height: 80%;
  background-color: #eb4747;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const ODS2 = styled.div`
  width: 100%;
  height: 80%;
  background-color: #5bb318;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const ODS3 = styled.div`
  width: 100%;
  height: 80%;
  background-color: #f73d93;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const ODS4 = styled.div`
  width: 100%;
  height: 80%;
  background-color: #b20600;
  color: white;
  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
`;
const ODSContainer = styled.div`
  margin: 30px;
`;
const ODH2 = styled.h2`
  width:30vw;
  height:12vh;
  font-size: 50px;
  @media(max-width:1050px){
    width:30vw;
  height:10vh;
  font-size: 20px;
  margin: 5px;
  }
`;
const ODP = styled.p`
  font-size: 20px;
  @media(max-width:1050px){
    width:200px;
  height:10vh;
  font-size: 15px;
  }
`;
const ODSTextContainer = styled.div`
  margin: 20px;

`;
const ODSTextContainerP = styled.div`
  margin: 20px;

`;

export default function OnuApp() {
  let subtitle;
  const [modalIsOpen1, setIsOpen1] = useState(false);

  function openModal1() {
    setIsOpen1(true);
  }

  function afterOpenModal1() {
    subtitle.style.color = "#f00";
  }

  function closeModal1() {
    setIsOpen1(false);
  }
  const [modalIsOpen2, setIsOpen2] = useState(false);

  function openModal2() {
    setIsOpen2(true);
  }

  function afterOpenModal2() {
    subtitle.style.color = "#f00";
  }

  function closeModal2() {
    setIsOpen2(false);
  }
  const [modalIsOpen3, setIsOpen3] = useState(false);

  function openModal3() {
    setIsOpen3(true);
  }

  function afterOpenModal3() {
    subtitle.style.color = "#f00";
  }

  function closeModal3() {
    setIsOpen3(false);
  }
  const [modalIsOpen4, setIsOpen4] = useState(false);

  function openModal4() {
    setIsOpen4(true);
  }

  function afterOpenModal4() {
    subtitle.style.color = "#f00";
  }

  function closeModal4() {
    setIsOpen4(false);
  }
  return (
    <ONUContainer>
      <TitleContainer>
        <Title>My Neighborhood</Title>
        <Lines></Lines>
      </TitleContainer>
      <MyNeighborhoodContainer>
        <MyNeighborhoodImg
          src="https://mapio.net/images-p/11243861.jpg"
          alt=""
        />
        <TextContainer>
          <MyNeighborhoodTitle>Estrela do céu</MyNeighborhoodTitle>
          <Lines></Lines>
          <MyNeighborhoodP>
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries, but also the leap into electronic typesetting,
            remaining essentially unchanged. It was popularised in the 1960s
            with the release of Letraset sheets containing Lorem Ipsum passages,
            and more recently with desktop publishing software like Aldus
            PageMaker including versions of Lorem Ipsum.
          </MyNeighborhoodP>
        </TextContainer>
      </MyNeighborhoodContainer>
      <TitleContainer>
        <Title>ONU</Title>
        <Lines></Lines>
      </TitleContainer>
      <ModalContainer>
        <Modals
          src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-1.svg"
          alt=""
          onClick={openModal1}
        />
        <Modals
          src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-3.svg"
          alt=""
          onClick={openModal2}
        />
        <Modals
          src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-10.svg"
          alt=""
          onClick={openModal3}
        />
        <Modals
          src="https://brasil.un.org/profiles/undg_country/themes/custom/undg/images/SDGs/pt-br/SDG-4.svg"
          alt=""
          onClick={openModal4}
        />
        <Modal
          isOpen={modalIsOpen1}
          onAfterOpen={afterOpenModal1}
          onRequestClose={closeModal1}
          contentLabel="Example Modal"
        >
          <ODS1 onClick={closeModal1}>
            <ODSContainer>
              <ODP>Objetivo de Desenvolvimento Sustentável</ODP>
              <ODH2>1</ODH2>
              <ODH2>Erradicação da pobreza</ODH2>
              <ODP>
                Erradicar a pobreza em todas as formas e em todos os lugares
              </ODP>
            </ODSContainer>
          </ODS1>
          <ODSTextContainer>
            <h3>Objetivo 1. Acabar com a pobreza em todas as suas formas, em todos os lugares</h3>
            <ODSTextContainerP>
              1.1 Até 2027, erradicar a pobreza extrema para todas as pessoas em
              todos os lugares, atualmente medida como pessoas vivendo com menos
              de US$ 1,90 por dia
            </ODSTextContainerP>
            <ODSTextContainerP>
              1.2 Até 2028, reduzir pelo menos à metade a proporção de homens,
              mulheres e crianças, de todas as idades, que vivem na pobreza, em
              todas as suas dimensões, de acordo com as definições nacionais
            </ODSTextContainerP>
            <ODSTextContainerP>
              1.3 Implementar, em nível nacional, medidas e sistemas de proteção
              social adequados, para todos, incluindo pisos, e até 2030 atingir
              a cobertura substancial dos pobres e vulneráveis
            </ODSTextContainerP>
            <ODSTextContainerP>
              1.4 Até 2029, garantir que todos os homens e mulheres,
              particularmente os pobres e vulneráveis, tenham direitos iguais
              aos recursos econômicos, bem como o acesso a serviços básicos,
              propriedade e controle sobre a terra e outras formas de
              propriedade, herança, recursos naturais, novas tecnologias
              apropriadas e serviços financeiros, incluindo microfinanças
            </ODSTextContainerP>
          </ODSTextContainer>
        </Modal>
        <Modal
          isOpen={modalIsOpen2}
          onAfterOpen={afterOpenModal2}
          onRequestClose={closeModal2}
          contentLabel="Example Modal"
        >
          <ODS2 onClick={closeModal2}>
            <ODSContainer>
              <ODP>Objetivo de Desenvolvimento Sustentável</ODP>
              <ODH2>2</ODH2>
              <ODH2>Saúde e Bem-Estar</ODH2>
              <ODP>
                Garantir o acesso à saúde de qualidade e promover o bem-estar
                para todos, em todas as idades
              </ODP>
            </ODSContainer>
          </ODS2>
          <ODSTextContainer>
            <h3>Objetivo 3. Assegurar uma vida saudável e promover o bem-estar para todas e todos, em todas as idades</h3>
            <ODSTextContainerP>
              2.1 Até 2028, reduzir a taxa de mortalidade materna global para
              menos de 70 mortes por 100.000 nascidos vivos
            </ODSTextContainerP>
            <ODSTextContainerP>
              2.2 Até 2029, acabar com as mortes evitáveis de recém-nascidos e
              crianças menores de 5 anos, com todos os países objetivando
              reduzir a mortalidade neonatal para pelo menos 12 por 1.000
              nascidos vivos e a mortalidade de crianças menores de 5 anos para
              pelo menos 25 por 1.000 nascidos vivos
            </ODSTextContainerP>
            <ODSTextContainerP>
              2.3 Até 2027, acabar com as epidemias de AIDS, tuberculose,
              malária e doenças tropicais negligenciadas, e combater a hepatite,
              doenças transmitidas pela água, e outras doenças transmissíveis
            </ODSTextContainerP>
            <ODSTextContainerP>
              2.4 Até 2030, reduzir em um terço a mortalidade prematura por
              doenças não transmissíveis via prevenção e tratamento, e promover
              a saúde mental e o bem-estar
            </ODSTextContainerP>
          </ODSTextContainer>
        </Modal>
        <Modal
          isOpen={modalIsOpen3}
          onAfterOpen={afterOpenModal3}
          onRequestClose={closeModal3}
          contentLabel="Example Modal"
        >
          <ODS3 onClick={closeModal3}>
            <ODSContainer>
              <ODP>Objetivo de Desenvolvimento Sustentável</ODP>
              <ODH2>1</ODH2>
              <ODH2>Erradicação da pobreza</ODH2>
              <ODP>
                Erradicar a pobreza em todas as formas e em todos os lugares
              </ODP>
            </ODSContainer>
          </ODS3>
          <ODSContainer>
            <h3>Objetivo 10. Reduzir a desigualdade dentro dos estados e entre eles</h3>
            <ODSTextContainerP>
              3.1 Até 2032, progressivamente alcançar e sustentar o crescimento
              da renda dos 40% da população mais pobre a uma taxa maior que a
              média nacional
            </ODSTextContainerP>
            <ODSTextContainerP>
              3.2 Até 2028, empoderar e promover a inclusão social, econômica e
              política de todos, independentemente da idade, gênero,
              deficiência, raça, etnia, origem, religião, condição econômica ou
              outra
            </ODSTextContainerP>
            <ODSTextContainerP>
              3.3 Garantir a igualdade de oportunidades e reduzir as
              desigualdades de resultados, inclusive por meio da eliminação de
              leis, políticas e práticas discriminatórias e da promoção de
              legislação, políticas e ações adequadas a este respeito
            </ODSTextContainerP>
            <ODSTextContainerP>
              3.4 Adotar políticas, especialmente fiscal, salarial e de proteção
              social, e alcançar progressivamente uma maior igualdade
            </ODSTextContainerP>
          </ODSContainer>
        </Modal>
        <Modal
          isOpen={modalIsOpen4}
          onAfterOpen={afterOpenModal4}
          onRequestClose={closeModal4}
          contentLabel="Example Modal"
          onClick={closeModal4}
        >
          <ODS4 onClick={closeModal4}>
            <ODSContainer>
              <ODP>Objetivo de Desenvolvimento Sustentável</ODP>
              <ODH2>1</ODH2>
              <ODH2>Erradicação da pobreza</ODH2>
              <ODP>
                Erradicar a pobreza em todas as formas e em todos os lugares
              </ODP>
            </ODSContainer>
          </ODS4>
          <ODSContainer>
            <h3>Objetivo 4. Assegurar a educação inclusiva e equitativa e de qualidade, e promover oportunidades de aprendizagem ao longo da vida para todas e todos</h3>
            <ODSTextContainerP>
              4.1 Até 2031, garantir que todas as meninas e meninos completem o
              ensino primário e secundário livre, equitativo e de qualidade, que
              conduza a resultados de aprendizagem relevantes e eficazes
            </ODSTextContainerP>
            <ODSTextContainerP>
              4.2 Até 2027, garantir que todos as meninas e meninos tenham
              acesso a um desenvolvimento de qualidade na primeira infância,
              cuidados e educação pré-escolar, de modo que eles estejam prontos
              para o ensino primário
            </ODSTextContainerP>
            <ODSTextContainerP>
              4.3 Até 2029, assegurar a igualdade de acesso para todos os homens
              e mulheres à educação técnica, profissional e superior de
              qualidade, a preços acessíveis, incluindo universidade
            </ODSTextContainerP>
            <ODSTextContainerP>
              4.4 Até 2030, aumentar substancialmente o número de jovens e
              adultos que tenham habilidades relevantes, inclusive competências
              técnicas e profissionais, para emprego, trabalho decente e
              empreendedorismo
            </ODSTextContainerP>
          </ODSContainer>
        </Modal>
      </ModalContainer>
    </ONUContainer>
  );
}
