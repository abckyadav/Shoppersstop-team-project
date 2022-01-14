const footer = () => {
    return `
    <div id="white">
    <ul>
      <p>WOMEN</p>
      <li><a href="#">Indian wear</a></li>
      <li><a href="#">Western wear</a></li>
      <li><a href="#">Lingerie & Night Wear</a></li>
      <li><a href="#">Footwear</a></li>
      <li><a href="#">Women's Fragrances</a></li>
      <li><a href="#">Bags & Wallets</a></li>
      <li><a href="#">Sunglasses & Frames</a></li>
      <li><a href="#">Jewellery</a></li>
      <li><a href="#">Travel</a></li>
    </ul>
    <ul>
      <p>MEN</p>
      <li><a href="#">Clothing</a></li>
      <li><a href="#">Accessories</a></li>
      <li><a href="#">Footwear</a></li>
      <li><a href="#">Sunglasses & Frames</a></li>
      <li><a href="#">Watches</a></li>
      <li><a href="#">Men's Fragrances</a></li>
      <li><a href="#">Grooming For Men</a></li>
      <li><a href="#">Jewellery</a></li>
    </ul>
    <ul>
      <p>KIDS</p>
      <li><a href="#">Boys</a></li>
      <li><a href="#">Girls</a></li>
      <li><a href="#">Infants</a></li>
      <li><a href="#">Toys</a></li>
      <li><a href="#">School Essentail</a></li>
      <li><a href="#">Footwear</a></li>
      <li><a href="#">Watches</a></li>
      <li><a href="#">Accessories</a></li>
    </ul>
    <ul>
      <p>BEAUTY</p>
      <li><a href="#">Make up</a></li>
      <li><a href="#">Skincare</a></li>
      <li><a href="#">Bath & Body</a></li>
      <li><a href="#">Nails</a></li>
      <li><a href="#">Haircare</a></li>
      <li><a href="#">Tools & Accessories</a></li>
      <li><a href="#">Women's Fragrances</a></li>
      <li><a href="#">Men's Fragrances</a></li>
      <li><a href="#">Grooming For Men</a></li>
      <li><a href="#">Personal Hygiene</a></li>
    </ul>
    <ul>
      <p>HOMESTOP</p>
      <li><a href="#">Kitchen & Dining</a></li>
      <li><a href="#">Decor</a></li>
      <li><a href="#">Home Furnishing</a></li>
      <li><a href="#">Storage & Organization</a></li>
      <li><a href="#">Smart Home and Appliances</a></li>
      <li><a href="#">Bath</a></li>
      <li><a href="#">Bedding</a></li>
      <li><a href="#">Furniture</a></li>
    </ul>
    <ul>
      <p>Watches</p>
      <li><a href="#">Mens Watches</a></li>
      <li><a href="#">Womens Watches</a></li>
      <li><a href="#">Kids Watches</a></li>
    </ul>
  </div>
  <div id="black">
    <ul>
      <p>CUSTOMER</p>
      <li><a href="#">HELP/FAQS</a></li>
      <li><a href="#">TRACK ORDER</a></li>
      <li><a href="#">SIZE GUIDE</a></li>
      <li><a href="#">BUYING GUIDE</a></li>
      <li><a href="#">HOW DO I SHOP?</a></li>
      <li><a href="#">HOW DO I PAY?</a></li>
      <li><a href="#">FIND PLACES WE DELIVER</a></li>
      <li><a href="#">STYLE HUB</a></li>
    </ul>
    <ul>
      <p>POLICIES</p>
      <li><a href="#">TERMS OF USE</a></li>
      <li><a href="#">PRIVACY</a></li>
      <li><a href="#">DELIVERY POLICY</a></li>
      <li><a href="#">EXCHANGES & RETURNS</a></li>
    </ul>
    <ul>
      <p>STORE & SITES</p>
      <li><a href="#">ABOUT US</a></li>
      <li><a href="#">CONTACT US</a></li>
      <li><a href="#">CORPORATE SITE</a></li>
      <li><a href="#">STORE LOCATOR</a></li>
      <li><a href="#">CAREERS</a></li>
      <li><a href="#">SITEMAP</a></li>
    </ul>
    <ul>
      <p>DELIGHTFUL PROGRAMS</p>
      <li><a href="#">INSTANT GIFTING</a></li>
      <li>
        <a href="#">EXPRESS STORE <br />PICK UP</a>
      </li>
    </ul>
    <ul>
      <p>FIRST CITIZEN</p>
      <li><a href="#">FIRST CITIZEN</a></li>
    </ul>
    <ul>
      <p>REACH US</p>
      <li><a href="#">FOR ANY QUERY PLEASE EMAIL US</a></li>
      <li><a href="#">customercare@shoppersstop.com</a></li>
      <select id="brand_option">
        <option>BRANDS</option>
        <option>SPYKAR</option>
        <option>LIFE</option>
        <option>ALLEN SOLLY</option>
        <option>BUFFALO</option>
        <option>CROCODILE</option>
        <option>BEING HUMAN</option>
        <option>NIKE</option>
        <option>ADIDAS</option>
        <option>ALCIS</option>
      </select>
    </ul>
  </div>
    `
}
const footerContainer = document.querySelector("#footer-section");
footerContainer.innerHTML = footer();