import { render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => {
  test('Debe de hacer match con el snapshot', () => {

    const title = 'Hola soy Francisco'
    const { container } = render( <FirstApp title={ title } /> );
    
    expect( container ).toMatchSnapshot();

  })
})
