import { getUser, getUsuarioActivo } from "../../base-pruebas/05-funciones";

describe('Pruebas en 05-funciones', () => {
  test('getUser debe retornar un objeto ', () => {
    const testUser = {
        uid: 'ABC123',
        username: 'El_Papi1502'
    };

    const user = getUser();

    expect( testUser ).toEqual( user );
  });

  test('getUsuario debe retornar un objeto ', () => {
    const name = 'Francisco';
    
    const testUser = {
        uid: 'ABC567',
        username: name,
    }

    const user = getUsuarioActivo('Francisco');

    expect( testUser ).toEqual( user );
  })
  
  
})
