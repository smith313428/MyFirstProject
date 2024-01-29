
const TEST_MODE = 1
const CURRENT_MODE = TEST_MODE

class Config {
    constructor() {
        this.config = {}
        this.configReady = false;
        if (CURRENT_MODE === TEST_MODE) {
            this.BACKEND_API_URL = "http://demo-dev.sharetoken.io:3000" 

        }
    }
}

export default (new Config);
