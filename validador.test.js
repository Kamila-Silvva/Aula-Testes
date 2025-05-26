const isValidEmail =require('../Aula Oscar/validador');

describe('validação de Email', ()=>{ //Validando email
    test('Retorna true para email válido',()=>{expect(isValidEmail('user@example.com')).toBe(true)});
});

test('retorna para email sem dominio', () =>{ //valida se está sem o dominio do email
expect(isValidEmail ('user@')).toBe(false);
});

test('Retorna string vazia', () =>{ //valida se está em branco
    expect(isValidEmail('')).toBe(false);
});

