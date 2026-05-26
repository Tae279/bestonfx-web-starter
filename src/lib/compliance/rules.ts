export const bannedPhrases = [
  'กำไรแน่นอน',
  'ไม่ขาดทุน',
  'ไร้ความเสี่ยง',
  'risk-free',
  'guaranteed profit',
  'win rate 100%',
  'แม่น 100%',
  'รายได้แน่นอน',
  'รวยเร็ว',
  'เปลี่ยนชีวิต',
  'อันดับ 1',
  'ดีที่สุด'
] as const;

export const mandatoryRiskWarning =
  'Forex/CFD และ Leverage มีความเสี่ยงสูง อาจทำให้สูญเสียเงินลงทุน โปรดศึกษาข้อมูลและความเสี่ยงก่อนตัดสินใจ';

export function findBannedPhrases(input: string) {
  const normalized = input.toLowerCase();
  return bannedPhrases.filter((phrase) => normalized.includes(phrase.toLowerCase()));
}
