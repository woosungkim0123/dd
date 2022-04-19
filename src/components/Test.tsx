import React, { FunctionComponent } from "react"


interface TextProp {
  text: string
}

const Test: FunctionComponent<TextProp> = function({text}) {
  return <>{text}</>
}

export default Test