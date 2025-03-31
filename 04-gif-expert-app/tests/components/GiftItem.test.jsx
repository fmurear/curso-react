import { GifItem } from "../../src/components/GifItem";
import { render, screen } from "@testing-library/react";

describe ('Pruebas en el component GifItem', () => {
    
    const title = 'Saitama';
    const url   = 'https://one-punch.com/saitama.jpg';
    
    test('Evaluar snapshot componente', () =>{
        const { container } = render(<GifItem title={ title } url={ url } />);

        expect( container ).toMatchSnapshot();
    });

    test('Debe de mostrar la imagen con URL y el ALT indicado', () => {
        render( <GifItem title={ title } url={ url } /> );
        // screen.debug();
        const { src, alt } = screen.getByRole('img');
        expect( src ).toBe( url );
        expect( alt ).toBe( title );
    });

    test('Debe de mostrar el título en el component', () => {
        
        render( <GifItem title={ title } url={ url } />);
        expect( screen.getByText( title ) ).toBeTruthy();

    })
});