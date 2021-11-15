const jwt = require('jsonwebtoken')
const tokenModel = require('../models/token-model')

class tokenService {
  generatorTokens(payload) {
      const accessToken = jwt.sign(payload, process.env.JWT_ACCESS_TOKEN, {expiresIn: '30min'})
      const refreshToken = jwt.sign(payload, process.env.JWT_REFRESH_TOKEN, {expiresIn: '30d'})
      return {
          accessToken,
          refreshToken
      }
  }
  async saveToken(userId,refreshToken){
      const TokenData = await tokenModel.findOne({user: userId})
      if(TokenData) {
          TokenData.refreshToken  = refreshToken;
          return TokenData.save();
      }
      const token = await  tokenModel.create({user:userId, refreshToken})


  }
}

module.exports = new tokenService()