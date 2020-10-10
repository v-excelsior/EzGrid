export const Format = {
  Template: {
    standard(template) {
      const rows = template.map(row => `"${ row.join(' ') }" 1fr`)

      return `${ rows.join(' ') } / 1fr 1fr 1fr`
    }
  }
}
