import React from 'react';
import { CallAction } from '../components/CallAction';
import { Carousel } from '../components/Carousel';
import Header from '../components/Header';
import { Section } from '../components/Section';
import { Footer } from '../components/Footer';

const Layout = props => (
  <>
    <Header />
    <Section id="intro">
      <Carousel />
    </Section>
    <Section id="maincontent">
      <div className="container">
        <CallAction
          title="Welcome"
          body="Fly to Europe!!"
          btnText="Book Flight"
        />
      </div>
    </Section>
    <Footer />
  </>
);

export default Layout;
