/* eslint-disable react/prop-types */
import { React } from 'react'
import { List } from 'rsuite'
import 'rsuite/dist/rsuite.min.css'

function ChatMessages (props) {
  const messages = props.messages || []

  return (
    <List styles={styles}>
      {
        messages.map((item, index) => (
          <List.Item key={index} index={index}>
            {item.message}
          </List.Item>
        ))
      }
    </List>
  )
}

const styles = {
  height: '90vh'
}

export default ChatMessages
