<template>
  <div class="about">
    <MenuComp v-if="openCloseMenu"></MenuComp>
    <imgHeader class="img-top"></imgHeader>
    <article>
      <section>
        <h2>Vårt kaffe</h2>
        <p class="ingress">{{ ingress }}</p>
        <p>{{ firstText }}</p>
        <p>{{ secondText }}</p>
      </section>
    </article>
    <div class="photo">
      <img src='../assets/svg/eva-cortado.jpg' alt="photo on owner">
      <h3>Eva Cortado</h3>
      <h4>Vd grundare</h4>
    </div>
    <imgBottom></imgBottom>
    <div @click="open()" class="click">
      <OpenClose class="openclose" :class="open" ></OpenClose>
    </div>    
  </div>
</template>
<script>
import MenuComp from '../components/MenuComp';
import OpenClose from '../components/layout/OpenClose';
import imgHeader from '../components/svg/graphics-header';
import imgBottom from '../components/svg/graphics-footer';

export default {
  name: 'about',
  components: {
    MenuComp,
    imgHeader,
    imgBottom,
    OpenClose
    
  },
  data(){
    return{
     ingress : "Pumpkin spice mug, barista cup, sit macchiato, kopi-luwak, doppio, grounds dripper, crema, strong whipped, variety extra iced id lungo half and half mazagran. Pumpkin spice.",
     firstText :"Que dark fair trade, spoon decaffeinated, barista wings whipped, as rich aftertaste, con panna milk black, arabica white rich beans single shot extra affogato. So affogato macchiato sit extraction instant grinder seasonal organic, turkish single shot, single origin, and robusta strong to go so dripper. Viennese froth, grounds caramelization skinny aromatic cup kopi-luwak, fair trade flavour, frappuccino medium, café au lait flavour cultivar ut bar instant kopi-luwak.",
     secondText : "Roast id macchiato, single shot siphon mazagran milk fair trade est aroma a half and half and, so, galão iced to go, whipped as cream cup pumpkin spice iced. At extra, rich grinder, brewed to go, steamed half and half at, that, percolator macchiato trifecta and body as arabica dripper. In galão black java milk sit trifecta, robusta, acerbic café au lait instant shop latte. Seasonal bar shop filter aroma id, crema, affogato viennese cultivar aftertaste, seasonal, percolator cream black, galão flavour, milk aromatic turkish skinny crema.",
    openCloseMenu: false,
    openClass: "open"
    }
  },
  methods: {

    open(){
      this.openCloseMenu = !this.openCloseMenu;
      if(this.open=="open"){
        this.open = "close";
      }else{
        this.open=="close"
      }
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

.about{
    background-color: #F3E4E1;
    min-height: 100vh;
    display: flex;
    flex-direction: column;

  .img-top{
    order: -1;
  }

  section{
    margin: 2rem;

    h2{
      font-size: 42px;
      font-weight: bold;
      margin-bottom: 2rem;
    }

    .ingress{
      font-weight: bold;
    }

    p{
      font-family: 'Work Sans';
      margin-bottom: 1rem;
      line-height: 1.5rem;
           
    }

   
  }
  
  }

  .photo{
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin-bottom: 1rem;
    img{
      border-radius: 100%;      
    }
    h3{
      font-weight: bold;
      font-size: 1.2rem;
      margin-bottom: 0.5rem;
    }
    h4{
      font-size: 1rem;

    }
  }

  .openclose{

    transition: transform 0.5s ease-in ;
    
  }





</style>

