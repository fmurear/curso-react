import { getAllByText, render, screen } from "@testing-library/react";
import { FirstApp } from "../FirstApp";

describe('Pruebas en FirstApp', () => {

  const title = 'Hola soy Francisco';
  const subtitle = 'Soy un subtitulo';
  
  test('Debe de hacer match con el snapshot', () => {

    const { container } = render( <FirstApp title={ title } /> );
    
    expect( container ).toMatchSnapshot();

  })  

  test('Debe de mostrar el mensaje "Hola soy Francisco"', () => {
    render( <FirstApp title={ title } />);
    // screen.debug();

    expect(screen.getByText(title)).toBeTruthy();
  })
  
  test('Debe de mostrar el título como h1 ', () => {
    render( <FirstApp title={ title } />);
    expect( screen.getByRole('heading', { level: 1 }).innerHTML).toContain(title);
  })

  test('Debe de mostrar el subtitulo enviado por props ', () => {
    render( <FirstApp title={ title } subtitle={ subtitle } />);

    expect( screen.getAllByText(subtitle).length ).toBe(1);

  })
  
  
  
})
