export const FACTORY_ADDRESS = '0x76854443c1fc36bbad8e9ae361ed415dd673640f'
export const BUNDLE_ID = '1'

export const timeframeOptions = {
  WEEK: '1 week',
  MONTH: '1 month',
  // THREE_MONTHS: '3 months',
  // YEAR: '1 year',
  ALL_TIME: 'All time'
}

// token list urls to fetch tokens from - use for warnings on tokens and pairs
export const SUPPORTED_LIST_URLS__NO_ENS = [
  'https://raw.githubusercontent.com/pancakeswap/pancake-swap-interface/master/src/constants/token/pancakeswap.json'
]

// hide from overview list
export const OVERVIEW_TOKEN_BLACKLIST = [
  '0x495c7f3a713870f68f8b418b355c085dfdc412c3',
  '0xc3761eb917cd790b30dad99f6cc5b4ff93c4f9ea',
  '0xe31debd7abff90b06bca21010dd860d8701fd901',
  '0xfc989fbb6b3024de5ca0144dc23c18a063942ac1',
  '0xe40fc6ff5f2895b44268fd2e1a421e07f567e007',
  '0xfd158609228b43aa380140b46fff3cdf9ad315de',
  '0xc00af6212fcf0e6fd3143e692ccd4191dc308bea',
  '0x205969b3ad459F7eBA0DEe07231A6357183D3fb6'
]

// pair blacklist
export const PAIR_BLACKLIST = ['0xb6a741f37d6e455ebcc9f17e2c16d0586c3f57a5']

/**
 * For tokens that cause erros on fee calculations
 */
export const FEE_WARNING_TOKENS = ['0xd46ba6d942050d489dbd938a2c909a5d5039a161']

export const APY_TYPE_LIST = [
  {
    yToken: '0xb2Dd446176cd19a754A936cdc124CD85Fb6d668e',
    type: 'dForce'
  },
  {
    yToken: '0x96328E0ca47175eBB45D94df6fEd2B0Cb19CB16B',
    type: 'dForce'
  },
  {
    yToken: '0xB6f04512017F14393bC2ba794A545F5E4F5a1Df5',
    type: 'dForce'
  },
  {
    yToken: '0x5C90308849e666274ae6B0C9759E278Aa0d1b4Fc',
    type: 'dForce'
  },
  {
    yToken: '0x03eFf545083D98063EDB933BF03D69c5D22409C3',
    type: 'dForce'
  },
  {
    yToken: '0xAaE97DC55ca5147d6b4e1e6C2c43fF89Af1dC146',
    type: 'ForTube'
  },
  {
    yToken: '0x7fb93197BBd466231147A082bbF3F41Dd9e3ed6A',
    type: 'ForTube'
  }
]
