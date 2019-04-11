import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  Icon,
  Level,
  Tag,
  Container,
  Hero, } from "react-bulma-components/full";

  export class MainHero extends Component {
    render() {
      return (
        <div>
          <Hero color="primary" gradient size="medium">
            <Container fluid>
              <Hero.Body>
                <span className="title has-background-grey-dark is-1 highlight-title"> Hi! I'm Joel</span><br />
                <h2 className="subtitle is-4 is-italic">I believe software should address human needs to achieve healthy results.</h2>
                <Level>
                  <Level.Item>
                    <Tag.Group gapless>
                      <Tag color="primary">COLLABORATOR</Tag>
                      <Tag>LEADER</Tag>
                      <Tag color="link">INNOVATOR</Tag>
                    </Tag.Group>
                  </Level.Item>
                </Level>
                <Level>
                    <Level.Item>
                      <Icon size="large">
                        <span>
                          <a href="https://www.linkedin.com/in/joel-t-rhine/"><FontAwesomeIcon icon={["fab", "linkedin"]} size="2x" /></a>
                        </span>
                      </Icon>
                      <Icon size="large">
                        <span>
                          <a href="https://github.com/rhon3n"><FontAwesomeIcon icon={["fab", "github-square"]} size="2x" /></a>
                        </span>
                      </Icon>
                      <Icon size="large">
                        <span>
                          <a href="https://www.freecodecamp.org/rhon3n"><FontAwesomeIcon icon={["fab", "free-code-camp"]} size="2x" /></a>
                        </span>
                      </Icon>
                    </Level.Item>
                </Level>
              </Hero.Body>
            </Container>
          </Hero>
        </div>
      )
    }
  }