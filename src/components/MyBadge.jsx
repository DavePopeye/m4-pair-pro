import React from 'react'
import { Button, Badge } from 'react-bootstrap'

class MyBadge extends React.Component {
    render() {
        return (
            <Button variant="primary">
                {this.props.category} <Badge variant="light">9</Badge>
                <span className="sr-only">unread messages</span>
            </Button>
        )
    }
}

export default MyBadge