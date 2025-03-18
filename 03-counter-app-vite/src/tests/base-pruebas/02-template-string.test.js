import { getSaludo } from "../../base-pruebas/02-template-string";


describe('Pruebas en el 02-template-string', () => {

  test('getSaludo debe retornar "Hola Francisco"', () => {
    const name = 'Francisco';
    const message = getSaludo( name );
    
    expect( message ).toBe(`Hola ${name}`);
  })
  
})
