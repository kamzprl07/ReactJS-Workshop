import React, { Component } from 'react';
import '../../styles/my-theme.css';

class HeroComponent extends Component {
  render() {
    return (
      <section className="main-section hero-header section--with-backdrop section--with-parallax">
        <h2 className="hero-header__subtitle">Hello there! I am</h2>
        <h1 className="hero-header__title">Kewyn Medina</h1>
        <h2 className="hero-header__subtitle">Technology Specialist</h2>
    </section>
    );
  }
}

export default HeroComponent;
