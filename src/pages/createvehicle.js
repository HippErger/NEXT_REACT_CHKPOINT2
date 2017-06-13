import React from 'react';
import Link from 'next/link';
import Header from '../components/Header';

function createVehicle() {
  return (
    <div>
      <Header />
      <h3>You can add new a new vehicle here</h3>
      <form>
        <input type="text" imgUrl="imgUrl" value="" placeholder="imgUrl" />
        &nbsp; &nbsp;
        <input type="text" year="year" value="" placeholder="year"/>
        <br />
        <br />
        <input type="text" make="make" value="" placeholder="make"/>
        &nbsp; &nbsp;
        <input type="text" model="model" value="" placeholder="model"/>
        <br />
        <br />
        <input type="text" price="price" value="" placeholder="price"/>
        &nbsp; &nbsp;
        <input type="text" km="km" value="" placeholder="km"/>
        <br />
        <br />
        <input type="text" miles="miles" value="" placeholder="miles"/>
        &nbsp; &nbsp;
        <input type="text" fuel="fuel" value="" placeholder="fuel"/>
        <br />
        <br />
        <input type="text" city="city" value="" placeholder="city"/>
        &nbsp; &nbsp;
        <input type="text" newCar="newCar" value="" placeholder="newCar"/>
        <br />
        <br />
        <button>Submit</button>   &nbsp; &nbsp;
        <Link href="/vehiclespage">
          <button >Take Me to All Cars</button>
        </Link>
        &nbsp; &nbsp;
        <Link href="/">
          <button>Home</button>
        </Link>
      </form>
    </div>
  );
}

export default createVehicle;
