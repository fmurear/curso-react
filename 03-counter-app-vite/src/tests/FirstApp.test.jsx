import { getAllByText, render } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => {
  test('Debe de hacer match con el snapshot', () => {

    const title = 'Hola soy Francisco'
    const { container } = render( <FirstApp title={ title } /> );
    
    expect( container ).toMatchSnapshot();

  })

  test('Debe de mostrar el título en un h1', () => {
    const title = 'Hola soy Francisco'
    const { container, getByText, getByTestId } = render( <FirstApp title={ title } /> );

    expect( getByText(title) ).toBeTruthy();

    const h1 = container.querySelector('h1');
    expect(h1.innerHTML).toContain( title );

    expect( getByTestId('test-title').innerHTML ).toBe( title );
  })
  
  test('Debe de mostrar el subtitulo enviado por props ', () => {
    const title = 'Hola soy Francisco'
    const subtitle = 'Soy un subtítulo'
    const { getByText, getAllByText } = render( 
      <FirstApp title={ title } subtitle={ subtitle } /> 
    );
    expect( getByText(title) ).toBeTruthy();
    expect( getAllByText(subtitle).length ).toBe(1);
  })
  
  
})
