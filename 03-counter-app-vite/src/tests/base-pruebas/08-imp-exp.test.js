import { getHeroeById, getHeroesByOwner } from "../../base-pruebas/08-imp-exp"

describe('Pruebas en 08-imp-exp', () => {
  test('getHeroeById debe retornar un héroe por ID', () => {
    const id = 1;
    const hero = getHeroeById( id );

    expect( hero ).toEqual({id: 1,name: 'Batman',owner: 'DC'});
  })
  
  test('getHeroeById debe retornar undefined si no existe el id', () => {
    const id = 100;
    const hero = getHeroeById(id);

    expect( hero ).toBeFalsy();
  })

  test('Debe retornar un arreglo con los héroes de DC', () => {
    const owner = 'DC';
    const heroes = getHeroesByOwner(owner);

    expect( heroes.length ).toEqual( 3 );
  })

  test('Debe retornar un arreglo con los héroes de Marvel', () => {
    const owner = 'Marvel';
    const heroes = getHeroesByOwner( owner );

    expect( heroes.length ).toEqual( 2 );
  })
  
  
  
})
