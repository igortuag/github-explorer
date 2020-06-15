import React from 'react';
import { FiChevronRight } from 'react-icons/fi';

import logoImg from '../../assets/logo.svg';

import { Title, Form, Repositories } from './styles';

const Dashboard: React.FC = () => {
  return (
    <>
      <img src={logoImg} alt="Github Explorer" />
      <Title>Explore repositórios no Github.</Title>

      <Form action="">
        <input placeholder="Digite o nome do repositório" />
        <button type="submit">Pesquisar</button>
      </Form>

      <Repositories>
        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38694620?s=460&u=c5be7b8b573e355f157a2d8b263a3b45908f61d0&v=4"
            alt="Igor Tuag"
          />
          <div>
            <strong>igortuag/github-explorer</strong>
            <p>Easy peasy higly scaleble ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38694620?s=460&u=c5be7b8b573e355f157a2d8b263a3b45908f61d0&v=4"
            alt="Igor Tuag"
          />
          <div>
            <strong>igortuag/github-explorer</strong>
            <p>Easy peasy higly scaleble ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>

        <a href="teste">
          <img
            src="https://avatars1.githubusercontent.com/u/38694620?s=460&u=c5be7b8b573e355f157a2d8b263a3b45908f61d0&v=4"
            alt="Igor Tuag"
          />
          <div>
            <strong>igortuag/github-explorer</strong>
            <p>Easy peasy higly scaleble ReactJS & React Native forms!</p>
          </div>

          <FiChevronRight size={20} />
        </a>
      </Repositories>
    </>
  );
};

export default Dashboard;
