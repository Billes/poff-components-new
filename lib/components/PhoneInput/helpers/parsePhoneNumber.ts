import parsePhoneNumber_, { CountryCode, PhoneNumber } from 'libphonenumber-js'

export const parsePhoneNumber = (
  value?: string,
  countryCode?: CountryCode,
): PhoneNumber | undefined => {
  return parsePhoneNumber_(value || '', countryCode)
}
