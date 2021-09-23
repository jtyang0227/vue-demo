export default {
  validate(key, value) {
    const errors = [];

    if (!value) {
      errors.push(`${key}을 입력해주세요.`);
      this.$refs.memberId.focus();
    } else {
      (value.length < 3) ? errors.push(`${key}는 3자 이상 입력해주세요.`) : null;
    }

    return errors;
  }
}