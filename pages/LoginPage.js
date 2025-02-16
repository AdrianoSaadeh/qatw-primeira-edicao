

export class LoginPage {

    constructor(page) {
        this.page = page
    }

    async acessaPagina() {
        await this.page.goto('http://paybank-mf-auth:3000/')
    }

    async informaCpf(cpf) {
        await this.page.getByRole('textbox', { name: 'Digite seu CPF' }).fill(cpf)
        await this.page.getByRole('button', { name: 'Continuar' }).click()
    }

    async informaSenha(senha) {
        for (const element of senha) {
            await this.page.getByRole('button', { name: element }).click()
        }
        await this.page.getByRole('button', { name: 'Continuar' }).click()
    }

    async informa2FA(codigo) {
        await this.page.getByRole('textbox', { name: '000000' }).fill(codigo)
        await this.page.getByRole('button', { name: 'Verificar' }).click()
    }

    async verificaSaldo() {
        return await this.page.locator('#account-balance')
    }
}