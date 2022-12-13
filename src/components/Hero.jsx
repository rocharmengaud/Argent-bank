import '../styles/hero.css';

export const Hero = (props) => {
  console.log(props);
  const style = {
    backgroundImage: `url('${props.img}')`,
  };
  return (
    <div class="hero" style={style}>
      <section class="hero-content">
        <h2 class="sr-only">Promoted Content</h2>
        <p class="subtitle">No fees.</p>
        <p class="subtitle">No minimum deposit.</p>
        <p class="subtitle">High interest rates.</p>
        <p class="text">Open a savings account with Argent Bank today!</p>
      </section>
    </div>
  );
};
