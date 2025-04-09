import { fireEvent, render, screen } from "@testing-library/react";
import { MultipleCustomHooks } from "../../src/03-examples/MultipleCustomHooks";
import { useFetch } from "../../src/hooks/useFetch";
import { useCounter } from "../../src/hooks/useCounter";

jest.mock('../../src/hooks/useFetch')
jest.mock('../../src/hooks/useCounter')

describe('Pruebas en <MultipleCustomHooks />', () => { 

    const pokemon = { 
        id: 123, 
        name: 'Charizard', 
        sprites:{
            'front_default':'https://1.com',
            'front_shiny':'https://2.com',
            'back_default':'https://4.com',
            'back_shiny':'https://6.com'
        }
    };

    const mockIncrement = jest.fn();
    useCounter.mockReturnValue({
        counter: 1,
        increment: mockIncrement
    });

    beforeEach( () => {
        jest.clearAllMocks();
    })

    test('Debe de mostrar el componente por defecto', () => {

        useFetch.mockReturnValue({
            data: null,
            isLoading: true,
            hasError: false,
            error: null
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Cargando..') );
        expect( screen.getByText('Información de Pokémon') );

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });

        expect( nextButton.disabled ).toBeFalsy();

    });

    test('Debe de mostrar un Pokemon', () => { 
        
        useFetch.mockReturnValue({
            data: pokemon,
            isLoading: false,
            hasError: null
        });

        render( <MultipleCustomHooks />);

        expect( screen.getByText('Información de Pokémon') );
        expect( screen.getByText(`#123 - Charizard`) );
        
    });

    test('Debe de llamar la función de incrementar', () => {

        useFetch.mockReturnValue({
            data: pokemon,
            isLoading: false,
            hasError: null
        });


        render( <MultipleCustomHooks />);

        const nextButton = screen.getByRole('button', { name: 'Siguiente' });
        fireEvent.click( nextButton );

        expect( mockIncrement ).toHaveBeenCalled();

    });

});