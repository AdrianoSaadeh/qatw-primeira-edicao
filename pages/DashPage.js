

export class DashPage {

    constructor(page) {
        this.page = page
    }

    async verificaSaldo() {
        return await this.page.locator('#account-balance')
    }
}