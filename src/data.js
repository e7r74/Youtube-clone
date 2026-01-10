export const API_KEY = 'AIzaSyAVx_khaXp5LLcTB-GHuRxhiVY-lku-9FE'

export const value_converter = (value) => {
  if (value >= 100000) {
    return Math.floor(value / 1000000) + 'M'
  } else if (value >= 1000) {
    return Math.floor(value / 1000) + 'k'
  } else {
    return value
  }
}
