import React from 'react'

function Header() {
  return (
    <section>
      <section>
        <div>
          {/*logo*/}
          <a href="">
            <img
              src="https://pngimg.com/uploads/amazon/amazon_PNG11.png"
              alt="Amazon Logo"
            />
          </a>
          {/*delivery*/}
          <span>{/*Icon*/}</span>
          <div>
            <p>Delivered to</p>
          </div>
          <span>Ethiopia</span>
        </div>
        <div>
          {/*Search*/}
          <select name="" id="">
            <option value="">All</option>
          </select>
          <input type="text" placeholder="Search Product" />
          {/*icon*/}
        </div>
        <div>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a4/Flag_of_the_United_States.svg/1280px-Flag_of_the_United_States.svg.png"
            alt=""
          />
          <section>
            <option value="">EN</option>
          </section>
        </div>
        {/*three components*/}
        <a href=""></a>
        <div>
          <p>Sign In</p>
          <span>Accou</span>
        </div>
      </section>
    </section>
  );
}

export default Header
