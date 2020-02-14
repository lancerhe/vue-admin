const nodeEnv = process.env.NODE_ENV

let envConfigList = {
  production: {
    serverApi: 'https://demo.crackedzone.com'
  },
  testing: {
    serverApi: 'https://demo.ite.crackedzone.com'
  },
  development: {
    serverApi: 'http://127.0.0.1:3005'
  }
}

export const Config = envConfigList[nodeEnv]
