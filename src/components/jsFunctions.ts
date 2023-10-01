export const extractFunction = (script: string, functionName: string) => {
  const functionStart = script.indexOf(`function ${functionName}`)
  if (functionStart === -1) {
    throw new Error(`Function ${functionName} not found in the script.`)
  }

  const openingParenthesisIndex = script.indexOf('(', functionStart)
  const closingParenthesisIndex = script.indexOf(')', openingParenthesisIndex)
  const openingBraceIndex = script.indexOf('{', openingParenthesisIndex)

  if (openingParenthesisIndex === -1 || closingParenthesisIndex === -1 || openingBraceIndex === -1) {
    throw new Error(`Invalid function syntax.`)
  }

  const args = script
    .substring(openingParenthesisIndex + 1, closingParenthesisIndex)
    .split(',')
    .map((arg) => arg.trim())
    .filter((f) => f !== '')
  const source = script.substring(openingBraceIndex + 1, findMatchingClosingBrace(script, openingBraceIndex))

  return { source, args }
}

// Function to find the matching closing brace for an opening brace
export const findMatchingClosingBrace = (script: string, openingBraceIndex: number) => {
  const stack = []
  for (let i = openingBraceIndex; i < script.length; i++) {
    if (script[i] === '{') {
      stack.push('{')
    } else if (script[i] === '}') {
      stack.pop()
      if (stack.length === 0) {
        return i
      }
    }
  }
  return -1
}
