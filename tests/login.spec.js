import { test, expect } from '@playwright/test';

test('Não deve logar quando o codigo de autenticação é inválido', async ({ page }) => {

  const usuario = {
    cpf: '00000014141',
    senha: '147258'
  }

  await page.goto('http://localhost:3000/');
  await page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(usuario.cpf);
  await page.getByRole('button', { name: 'Continuar' }).click();

  for (const element of usuario.senha) {
    await page.getByRole('button', { name: element }).click();
  }
  await page.getByRole('button', { name: 'Continuar' }).click();

  await page.getByRole('textbox', { name: '000000' }).fill('454545');
  await page.getByRole('button', { name: 'Verificar' }).click();

  await expect(page.locator('span')).toContainText('Código inválido. Por favor, tente novamente.');
});